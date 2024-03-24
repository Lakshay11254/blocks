// //components/blocks.jsx

import React, { useEffect, useState } from "react";
import AddressSelector from "./addressSelector";
import Header from "./header";
import BlockDetails from "./blockDetails";
import WidgetsIcon from "@mui/icons-material/Widgets";




import TransactionForm from "./TransactionForm"; // Import TransactionForm

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
      <div className="container">
        <BlockDetails {...selectedBlock} />
      </div>
      <TransactionForm sendTransaction={sendTransaction} />
      <div className="container">
        <Header title="Transaction History" headerSize="h6" />
        <ul>
          {transactionHistory.map((transaction, index) => (
            <li key={index}>
              {`Source: ${transaction.source}, Destination: ${transaction.destination}, Amount: ${transaction.amount}`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Blocks;
