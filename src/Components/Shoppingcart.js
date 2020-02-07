import React from 'react';
import '../css/Shoppingcart.css'

class Shoppingcart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_list: []
    }
  }

  createItemList = () => {
    let ul = [];
    for (let elem of this.state.item_list) {
      ul.push(
        <li>{elem}</li>
      );
    }
    
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