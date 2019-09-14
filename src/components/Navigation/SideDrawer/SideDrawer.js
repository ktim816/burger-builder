import React from 'react';

// -- COMPONENTS -- //
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

// -- HIGH ORDER COMPONENTS -- //
import Aux from '../../../high-order-components/Auxiliary/Auxiliary';

// -- STYLING -- //
import classNames from './SideDrawer.css';

const sideDrawer = (props) => {

  let attachedClasses = [classNames.SideDrawer];

  if (props.open) {
    attachedClasses.push(classNames.Open);
  } else {
    attachedClasses.push(classNames.Close);
  }

  return (
    <Aux>
      <Backdrop clicked={ props.closed } show={ props.open } />
      <div className={ attachedClasses.join(' ') }>
        <div className={ classNames.Logo }>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
