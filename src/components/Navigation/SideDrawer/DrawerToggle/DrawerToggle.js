import React from 'react';

// -- STYLING -- //
import classNames from './DrawerToggle.css';

const drawerToggle = (props) => (
  <button
    className={ classNames.DrawerToggle }
    onClick={ props.clicked }
  >
    <span className={ classNames.Inner }></span>
    <span className={ classNames.Inner }></span>
    <span className={ classNames.Inner }></span>
  </button>
);

export default drawerToggle;
