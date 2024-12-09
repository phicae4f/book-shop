const express = require("express");
const { postABook, getAllBooks, getSingleBook, updateBook, deleteABook } = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const router = express.Router();

//post a book
router.post("/create-book", verifyAdminToken, postABook);

//get all books
router.get("/", getAllBooks)

//get a book
router.get("/:id", getSingleBook)

//update a book
router.put("/edit/:id", verifyAdminToken, updateBook)

//delete a book
router.delete("/:id", verifyAdminToken, deleteABook)

module.exports = router;
