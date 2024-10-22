const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello Bank of Taiwan");
});

// app.post("/api/products", async(req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// });

app.get("/api/products", async(req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
});

mongoose
  .connect(
    "mongodb+srv://tanzimulislam799:YDQuJWdyimsYmIoy@cluster0.10tes.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
