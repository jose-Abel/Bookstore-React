import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Form = ({ id, labelContent }) => (
  <form>
    <label htmlFor={id}>
      {labelContent}
      <input type="text" id={id} />
    </label>
    <Button content="Add" />
  </form>
);

Form.defaultProps = {
  id: '',
  labelContent: '',
};

Form.propTypes = {
  id: PropTypes.string,
  labelContent: PropTypes.string,
};

export default Form;
