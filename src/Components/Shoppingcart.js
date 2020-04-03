import React from 'react';
import '../css/Shoppingcart.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css' ;
class Shoppingcart extends React.Component {

  createItemList() {
    let ul = [];
    this.props.shoppingList.map((item, index) => {
      ul.push(
        <li key={index.toString()}>{item.name}: {item.price}</li>
      );
    })
    return ul;
  }

  render() {
    const { modalClass } = this.props;
    return (
      <div className={`shopping-cart-modal ${modalClass}`}>
        <p>Your Shopping Cart</p>
        <ul>{this.createItemList()}</ul>
      </div>
    )
  }
}

export default Shoppingcart;