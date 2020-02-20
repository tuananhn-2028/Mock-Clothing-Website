import React from 'react';
import '../css/App.css';
import '../css/Item.css';
import Title from './Title';
import Searchbar from './Searchbar';
import Item from './Item'
import Shoppingcart from './Shoppingcart'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {shoppingList: []};
    this.addItemToList = this.addItemToList.bind(this);
  }

  addItemToList(item) {
    this.setState({shoppingList: [...this.state.shoppingList, item]});
    
  }
  render() {
    return (
      <div className="App">
        <Title />
        <Searchbar />
        <Shoppingcart shoppingList={this.state.shoppingList}/>
        <div className="content">
        <p>Item List</p>
          <div className="item-list">
            <div className="item-row-container">
              <Item name="Shirt 1" price="100$" addItemToList={this.addItemToList}/>
              <Item name="Shirt 2" price="110$" addItemToList={this.addItemToList}/>
              <Item name="Shirt 3" price="120$" addItemToList={this.addItemToList}/>
            </div>
            <div className="item-row-container">
              <Item name="Pant 1" price="200$" addItemToList={this.addItemToList}/>
              <Item name="Pant 2" price="210$" addItemToList={this.addItemToList}/>
              <Item name="Pant 3" price="220$" addItemToList={this.addItemToList}/>
            </div>
            <div className="item-row-container">
              <Item name="Coat 1" price="300$" addItemToList={this.addItemToList}/>
              <Item name="Coat 2" price="310$" addItemToList={this.addItemToList}/>
              <Item name="Coat 3" price="320$" addItemToList={this.addItemToList}/>
            </div>

          </div>
        </div>
        <div className="footer">
          Footer for Clothing.Inc
        </div>
      </div>
    );
  }
}

export default App;
