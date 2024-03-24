const express = require("express");
const mongoose = require("./mongoose"); // Import MongoDB connection
const blocksModule = require("./modules/blocksModule");
const transactionsModule = require("./modules/transactionsModule"); // Import transactionsModule

const app = express();

var cors = require("cors");
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/blocks/addresses", (req, res) => {
  const blockAddresses = blocksModule.getAddresses();
  res.json(blockAddresses);
});

app.get("/blocks/details/:addressid", (req, res) => {
  const addressid = req.params.addressid;
  const blockDetail = blocksModule.getDetail(addressid);

  if (blockDetail) {
    res.json(blockDetail);
  } else {
    res.status(404).json({ message: "Block not found" });
  }
});

app.get("/transactions/history", async (req, res) => {
  try {
    const transactionHistory = await transactionsModule.getTransactionHistory();
    res.json(transactionHistory);
  } catch (error) {
    console.error("Error fetching transaction history:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/transactions/send", async (req, res) => {
  const { source, destination, amount } = req.body;
  try {
    const receipt = await transactionsModule.sendTransfer(source, destination, amount);
    res.json({ message: "Transfer successful", receipt });
  } catch (error) {
    console.error("Error sending transfer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
