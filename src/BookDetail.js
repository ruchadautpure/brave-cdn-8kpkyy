// src/BookDetail.js
import React from "react";

const BookDetail = ({ book }) => {
  if (!book) {
    return <p>Select a book to see the details.</p>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.Author}</p>
      <p>Description: {book.description}</p>
      <p>Published Year: {book.year}</p>
    </div>
  );
};

export default BookDetail;
