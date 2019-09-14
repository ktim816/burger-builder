import React from 'react';

// -- COMPONENTS -- //
import NavigationItem from './NavigationItem/NavigationItem';

// -- STYLING -- //
import classNames from './NavigationItems.css';

const navigationItems = (props) => (
  <ul className={ classNames.NavigationItems }>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
