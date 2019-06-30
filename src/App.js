import React from 'react';
import './App.css';
import Product from './Product'
import Order from './Order'
// import productData from './bikerentals.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addToOrder = this.addToOrder.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.submitReservation = this.submitReservation.bind(this);
    
    this.state = {
      products: [
        {
          "id": 1,
          "name": "Adult Male Bike",
          "price": 20.50,
          "image": "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
          "product_type": "bike"
        },
        {
          "id": 2,
          "name": "Adult Female Bike",
          "price": 20.50,
          "image": "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
          "product_type": "bike"
        },
        {
          "id": 3,
          "name": "Kids Unisex Bike",
          "price": 12.75,
          "image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
          "product_type": "bike"
        },
        {
          "id": 4,
          "name": "Adult Unisex Helmet",
          "price": 4.00,
          "image": "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
          "product_type": "accessory"
        },
        {
          "id": 5,
          "name": "Kids Unisex Helmet",
          "price": 3.50,
          "image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
          "product_type": "accessory"
        },
        {
          "id": 6,
          "name": "Insurance",
          "price": 9.99,
          "image": "http://via.placeholder.com/250x250?text=Insurance",
          "product_type": "addon"
        }
      ],
      cart: [],
      name: '',
      email:''
    }
  }

  // componentDidMount() {
  //   this.setState({ products: productData.products });
  // }

  addToOrder(id) {
    const cart = this.state.cart;
    const item = this.state.products.find( o => o.id === id);
    cart.push(item);
    this.setState({ cart });
  }

  removeFromOrder(key) {
    const cart = this.state.cart;
    cart.splice(key, 1);
    this.setState({ cart });
  }

  handleUserInput(e) {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value});
}

submitReservation(e) {
  e.preventDefault();
  const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  if (this.state.cart === undefined || this.state.cart.length === 0) {
    alert("Please add some products to your cart.");
    return false;
  }

  if(!this.state.name || this.state.name === '') {
    alert("Please Provide Name");
    return false;
  }

  if(!this.state.email || this.state.email === '') {
    alert("Please Provide Email");
    return false;
  }

  if(!this.state.email.match(emailPattern)) {
    alert("Please Provide a Valid Email");
    return false;
  }

  alert("RESERVATION SUBMITTED!");
  this.setState({cart: [], name:"", email:""})
}

  render() { 
    return (
      <div className="App">
        <div className="products">
        <h3>Rent Bikes:</h3>
          {this.state.products.map(item => 
          <Product 
            key={item.id} 
            item={item}
            addToOrder={this.addToOrder}
          />)}
        </div>
        <div className="reservation">
          <div className="cart">
            <h3>Your Order:</h3>
            {this.state.cart.map((item, key) => 
              <Order 
              key={key}
              index={key}
              item={item}
              removeFromOrder={this.removeFromOrder}
              />
            )}
          </div>
          <div className="form">
            <form method="post"  name="reservation" onSubmit= {this.submitReservation} >
                <h3>Make Your Reservation</h3>
                <div className='form-group'>
                  <label htmlFor='name'>Name: </label>
                  <input onChange={this.handleUserInput} value={this.state.name} type='text' className='form-control'
                    name='name' />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email: </label>
                  <input onChange={this.handleUserInput} value={this.state.email} type='text' className='form-control'
                    name='email' />
                </div>
                <button type='submit' className='btn btn-primary'>
                    Make Reservation:
                </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
