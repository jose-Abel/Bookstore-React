import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = ({ book }) => {
  const { id, title, author } = book;
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <div>
        Title:
        {title}
      </div>

      <div>
        Author:
        {author}
      </div>

      <button onClick={handleRemoveBook} type="button">Remove</button>
    </div>
  );
};

Book.defaultProps = {
  book: {
    id: '',
    title: '',
    author: '',
  },
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
  }),
};

export default Book;
