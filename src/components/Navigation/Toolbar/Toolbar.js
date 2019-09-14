import React from 'react';

// -- COMPONENTS -- //
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

// -- STYLING -- //
import classNames from './Toolbar.css';

const toolbar = (props) => (
  <header className={ classNames.Toolbar }>
    <DrawerToggle clicked={ props.drawerToggleClicked } />
    <div className={ classNames.Logo }>
      <Logo />
    </div>
    <nav className={ classNames.DesktopOnly }>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
