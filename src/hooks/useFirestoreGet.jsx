// React
import { useState, useEffect } from "react";

// Firebase
import { projectFirestore } from "../firebase/config";

const useFirestoreGet = (collectionName) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const collectionRef = projectFirestore.collection(collectionName);

    const unsub = collectionRef.onSnapshot((snapshot) => {
      let updatedDocuments = [];
      snapshot.docs.forEach((doc) => {
        let document = { ...doc.data(), id: doc.id };
        updatedDocuments.push(document);
      });
      setDocuments(updatedDocuments);
    });

    return () => unsub();
  }, [collectionName]);

  return { documents };
};

export { useFirestoreGet };
