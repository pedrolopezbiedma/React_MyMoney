// React
import { useState } from "react";

// Styles
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("values are -->", email, password);
  };

  return (
    <form className={styles["login-form"]} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Login</h2>
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
      <button className="btn">Login</button>
    </form>
  );
};

export default Login;
