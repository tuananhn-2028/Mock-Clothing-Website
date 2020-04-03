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
        <ShoppingCartButton 
        addItemToList={props.addItemToList}
        name={props.name}
        price={props.price}
        />
      </div>
      

    </div>
  )
}

const ShoppingCartButton = (props) => {
  return(
    <img className="shopping-cart-img" src={require('../img/shopping_c.jpg')}
     onClick={() => {
       props.addItemToList(
         {
           name: props.name,
           price: props.price
         }
       )
     }}
    />
  )
}
export default Item;