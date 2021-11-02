import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../../redux/books/books';
import './Form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  const bookTitleHandle = (e) => {
    const title = e.target.value;
    setBookTitle(title);
  };

  const bookAuthorHandle = (e) => {
    const author = e.target.value;
    setBookAuthor(author);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuid(),
      title: bookTitle,
      author: bookAuthor,
    };
    dispatch(addBook(newBook));
    setBookTitle('');
    setBookAuthor('');
  };

  return (
    <form onSubmit={submitBookToStore}>
      <div>
        <div>
          <label htmlFor="title">
            Book Title
            <input type="text" id="title" value={bookTitle} onChange={bookTitleHandle} />
          </label>
        </div>
        <div>
          <label htmlFor="author">
            Book Author
            <input type="text" id="author" value={bookAuthor} onChange={bookAuthorHandle} />
          </label>
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
