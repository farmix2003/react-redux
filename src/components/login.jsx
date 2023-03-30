import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ValidationError } from ".";
import { icon } from "../constants";
import AuthService from "../service/auth";
import { signUserFail, signUserStart, signUserSuccess } from "../slice/auth";
import { Input } from "../ui";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { email, password };
    try {
      const response = await AuthService.userLogin(user);
      dispatch(signUserSuccess(response.user));
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      dispatch(signUserFail(error.response.data.errors));
    }
  };
  const { isLoading, loggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    if (loggedIn) {
      return navigate("/");
    }
  }, []);
  return (
    <div className="text-center">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-2" src={icon} alt="" width="75" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <ValidationError />
          <Input
            type={"email"}
            label={"Email address"}
            state={email}
            setState={setEmail}
          />
          <Input
            type={"password"}
            label={"Password"}
            state={password}
            setState={setPassword}
          />

          <button
            className="w-100 btn btn-lg btn-primary mt-3"
            type="submit"
            disabled={isLoading}
            onClick={submitHandler}
          >
            {isLoading ? "loading..." : "Login"}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
