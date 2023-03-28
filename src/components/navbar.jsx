import { Link } from "react-router-dom";
import { logo } from "../constants";

const Navabr = () => {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#">
          Features
        </a>
        <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#">
          Enterprise
        </a>
        <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#">
          Support
        </a>
        <a class="py-2 link-body-emphasis text-decoration-none" href="#">
          Pricing
        </a>
      </nav>
    </div>
  );
};

export default Navabr;
