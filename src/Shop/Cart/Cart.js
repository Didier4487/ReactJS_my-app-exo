import React, {Component} from 'react';

class Cart extends Component {

  totalPrices = () => {
    let total = 0;
    this.props.cart.forEach(function(element) {
      total += element.price * 1.2;
    }, this);
    return total;
  }

  render() {
    return(
      <div className="cart">
        <div>
          <h2>Votre panier</h2>
          <ul>
          {
            this.props.cart.map(
              (product, i) => <li key={i}>{product.name} : {product.price * 1.2} € TTC</li>
            )
          }
          </ul>
        </div>
        <div>
          <p>Total : {this.totalPrices()} € TTC</p>
          <p>Nb de clics : {this.props.click}</p>
        </div>
      </div>
    )
  }
}
export default Cart;
