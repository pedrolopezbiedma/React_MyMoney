// React
import { useState } from "react";

const CreateTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleCreate = (event) => {
    event.preventDefault();
    console.log("Values are -->", name, amount);
    setName("");
    setAmount("");
  };

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleCreate}>
        <label>
          <span>Name: </span>
          <input
            required
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          <span>Amount: </span>
          <input
            required
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>
        <button className="btn">Create</button>
      </form>
    </>
  );
};

export default CreateTransaction;
