import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { icon } from "../constants";
import { signUserFail, signUserStart, signUserSuccess } from "../slice/auth";
import { Input } from "../ui";
import { ValidationError } from ".";
import AuthService from "../service/auth";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { username: name, email, password };
    try {
      const response = await AuthService.userRegister(user);
      dispatch(signUserSuccess(response.user));
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      dispatch(signUserFail(error.response.data.errors));
    }
  };
  return (
    <div className="text-center">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-2" src={icon} alt="logo" width="75" />
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
          <ValidationError />
          <Input
            type={"text"}
            label={"Username"}
            state={name}
            setState={setName}
          />
          <Input
            label={"Email address"}
            type={"email"}
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
            {isLoading ? "loading..." : "Register"}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017-2023</p>
        </form>
      </main>
    </div>
  );
};

export default Register;
