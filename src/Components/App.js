import React from 'react';
import '../css/App.css';
import '../css/Item.css';
import Title from './Title';
import Searchbar from './Searchbar';
import Item from './Item'
import Shoppingcart from './Shoppingcart'


function App() {
  return (
    <div className="App">
      <Title />
      <Searchbar />
      <Shoppingcart />
      <div className="content">
      <p>Item List</p>
        <div className="item-list">
          <div className="item-row-container">
            <Item name="Shirt 1" price="100$" />
            <Item name="Shirt 2" price="110$" />
            <Item name="Shirt 3" price="120$" />
          </div>
          <div className="item-row-container">
          <Item name="Pant 1" price="200$" />
          <Item name="Pant 2" price="210$" />
          <Item name="Pant 3" price="220$" />
          </div>
          <div className="item-row-container">
          <Item name="Coat 1" price="300$" />
          <Item name="Coat 2" price="310$" />
          <Item name="Coat 3" price="320$" />
          </div>

        </div>
      </div>
      <div className="footer">
        Footer for Clothing.Inc
      </div>
    </div>
  );
}

export default App;
