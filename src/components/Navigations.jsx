/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link, useLocation } from "react-router-dom";
import bookLogo from "../assets/books.png";

const Navigation = ({ token, setToken }) => {
  const location = useLocation();
  return (
    <div className="nav-bar">
      <div className="logo">
        <img id="logo-image" src={bookLogo} />
        <strong style={{ fontSize: "35px" }}>Library App</strong>
      </div>

      <div className="navbars">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            margin: "30px",
            color: location.pathname === "/" ? "blue" : "black",
            backgroundColor: location.pathname === "/" ? "lightgreen" : "",
            padding: "10px",
            borderRadius: "10px",
            fontFamily: "cursive",
            fontSize: "25px",
          }}
        >
          Home
        </Link>
        {token ? (
          <>
            <Link
              to="/account"
              style={{
                textDecoration: "none",
                margin: "30px",
                color: location.pathname === "/account" ? "blue" : "black",
                backgroundColor:
                  location.pathname === "/account" ? "lightgreen" : "",
                padding: "10px",
                borderRadius: "10px",
                fontFamily: "cursive",
                fontSize: "25px",
              }}
            >
              Account
            </Link>
            <Link
              to="/login"
              onClick={() => {
                setToken(undefined);
              }}
              style={{
                textDecoration: "none",
                margin: "30px",
                color: location.pathname === "/logout" ? "blue" : "black",
                backgroundColor:
                  location.pathname === "/logout" ? "lightgreen" : "",
                padding: "10px",
                borderRadius: "10px",
                fontFamily: "cursive",
                fontSize: "25px",
              }}
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                margin: "30px",
                color: location.pathname === "/login" ? "blue" : "black",
                backgroundColor:
                  location.pathname === "/login" ? "lightgreen" : "",
                padding: "10px",
                borderRadius: "10px",
                fontFamily: "cursive",
                fontSize: "25px",
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                margin: "30px",
                color: location.pathname === "/register" ? "blue" : "black",
                backgroundColor:
                  location.pathname === "/register" ? "lightgreen" : "",
                padding: "10px",
                borderRadius: "10px",
                fontFamily: "cursive",
                fontSize: "25px",
              }}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
