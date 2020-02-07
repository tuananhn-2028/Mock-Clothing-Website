import React from 'react';
import '../css/Item.css';


const Item = (props) => {
  return(
    <div className="item">
      <div className="item-name">{props.name}</div>
      <div className="item-footer">
        <div className="item-price">
        {props.price}
        </div>
        <ShoppingCartButton />
      </div>
      

    </div>
  )
}

const ShoppingCartButton = (props) => {
  return(
    <img class="shopping-cart-img" src={require('../img/shopping_c.jpg')} />
  )
}
export default Item;