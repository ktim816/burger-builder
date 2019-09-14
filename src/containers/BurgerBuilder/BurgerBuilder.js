import React, { Component } from 'react';

// -- COMPONENTS -- //
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
// import Backdrop from '../../components/UI/Backdrop/Backdrop';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

// -- HIGH ORDER COMPONENTS -- //
import Aux from '../../high-order-components/Auxiliary/Auxiliary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    isPurchasable: false,
    isPurchasing: false
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(ingredient => {
        return ingredients[ingredient];
      })
      .reduce((sum, elem) => {
        return sum + elem;
      }, 0)
      ;
      this.setState({ isPurchasable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);

  }

  purchaseHandler = () => {
    this.setState({ isPurchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ isPurchasing: false });
  }

  purchaseContinueHandler = () => {
    alert('You continue!');
  }

  render() {

    const disabledInfo = {...this.state.ingredients};

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return(
      <Aux>
        <Modal
          show={ this.state.isPurchasing }
          modalClosed={ this.purchaseCancelHandler }
        >
          <OrderSummary
            ingredients={ this.state.ingredients }
            price={ this.state.totalPrice }
            canceled={ this.purchaseCancelHandler }
            continue={ this.purchaseContinueHandler }
          />
        </Modal>
        <Burger ingredients={ this.state.ingredients } />
        <BuildControls
          price={ this.state.totalPrice }
          purchasable={ this.state.isPurchasable }
          disabled={ disabledInfo }
          ingredientAdded={ this.addIngredientHandler }
          ingredientRemoved={ this.removeIngredientHandler }
          ordered={ this.purchaseHandler }
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
