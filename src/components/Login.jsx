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
    <>
      <h1>Login</h1>
      <p style={{ color: "red" }}>{message.message}</p>
      <form onSubmit={handlerSubmit}>
        <label>Username: </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password: </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          minLength={7}
          required
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
