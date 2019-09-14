import React, { Component } from 'react';

// -- COMPONENTS -- //
import Backdrop from '../Backdrop/Backdrop';

// -- STYLING -- //
import classNames from './Modal.css';

// -- HIGH ORDER COMPONENTS -- //
import Aux from '../../../high-order-components/Auxiliary/Auxiliary';

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log('[Modal] WillUpdate');
  }

  render() {

    return (
      <Aux>
        <Backdrop
          show={ this.props.show }
          clicked={ this.modalClosed }
        />
        <div
          className={ classNames.Modal }
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          { this.props.children }
        </div>
      </Aux>
    );
  }
};

export default Modal;
