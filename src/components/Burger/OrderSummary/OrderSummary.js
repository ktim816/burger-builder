import React, { PureComponent } from 'react';

// -- COMPONENTS -- //
import Button from '../../UI/Button/Button';

// -- HIGH ORDER COMPONENTS -- //
import Aux from '../../../high-order-components/Auxiliary/Auxiliary';

class OrderSummary extends PureComponent {

  componentDidUpdate() {
    console.log('[OrderSummary.js] componentDidUpdate');
  }

  render () {

    const ingredientSummary = Object.keys(this.props.ingredients)
      .map((ingredient, index) => {
        return (
          <li key={ index }>
            <span style={{ textTransform: 'capitalize' }}>{ ingredient }</span>: { this.props.ingredients[ingredient] }
          </li>
        );
      })
      ;

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          { ingredientSummary }
        </ul>
        <p><strong>Total Price: { this.props.price.toFixed(2) }</strong></p>
        <p>Continue to Checkout?</p>
        <Button
          buttonType='Danger'
          clicked={ this.props.canceled }
        >
          CANCEL
        </Button>
        <Button
          buttonType='Success'
          clicked={ this.props.continue }
        >
          CONTINUE
        </Button>
      </Aux>
    );
  }
};

export default OrderSummary;
