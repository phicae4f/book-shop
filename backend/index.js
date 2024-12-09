require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors")

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

//middleware
app.use(express.json())
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true,
}))

//routes

const bookRoutes = require("./src/books/book.route")
const orderRoutes = require("./src/orders/order.route")

app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)


const MONGODB_URL = process.env.DB_URL
async function main() {
  await mongoose.connect("mongodb://localhost:27017/book-shop");
  app.use("/", (req, res) => {
    res.send("HI");
  });
}

main()
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
