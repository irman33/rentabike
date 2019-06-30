import React from 'react';
// import './Order.css';
import { formatPrice } from './helper.js';

function Order(props) {
  return (
    <div className="product">
      <div className="product-name">{props.item.name}</div>
      <div className="product-price">{formatPrice(props.item.price)}</div>
      <button onClick={() => props.removeFromOrder(props.index)}> Remove </button>
    </div>

  );
}

export default Order;
