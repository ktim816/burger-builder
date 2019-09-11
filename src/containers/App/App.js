import React, { Component } from 'react';

// -- CONTAINERS -- //
import BurgerBuilder from '../../containers/BurgerBuilder/BurgetBuilder';

// -- COMPONENTS -- //
import Layout from '../../components/Layout/Layout';


// -- HIGH ORDER COMPONENTS -- //
import Aux from '../../high-order-components/Auxiliary';
import withClass from '../../high-order-components/withClass';

// -- STYLING -- //
import classNames from './App.css';

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

export default withClass(App, classNames.App);
