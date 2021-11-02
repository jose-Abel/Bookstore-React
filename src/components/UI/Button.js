/* eslint-disable react/button-has-type */

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, content }) => (
  <div>
    <button type={type}>{content}</button>
  </div>
);

Button.defaultProps = {
  type: 'button',
  content: '',
};

Button.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
};

export default Button;
