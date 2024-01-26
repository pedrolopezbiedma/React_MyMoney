// React
import { Link } from "react-router-dom";

// Styles
import styles from "./Navbar.module.css";

// Hooks
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logoutUser, isPending } = useLogout();

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>My Money</li>

        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        {!isPending && (
          <li onClick={handleLogout}>
            <button className="btn">Logout</button>
          </li>
        )}
        {isPending && (
          <li onClick={handleLogout}>
            <button className="btn">Loading...</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
