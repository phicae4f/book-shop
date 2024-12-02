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
    try{
        const books = await Book.find().sort({createdAt: -1})
        res
        .status(200)
        .send(books);
    }catch(error){
        console.error("Error during fetching all books", error);
        res.status(500).send({ message: "Error during fetching all books" });
    }
}

module.exports = {
  postABook,
  getAllBooks
};
