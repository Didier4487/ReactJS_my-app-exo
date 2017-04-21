import React, {Component} from 'react';

import Product from './Product/Product.js';
import Cart from './Cart/Cart.js';

import products from './products.json';
import './shop.css';

class Shop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      click: 0
    };
  }

  componentWillMount() {
    // ici les appels à l'API à la place de products.json
    console.log(products.data);
    this.setState({
      products: products.data
    });
  }

  addToCart = (productName, productPrice) => {
    let newCart = this.state.cart;
    newCart.push({name: productName, price: productPrice});
    this.setState({cart: newCart});
    // équivalent à :
    // this.setState((prevState) => {
    //   this.state.cart.push({name: productName, price: productPrice});
    // });

    // console.log('Je peux communiquer via le parent');
  }

  componentDidUpdate() {
    console.log(this.state.cart);
  }

  incrementClick = () => {
    let newClick = this.state.click;
    newClick++;
    this.setState({click: newClick});
    // équivalent à :
    // this.setState((prevState) => {
    //   return {click: prevState.click + 1};
    // });
  }

  consoleProductName = (productName) => {
    console.log(productName);
  }

  render() {
    return(
      <div className="shop">
      <h1>MY SHOP</h1>
        <Cart click={this.state.click} cart={this.state.cart} />
        {
          this.state.products.map(
            (product, i) => <Product key={i}
            price={product.price} name={product.name}
            add={this.addToCart} increment={this.incrementClick}
            consoleName={this.consoleProductName} />
          )
        }
      </div>
    )
  }
}

export default Shop;
