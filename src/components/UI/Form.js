import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../../redux/books/books';

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
    <form onSubmit={submitBookToStore}>
      <div>
        <div>
          <label htmlFor="title">
            Book Title
            <input type="text" id="title" value={bookTitle} onChange={bookTitleHandle} />
          </label>
        </div>
        <div>
          <label htmlFor="category">
            Book Category
            <input type="text" id="category" value={bookCategory} onChange={bookCategoryHandle} />
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
