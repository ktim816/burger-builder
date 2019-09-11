import React, { Component } from 'react';

// -- COMPONENTS -- //
import Aux from '../../high-order-components/Auxiliary';

class BurgerBuilder extends Component {
  render() {
    return(
      <Aux>
        <div>Burger</div>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
