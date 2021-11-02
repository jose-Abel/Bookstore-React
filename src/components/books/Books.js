import React, { useState } from 'react';

const Books = () => {
  const [books] = useState([]);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>{book}</div>
      ))}
      <button type="button">Remove</button>

      <form>
        <label htmlFor="add-book">
          ADD NEW BOOK
          <input type="text" id="add-book" />
        </label>
        <button type="button">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Books;
