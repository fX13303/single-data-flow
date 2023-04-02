// BookList.js
import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { PUBLIC_API_URL } from "../../constants";
import BookListItem from "./book-list-item";
import BookModal from "./book-modal";
import NewBookModal from "./new-book-form";

function BookList() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(PUBLIC_API_URL);
      const data = await response.json();
      setBooks(data);
    }
    fetchData();
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleModalClose = () => {
    setSelectedBook(null);
  };

  const handleSubmit = (data) => {
    setLoading(true);
    const { title, author, imageUrl, description } = data;
    const newBook = {
      id: books.length + 1,
      title,
      author,
      imageUrl,
      description,
    };
    fetch(PUBLIC_API_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(newBook),
    })
      .then((res) => {
        if (res.ok) {
          setLoading(false);
          return res.json();
        }
        // handle error
      })
      .then((newBook) => {
        const updatedBooks = [...books, newBook];
        setBooks(updatedBooks);
        setVisible(false);
      })
      .catch((error) => {
        // handle error
      });
  };

  const handleDelete = (bookId) => {
    setLoading(true);
    fetch(`${PUBLIC_API_URL}/${bookId}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          setLoading(false);
          setSelectedBook(null);
          return res.json();
        }
      })
      .then((deletedBook) => {
        const updatedBooks = books.filter((book) => book.id !== deletedBook.id);
        setBooks(updatedBooks);
      });
  };
  return (
    <div>
      <h1>Book List</h1>
      <Button onClick={() => setVisible(true)}>New Book</Button>
      <NewBookModal
        visible={visible}
        onCreate={handleSubmit}
        onCancel={() => setVisible(false)}
        loading={loading}
      />
      <Row justify="center" align="middle" gutter={[16, 16]}>
        {books.map((book, index) => (
          <Col span={6} align="middle" key={index}>
            <BookListItem
              book={book}
              onBookClick={() => handleBookClick(book)}
            />
          </Col>
        ))}
      </Row>
      {selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={handleModalClose}
          onDelete={() => handleDelete(selectedBook.id)}
          loading={loading}
        />
      )}
    </div>
  );
}

export default BookList;
