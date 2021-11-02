import React, { useState } from 'react';
import Button from '../UI/Button';
import Form from '../UI/Form';

const Books = () => {
  const [books] = useState([]);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>{book}</div>
      ))}
      <Button content="Remove" />

      <Form id="add-input" labelContent="ADD NEW BOOK" />
    </div>
  );
};

export default Books;
