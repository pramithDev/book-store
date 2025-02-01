const Book = require('./book.model');

const postABook = async (req, res) => {
    try {
        const newBook = await Book({ ...req.body });
        await newBook.save();
        res.status(200).send({ message: "Book created successfully", book: newBook});
    } catch (error) {
        console.error("Error creating book: ", error);
        res.status(500).json({ message: error.message });
    }
}

// // get all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.status(200).send(books);
    } catch (error) {
        console.error("Error getting books: ", error);
        res.status(500).json({ message: error.message });
    }
}

// // Single book endpoint
const getSingleBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if(!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).send(book);
    } catch (error) {
        console.error("Error getting book: ", error);
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    postABook, 
    getAllBooks,
    getSingleBook
};