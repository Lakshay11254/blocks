const mongoose = require("mongoose");

const MONGODB_URI = "mongodb://localhost:27017/blocks"; //update uri?

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false, 
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});
