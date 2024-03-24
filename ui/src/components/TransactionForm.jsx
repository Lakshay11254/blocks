import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  
} from "@mui/material";
import Header from "./header";
import PaidIcon from "@mui/icons-material/Paid";
import ReceiptIcon from "@mui/icons-material/Receipt";

const TransactionForm = ({ sendTransaction }) => {
  // Mock addresses
  const mockAddresses = [
    "0x123abcad1kaa8570dab82cba2ba8570ff2g222d1",
    "0x456defdakl21dad1ka90069ecba8570dab82cba2",
    "0xffaa6990069ecba8570dab82cba2caf6ff77b8fa",
    "0xcefd1cf4fa1369a36f1bcf98f7c7b0001bf8c9ba",
    "0xafaa6990069ecba8570dab82cba2caf6ff77bhgg",
    "0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e",
  ];

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
      <Header title="Transactions" headerSize="h5" icon={ReceiptIcon} />
      <Header title="Send Transactions" headerSize="h5" icon={PaidIcon} />

      {/* <Typography variant="h6" headerSize="h5" icon={PaidIcon}>Send Transaction</Typography> */}
      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel id="source-address-label">Source Address</InputLabel>
        <Select
          labelId="source-address-label"
          id="source-address"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        >
          {mockAddresses.map((address) => (
            <MenuItem key={address} value={address}>
              {address}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel id="destination-address-label">
          Destination Address
        </InputLabel>
        <Select
          labelId="destination-address-label"
          id="destination-address"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          {mockAddresses.map((address) => (
            <MenuItem key={address} value={address}>
              {address}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        sx={{ my: 2 }}
      />
      <Button variant="contained" onClick={handleSendTransaction}>
        Send
      </Button>
    </div>
  );
};

export default TransactionForm;
