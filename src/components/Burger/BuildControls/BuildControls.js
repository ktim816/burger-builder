import React from 'react';

// -- COMPONENTS -- //
import BuildControl from './BuildControl/BuildControl';

// -- HIGH ORDER COMPONENTS -- //
import Aux from '../../../high-order-components/Auxiliary/Auxiliary';
import withClass from '../../../high-order-components/withClass';

// -- STYLING -- //
import classNames from './BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <Aux>
    <p>Current price: <strong>{ props.price.toFixed(2) }</strong></p>
    {controls.map((control, i) => (
      <BuildControl
        label={ control.label }
        added={ () => props.ingredientAdded(control.type) }
        removed={ () => props.ingredientRemoved(control.type) }
        disabled={ props.disabled[control.type] }
        key={ control.label + i }
      />
    ))}
    <button
      className={ classNames.OrderButton }
      disabled={ !props.purchasable }
      onClick={ props.ordered }
    >
      ORDER NOW
    </button>
  </Aux>
);

export default withClass(buildControls, classNames.BuildControls);
