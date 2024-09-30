import React, { useState } from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const books = [
    {
      id: 1,
      title: "Fire Wings",
      Author: "APJ Abdul Kalam",
      description: "helloooo",
      year: "1990",
    },
    {
      id: 2,
      title: "harry",
      Author: "rucha",
      description: "helloooo",
      year: "1994",
    },
    {
      id: 3,
      title: "hay",
      Author: "niraj",
      description: "helloooo",
      year: "1998",
    },
  ];

  return (
    <>
      <h1>Book List</h1>
      <BookList books={books} onSelect={setSelectedBook} />
      <BookDetail book={selectedBook} />
    </>
  );
};
export default App;
