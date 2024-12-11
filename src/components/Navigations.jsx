/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link, useNavigate } from "react-router-dom";
import bookLogo from "../assets/books.png";

const Navigation = ({ token, setToken }) => {
  const navigate = useNavigate();
  return (
    <div className="nav-bar">
      <span>
        <img id="logo-image" src={bookLogo} />
        <strong style={{ fontSize: "35px" }}>Library App</strong>
      </span>
      <Link to="/" style={{ textDecoration: "none", margin: "30px" }}>
        Home
      </Link>
      {token ? (
        <>
          <Link
            to="/account"
            style={{ textDecoration: "none", margin: "30px" }}
          >
            Account
          </Link>
          <Link
            to="/login"
            onClick={() => {
              setToken(undefined);
            }}
            style={{ textDecoration: "none", margin: "30px" }}
          >
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" style={{ textDecoration: "none", margin: "30px" }}>
            Login
          </Link>
          <Link
            to="/register"
            style={{ textDecoration: "none", margin: "30px" }}
          >
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default Navigation;
