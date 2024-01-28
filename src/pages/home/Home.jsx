// Styles
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction List</div>
      <div className={styles.sidebar}>Transaction Form</div>
    </div>
  );
};

export default Home;
