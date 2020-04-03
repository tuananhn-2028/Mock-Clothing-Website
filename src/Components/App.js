import React from 'react';
import '../css/App.css';
import '../css/Item.css';
import Title from './Title';
import Searchbar from './Searchbar';
import Item from './Item';
import Shoppingcart from './Shoppingcart';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css' ;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shoppingList: [],
      itemList: [
        {name: 'Shirt 1', price: '100$'},
        {name: 'Shirt 2', price: '110$'},
        {name: 'Shirt 3', price: '120$'},
        {name: 'Pant 1', price: '20$'},
        {name: 'Pant 2', price: '210$'},
        {name: 'Pant 3', price: '220$'},
        {name: 'Jacket 1', price: '300$'},
        {name: 'Jacket 2', price: '310$'},
        {name: 'Jacket 3', price: '320$'},
      ],
      modalClass: 'modal-hide',
      showContent: true,
      count: true,
    };
    this.addItemToList = this.addItemToList.bind(this);
    this.handleCartModalClick = this.handleCartModalClick.bind(this);
  }

  addItemToList(item) {
    this.setState({shoppingList: [...this.state.shoppingList, item]});
  }

  handleCartModalClick() {
    this.setState({
      modalClass: this.state.modalClass === 'modal-hide' ? 'modal-show': 'modal-hide',
    })
  }

  
  render() {
    const { shoppingList, itemList, modalClass, showContent } = this.state;
    return (
      <div className="App">
        <Title />
        <Searchbar /> <br />
        <Button variant="info" className={'show-cart-button'}
          onClick={this.handleCartModalClick}
        >View Cart</Button>
        <Shoppingcart shoppingList={shoppingList} 
          handleCartModalClick={this.handleCartModalClick}
          modalClass={modalClass}
        />
        {showContent && <Content itemList={itemList} addItemToList={this.addItemToList} />}
        <div className="footer">
          Footer for Clothing.Inc
        </div>
      </div>
    );
  }
}

const Content = (props) => {
  const { itemList, addItemToList } = props;
  return (
    <div className="content">
      <p>Item List</p>
      <div className="item-list">
        <div className="item-row-container">
            {itemList.map((item, index) => 
              <Item key={index.toString()} name={item.name} price={item.price} addItemToList={addItemToList} />
            )}
        
        </div>
      </div>
    </div>
  )
}
export default App;
