// BookListItem.js
import { Card } from "antd";
import React from "react";

const { Meta } = Card;

function BookListItem({ book, onBookClick }) {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={book.imageUrl} />}
      onClick={onBookClick}
    >
      <Meta title={book.title} description={book.author} />
    </Card>
  );
}

export default BookListItem;
