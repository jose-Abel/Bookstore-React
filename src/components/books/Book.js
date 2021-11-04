import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = ({ book }) => {
  const { id, title, category } = book;
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
        Category:
        {category}
      </div>

      <button onClick={handleRemoveBook} type="button">Remove</button>
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
