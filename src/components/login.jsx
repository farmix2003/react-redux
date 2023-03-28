import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { icon } from "../constants";
import { loginUserStart } from "../slice/auth";
import { Input } from "../ui";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserStart());
  };
  console.log(isLoading);
  return (
    <div className="text-center">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-2" src={icon} alt="" width="75" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

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
