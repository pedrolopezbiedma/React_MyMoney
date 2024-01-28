// Styles
import styles from "../pages/home/Home.module.css";

// Hooks
import { useFirestoreGet } from "../hooks/useFirestoreGet";

const TransactionList = () => {
  const { documents } = useFirestoreGet("transactions");

  return (
    <ul className={styles.transactions}>
      {documents &&
        documents.map((doc) => (
          <li key={doc.id}>
            <p className={styles.name}>{doc.name}</p>
            <p className={styles.amount}>{doc.amount}</p>
          </li>
        ))}
    </ul>
  );
};

export default TransactionList;
