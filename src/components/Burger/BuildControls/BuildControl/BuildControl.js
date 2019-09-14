import React from 'react';

// -- HIGH ORDER COMPONENTS -- //
import Aux from '../../../../high-order-components/Auxiliary/Auxiliary';
import withClass from '../../../../high-order-components/withClass';

// -- STYLING -- //
import classNames from './BuildControl.css';

const buildControl = (props) => (
  <Aux>
    <div className={ classNames.Label }>{ props.label }</div>
    <button
      disabled={ props.disabled }
      className={ classNames.Less }
      onClick={ () => props.removed() }
    >
      Less
    </button>
    <button
      className={ classNames.More }
      onClick={ () => props.added() }
    >
      More
    </button>
  </Aux>
);

export default withClass(buildControl, classNames.BuildControl);
