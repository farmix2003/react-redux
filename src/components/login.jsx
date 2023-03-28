import React, { useState } from "react";
import { icon } from "../constants";
import { Input } from "../ui";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="text-center">
      <main class="form-signin w-25 m-auto">
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
          {/* <Input type={"password"} label={"Confrim password"} /> */}

          <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">
            Sign in
          </button>
          <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
