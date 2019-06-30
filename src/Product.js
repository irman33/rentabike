import React from 'react';
import './Product.css';
import { formatPrice } from './helper.js';

function Product(props) {
  return (
    <div className="product">
      <img src={props.item.image} alt="Logo" />
      <div className="product-name">{props.item.name}</div>
      <div className="product-price">{formatPrice(props.item.price)}</div>
      <button onClick={() => (props.addToOrder(props.item.id))}> Add </button>
    </div>

  );
}

export default Product;
