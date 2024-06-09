const express = require("express");

const app = express();
const PORT = 3690;

// Receiveing incoming from the client configuration

app.use(express.json());

const books = [
  { id: "1", title: "Vacnamrut" },
  { id: "2", title: "Swamini Vato" },
  { id: "3", title: "Bhram vidhya na Path" },
];

// *  home route

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to the API",
  });
});
// * Fetching all books
app.get("/books", (req, res) => {
  res.json({
    status: "success",
    message: "Books Fetched",
    data: books,
  });
});
// * Fetching a book
app.get("/books/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const bookFound = books.find((book) => book.id === id);
  console.log(bookFound);
  if (!bookFound) {
    return res.json({
      status: "fail",
      message: `Book not found with id ${id}`,
    });
  }
  res.json({
    status: "success",
    message: "Books Fetched",
    data: bookFound,
  });
});
// * Create a book
app.post("/books", (req, res) => {
  console.log(req.body);
  const newPost = req.body;
  books.push(newPost);
  res.json({
    status: "success",
    message: "Books Created succesfully",
    data: books,
  });
});

//  * Start the server
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
