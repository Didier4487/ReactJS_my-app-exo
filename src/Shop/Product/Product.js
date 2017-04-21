import React, {Component} from 'react';

class Product extends Component {

  // car on ne peut pas passer de paramètre si on appelle directement
  // this.props.add dans le onClick du button
  transferAdd = () => {
    this.props.add(this.props.name, this.props.price);
    this.props.increment();
    this.props.consoleName(this.props.name);
  }

  render() {
    return(
      <div className="product">
        {this.props.name}<br />
        {this.props.price * 1.2} € TTC<br />
        <button type="button" onClick={this.transferAdd}>Ajouter au panier</button>
      </div>
    )
  }
}

export default Product;
