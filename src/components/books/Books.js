import React, { useState } from 'react';


const Books = () => {
  const [books, setBooks] = useState([]);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>{book}</div>
      ))}
      <button>Remove</button>

      <form>
        <label for="add-book">ADD NEW BOOK</label>
        <input id="add-book"/>
        <button>ADD BOOK</button>
      </form>
    </div>
    );
}

export default Books;