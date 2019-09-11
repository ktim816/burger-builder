import React from 'react';

// -- HIGH ORDER COMPONENTS -- //
import Aux from '../../high-order-components/Auxiliary';

// -- STYLING -- //
import classNames from './Layout.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={ classNames.Content }>
      { props.children }
    </main>
  </Aux>
);

export default layout;
