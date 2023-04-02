// BookList.js
import { Col, Row } from "antd";
import React, { useState } from "react";
import BookListItem from "./book-list-item";
import BookModal from "./book-modal";

const books = require("./data.json");

function BookList() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleModalClose = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <h1>Book List</h1>
      <Row justify="center" align="middle">
        {books.map((book) => (
          <Col span={8} align="middle" flex="auto">
            <BookListItem
              key={book.id}
              book={book}
              onBookClick={handleBookClick}
            />
          </Col>
        ))}
      </Row>
      {selectedBook && (
        <BookModal book={selectedBook} onClose={handleModalClose} />
      )}
    </div>
  );
}

export default BookList;
