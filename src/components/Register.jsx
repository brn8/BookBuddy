/* TODO - add your code to create a functional React component that renders a registration form */
import { useState } from "react";
import { addNewUserToDB } from "../API/Api";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const addUser = await addNewUserToDB({
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    });
    setRegister(addUser);
    if (addUser.token != undefined) {
      navigate("/login");
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="registrationForm">
      {/* <h1>Register</h1> */}
      <p style={{ color: "red" }}>{register.message}</p>
      <form onSubmit={handleSubmit}>
        <label className="form-label">First Name: </label>
        <input
          type="text"
          value={firstName}
          className="form-control"
          onChange={(e) => setFirstName(e.target.value)}
          minLength={3}
          required
        />
        <br />
        <label className="form-label">Last Name: </label>
        <input
          type="text"
          value={lastName}
          className="form-control"
          onChange={(e) => setLastName(e.target.value)}
          minLength={3}
          required
        />
        <br />
        <label className="form-label">Email: </label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label className="form-label">Password: </label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={7}
          required
        />
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Register;
