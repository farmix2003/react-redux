import { useState } from "react";
import { icon } from "../constants";
import { Input } from "../ui";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

          <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
            Sign up
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  );
};

export default Register;
