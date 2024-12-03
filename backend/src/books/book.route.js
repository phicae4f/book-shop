const express = require("express");
const { postABook, getAllBooks, getSingleBook, updateBook, deleteABook } = require("./book.controller");
const router = express.Router();

//post a book
router.post("/create-book", postABook);

//get all books
router.get("/", getAllBooks)

//get a book
router.get("/:id", getSingleBook)

//update a book
router.put("/edit/:id", updateBook)

//delete a book
router.delete("/:id", deleteABook)

module.exports = router;
