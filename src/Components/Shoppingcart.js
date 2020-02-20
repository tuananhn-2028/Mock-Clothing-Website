import React from 'react';
import '../css/Shoppingcart.css'

class Shoppingcart extends React.Component {
  

  createItemList = () => {
    let ul = [];
    this.props.shoppingList.map((item, index) => {
      ul.push(
        <li key={index.toString()}>{item.name}: {item.price}</li>
      );
    })
      
    
    console.log(ul);
    return ul;
  }


  render() {
    return (
      <div className="shopping-cart-modal">
        <p>Your Shopping Cart</p>
        <ul>{this.createItemList()}</ul>
      </div>
    )
  }
}

export default Shoppingcart;