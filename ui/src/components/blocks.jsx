import React, { useEffect, useState } from "react";
import AddressSelector from "./addressSelector";
import Header from "./header";
import BlockDetails from "./blockDetails";
import WidgetsIcon from "@mui/icons-material/Widgets";
import TransactionForm from "./TransactionForm";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

function Blocks() {
  const [ethereumAddresses, setEthereumAddresses] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blocks/addresses")
      .then((res) => res.json())
      .then((json) => setEthereumAddresses(json))
      .catch((error) => console.error(error));
  }, []);

  const handleAddressChange = (address) => {
    fetch(`http://localhost:5000/blocks/details/${address}`)
      .then((res) => res.json())
      .then((json) => setSelectedBlock(json))
      .catch((error) => console.error(error));
  };

  const sendTransaction = ({ source, destination, amount }) => {
    fetch("http://localhost:5000/transactions/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ source, destination, amount }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("Transaction sent:", json);
        // Refresh transaction history after sending transaction
        fetchTransactionHistory();
      })
      .catch((error) => console.error("Error sending transaction:", error));
  };

  const fetchTransactionHistory = () => {
    fetch("http://localhost:5000/transactions/history")
      .then((res) => res.json())
      .then((json) => setTransactionHistory(json))
      .catch((error) => console.error("Error fetching transaction history:", error));
  };

  useEffect(() => {
    fetchTransactionHistory();
  }, []);

  return (
    <>
      <Header title="Blocks" headerSize="h5" icon={WidgetsIcon} />
      <AddressSelector
        InputLabel="Ethereum Block"
        LabelId="ethereum-block-select-label"
        handleAction={handleAddressChange}
        addresses={ethereumAddresses}
      />
      <div className="container mx-auto">
        <BlockDetails {...selectedBlock} />
      </div>
      <TransactionForm sendTransaction={sendTransaction} />
      <div className="container mx-auto">
      <Typography variant="h6" gutterBottom className="my-4">
        Transaction History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Source</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionHistory.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.source}</TableCell>
                <TableCell>{transaction.destination}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
  );
}

export default Blocks;
