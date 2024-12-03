const Book = require("./book.model");

const postABook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book posted successfully", book: newBook });
  } catch (error) {
    console.error("Error during creating a book", error);
    res.status(500).send({ message: "Error during creating a book" });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.error("Error during fetching all books", error);
    res.status(500).send({ message: "Error during fetching all books" });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send({ message: "Book is not found" });
    }
    res.status(200).send(book);
  } catch (error) {
    console.error("Error during fetching a book", error);
    res.status(500).send({ message: "Error during fetching a book" });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).send({ message: "Book is not found" });
    }
    res.status(200).send({
      message: "Book updates successfully",
      book: updatedBook,
    });
  } catch (error) {
    console.error("Error during updating a book", error);
    res.status(500).send({ message: "Error during updating a book" });
  }
};

const deleteABook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).send({ message: "Book is not found" });
    }
    res.status(200).send({
      message: "Book deleted successfully",
      book: deletedBook,
    });
  } catch (error) {
    console.error("Error during deleting a book", error);
    res.status(500).send({ message: "Error during deleting a book" });
  }
};

module.exports = {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteABook,
};
