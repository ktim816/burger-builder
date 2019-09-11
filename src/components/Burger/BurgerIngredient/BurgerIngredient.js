import React from 'react';

// -- STYLING -- //
import classNames from './BurgerIngredient.css';

const burgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className={ classNames.BreadBottom }></div>;
      break;
    case 'bread-top':
      ingredient = (
        <div className={ classNames.BreadTop }>
          <div className={ classNames.Seeds1 }></div>
          <div className={ classNames.Seeds2 }></div>
        </div>
      );
      break;
    case 'meat':
      ingredient = <div className={ classNames.Meat }></div>
      break;
    case 'cheese':
      ingredient = <div className={ classNames.Cheese }></div>
      break;
    case 'salad':
      ingredient = <div className={ classNames.Salad }></div>
      break;
    case 'bacon':
      ingredient = <div className={ classNames.Bacon }></div>
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default burgerIngredient;
