import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from '../UI/Form';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}

      <Form id="add-input" labelContent="ADD NEW BOOK" />
    </div>
  );
};

export default Books;
