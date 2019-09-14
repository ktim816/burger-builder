import React, { Component } from 'react';

// -- CONTAINERS -- //
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';

// -- COMPONENTS -- //
import Layout from '../../high-order-components/Layout/Layout';


// -- HIGH ORDER COMPONENTS -- //
import Aux from '../../high-order-components/Auxiliary/Auxiliary';
// import withClass from '../../high-order-components/withClass';

// // -- STYLING -- //
// import classNames from './App.css';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </Aux>
    );
  }
}

export default App;
