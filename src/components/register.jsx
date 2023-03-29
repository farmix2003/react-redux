import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { icon } from "../constants";
import {
  registerUserStart,
  registerUserFail,
  registerUserSuccess,
} from "../slice/auth";
import { Input } from "../ui";
import AuthRegister from "../service/auth";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(registerUserStart());
    const user = { username: name, email, password };
    try {
      dispatch(registerUserSuccess());
      const response = await AuthRegister.userRegister(user);
      console.log(response);
      console.log(user);
    } catch (error) {
      dispatch(registerUserFail());
    }
  };
  return (
    <div className="text-center">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-2" src={icon} alt="logo" width="75" />
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <Input label={"Username"} state={name} setState={setName} />
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
            {isLoading ? "loading..." : "Register"}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  );
};

export default Register;
