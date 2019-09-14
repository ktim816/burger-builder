import React from 'react';

// -- STYLING -- //
import classNames from './NavigationItem.css';

const navigationItem = (props) => (
  <li className={ classNames.NavigationItem }>
    <a
      href={ props.link }
      className={ props.active ? classNames.isActive : null }
    >
      { props.children }
    </a>
  </li>
);

export default navigationItem;
