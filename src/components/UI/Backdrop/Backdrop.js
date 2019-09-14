import React from 'react';

// -- STYLING -- //
import classNames from './Backdrop.css';

const backdrop = (props) => (
  props.show ? <div
    className={ classNames.Backdrop }
    onClick={ props.clicked }
  ></div> : null
);

export default backdrop;
