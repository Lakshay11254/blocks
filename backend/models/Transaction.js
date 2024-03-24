// backend/models/Transaction.js
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  source: { type: String, required: true },
  destination: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: "success" }, // Assuming transaction is successful by default
  gasUsed: { type: Number },
  receiptHash: { type: String },
}, { timestamps: true });

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
