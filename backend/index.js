const express = require("express");
const app = express();

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
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
