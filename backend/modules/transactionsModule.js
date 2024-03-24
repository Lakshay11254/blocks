// backend/modules/transactionsModule.js
const Transaction = require("../models/Transaction"); // Assuming you have a Transaction model

const getTransactionHistory = async () => {
  try {
    // Fetch transaction history from the database
    const transactions = await Transaction.find();
    return transactions;
  } catch (error) {
    console.error("Error fetching transaction history:", error);
    return [];
  }
};

const sendTransfer = async (source, destination, amount) => {
  try {
    // Mock receipt creation
    const receipt = {
      source,
      destination,
      amount,
      gasUsed: 100, // Mock gas used
      receiptHash: "mock_receipt_hash", // Mock receipt hash
    };

    // Save the transaction to the database
    const newTransaction = new Transaction(receipt);
    await newTransaction.save();

    return receipt;
  } catch (error) {
    console.error("Error sending transfer:", error);
    throw error;
  }
};

module.exports = {
  getTransactionHistory,
  sendTransfer,
};
