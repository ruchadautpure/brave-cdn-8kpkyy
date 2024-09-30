import React from "react";

const BookList = ({ books, onSelect }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id} onClick={() => onSelect(book)}>
          {book.title}
        </li>
      ))}
    </ul>
  );
};
export default BookList;
