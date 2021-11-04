import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../UI/Form';
import Book from './Book';
import { getBooks } from '../../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadingBooks = async () => {
      const results = await dispatch(getBooks());

      const booksArr = Object.entries(results.books.data);

      const newBooksArr = [];

      for (let i = 0; i < booksArr.length; i += 1) {
        const newBook = {
          id: booksArr[i][0],
          title: booksArr[i][1][0].title,
          category: booksArr[i][1][0].category,
        };

        newBooksArr.push(newBook);
      }

      setBooks(newBooksArr);
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
