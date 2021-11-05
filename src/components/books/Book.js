import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import classes from './Book.module.css';

const Book = ({ book }) => {
  const { id, title, category } = book;
  const dispatch = useDispatch();

  const [percentage, setPercentage] = useState();
  const [chapter, setChapter] = useState();
  const [bookAuthor, setBookAuthor] = useState();

  const getRandomInt = (max) => (Math.floor(Math.random() * max));

  const setPercentageAndChapter = () => {
    const randomPercentage = getRandomInt(100);
    const randomChapter = getRandomInt(40);

    setPercentage(randomPercentage);
    setChapter(randomChapter);
  };

  const pickingBookAuthor = () => {
    const bookAuthorList = [
      'Marcel Proust', 'James Joyce', 'Miguel de Cervantes', 'Gabriel Garcia Marquez', 'Scott Fitzgerald', 'Herman Melville', 'Leo Tolstoy', 'William Shakespeare', 'Homer', 'Gustave Flaubert', 'Dante Alighieri', 'Vladimir Nabokov', 'Fyodor Dostoyevsky', 'Emily Bronte', 'J.D. Salinger', 'Jane Austen', 'Mark Twain', 'Lewis Carroll', 'Virginia Woolf', 'Joseph Heller', 'William Faulkner', 'George Orwell', 'Charles Dickens', 'John Steinbeck', 'Ralph Ellison', 'Harper Lee', 'Franz Kafka', 'Stendhal', 'George Eliot', 'Jonathan Swift', 'Toni Morrison', 'Anton Chekhov', 'Albert Camus', 'Charlotte Bronte', 'Virgil', 'Jorge Luis Borges', 'Ernest Hemingway', 'Laurence Sterne', 'Walt Whitman', 'Thomas Mann', 'James Joyce', 'Salman Rushdie',
    ];

    const randomAuthorNumber = getRandomInt(42);
    const author = bookAuthorList[randomAuthorNumber];
    setBookAuthor(author);
  };

  useEffect(() => {
    setPercentageAndChapter();
    pickingBookAuthor();
  }, []);

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className={classes.card}>
      <div>
        <p className={classes.bookInfoContainer}>
          <span className={classes.bookCategory}>{category}</span>
          <span className={classes.bookTitle}>{title}</span>
          <span className={classes.bookAuthor}>{bookAuthor}</span>
        </p>

        <p className={classes.buttonsContainer}>
          <button className={classes.btn} type="button">Comment</button>
          <button className={classes.btn} onClick={handleRemoveBook} type="button">Remove</button>
          <button className={classes.btn} type="button">Edit</button>
        </p>
      </div>

      <div className={classes.progressContainer}>

        <div className={classes.loader} />
        <p className={classes.percentageContainer}>
          <span className={classes.percentage}>
            {percentage}
            %
          </span>
          <span className={classes.completed}>Completed</span>
        </p>
      </div>

      <div className={classes.chapterContainer}>
        <span className={classes.currentChapter}>Current Chapter</span>
        <span className={classes.chapter}>
          Chapter
          {' '}
          {chapter}
        </span>
        <button className={classes.updateProgress} type="button">UPDATE PROGRESS</button>
      </div>

    </div>
  );
};

Book.defaultProps = {
  book: {
    id: '',
    title: '',
    category: '',
  },
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
  }),
};

export default Book;
