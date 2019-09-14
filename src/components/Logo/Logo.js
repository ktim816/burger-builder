import React from 'react';

// -- ASSETS -- //
import burgerLogo from '../../assets/images/burger-logo.png';

// -- STYLING -- //
import classNames from './Logo.css';

const logo = (props) => (
  <div className={ classNames.Logo }>
    <img src={ burgerLogo } alt="MyBurger" />
  </div>
);

export default logo;
