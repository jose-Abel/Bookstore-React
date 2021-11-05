import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../../redux/books/books';
import classes from './Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const [bookTitle, setBookTitle] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  const bookTitleHandle = (e) => {
    const title = e.target.value;
    setBookTitle(title);
  };

  const bookCategoryHandle = (e) => {
    const author = e.target.value;
    setBookCategory(author);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuid(),
      title: bookTitle,
      category: bookCategory,
    };
    dispatch(addBook(newBook));

    setBookTitle('');
    setBookCategory('');
  };

  return (
    <div className={classes.formSection}>
      <div className={classes.line} />
      <form onSubmit={submitBookToStore}>
        <div className={classes.formContainer}>
          <h2 className={classes.addNewBook}>ADD NEW BOOK</h2>
          <div className={classes.inputsContainer}>
            <input className={classes.inputTitle} type="text" id="title" value={bookTitle} onChange={bookTitleHandle} placeholder="Book Title" />
            <input className={classes.inputCategory} type="text" id="category" value={bookCategory} onChange={bookCategoryHandle} placeholder="Book Category" />
            <button className={classes.formButton} type="submit">ADD BOOK</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
