import React from 'react';

// -- COMPONENTS -- //
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// -- HIGH ORDER COMPONENTS -- //
import Aux from '../../high-order-components/Auxiliary/Auxiliary';
import withClass from '../../high-order-components/withClass';

// -- STYLING -- //
import classNames from './Burger.css';

const burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => {
        return <BurgerIngredient type={ ingredient } key={ ingredient + i } />;
      });
    })
    .reduce((arr, elem) => {
      return arr.concat(elem);
    }, [])
    ;

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  
  return (
    <Aux>
      <BurgerIngredient type="bread-top" />
      { transformedIngredients }
      <BurgerIngredient type="bread-bottom" />
    </Aux>
  );
};

export default withClass(burger, classNames.Burger);
