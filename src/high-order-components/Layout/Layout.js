import React, { Component } from 'react';

// -- COMPONENTS -- //
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

// -- HIGH ORDER COMPONENTS -- //
import Aux from '../Auxiliary/Auxiliary';

// -- STYLING -- //
import classNames from './Layout.css';

class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHanlder = () => {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHanlder = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer 
      }
    });
  }

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={ this.sideDrawerToggleHanlder } />
        <SideDrawer
          open={ this.state.showSideDrawer }
          closed={ this.sideDrawerClosedHanlder }
        />
        <main className={ classNames.Content }>
          { this.props.children }
        </main>
      </Aux>
    );
  }
};

export default Layout;
