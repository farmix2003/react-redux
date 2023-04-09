import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../constants";
import { removeItem } from "../helpers/persitance-storage";
import { logOutUser } from "../slice/auth";

const Navabr = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logOutUser());
    removeItem("token");
    navigate("/login");
  };
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
            <p className="me-2 py-2 m-0 link-body-emphasis text-decoration-none">
              {user.username}
              <Link
                className="me-2 mx-4 py-2 m-2 link-body-emphasis text-decoration-none "
                to={"/create-article"}
              >
                Create
              </Link>
            </p>
            <button className="btn btn-outline-danger" onClick={logOut}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              className="me-3 py-2 link-body-emphasis text-decoration-none"
              to={"/login"}
            >
              Login
            </Link>

            <Link
              className="me-3 py-2 link-body-emphasis text-decoration-none"
              to={"/register"}
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navabr;
