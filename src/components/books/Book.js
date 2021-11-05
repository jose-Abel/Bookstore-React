import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import classes from './Book.module.css';

const Book = ({ book }) => {
  const { id, title, category } = book;
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className={classes.card}>

      <div>
        <p className={classes.bookInfoContainer}>
          <span className={classes.bookCategory}>{category}</span>
          <span className={classes.bookTitle}>{title}</span>
          <span className={classes.bookAuthor}>F. Scott Fitzgerald</span>
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
          <span className={classes.percentage}>64%</span>
          <span className={classes.completed}>Completed</span>
        </p>
      </div>

      <div className={classes.chapterContainer}>
        <span className={classes.currentChapter}>Current Chapter</span>
        <span className={classes.chaper}>Chapter 17</span>
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
