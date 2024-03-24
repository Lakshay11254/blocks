// components/TransactionForm.jsx
import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

const TransactionForm = ({ sendTransaction }) => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [amount, setAmount] = useState("");

  const handleSendTransaction = () => {
    sendTransaction({ source, destination, amount });
    setSource("");
    setDestination("");
    setAmount("");
  };

  return (
    <div>
      
      <Typography variant="h6">Send Transaction</Typography>
      <TextField
        label="Source Address"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        fullWidth
      />
      <TextField
        label="Destination Address"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        fullWidth
      />
      <TextField
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleSendTransaction}>
        Send
      </Button>
    </div>
  );
};

export default TransactionForm;
