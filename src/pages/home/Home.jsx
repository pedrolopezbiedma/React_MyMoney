// Styles
import styles from "./Home.module.css";

// Components
import NewTransaction from "../../components/NewTransaction";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>
      <div className={styles.sidebar}>
        <NewTransaction />
      </div>
    </div>
  );
};

export default Home;
