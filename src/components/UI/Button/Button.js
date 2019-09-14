import React from 'react';

// -- STYLING -- //
import classNames from './Button.css';

const button = (props) => (
  <button
    className={ [classNames.Button, classNames[props.buttonType]].join(' ') }
    onClick={ props.clicked }
  >
    { props.children }
  </button>
);

export default button;
