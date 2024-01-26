// Styles
import { useState } from "react";
import styles from "./Signup.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Values are -->", email, password, displayName);
  };

  return (
    <form className={styles["signup-form"]} onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>Email: </span>
        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        <span>Password: </span>
        <input
          required
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <label>
        <span>Dislay Name: </span>
        <input
          required
          type="text"
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
        />
      </label>
      <button className="btn">Signup</button>
    </form>
  );
};

export default Signup;
