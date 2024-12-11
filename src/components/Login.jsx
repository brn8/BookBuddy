import { useState } from "react";
import { userLogin } from "../API/Api";
import { useNavigate } from "react-router-dom";
const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({});
  const navigate = useNavigate();
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const login = await userLogin({ email: email, password: password });
    setMessage(login);
    setToken(login.token);
    if (login.token != undefined) {
      navigate("/account");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="loginForm">
      {/* <h1>Login</h1> */}
      <p style={{ color: "red" }}>{message.message}</p>
      <form onSubmit={handlerSubmit}>
        <label className="form-label">Username: </label>
        <br />
        <input
          type="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <label className="form-label">Password: </label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          minLength={7}
          required
        />
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Login;
