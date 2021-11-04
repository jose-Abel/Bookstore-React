import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../UI/Form';
import Book from './Book';
import { getBooks } from '../../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadingBooks = async () => {
      await dispatch(getBooks());
    };
    loadingBooks();
  }, []);

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
