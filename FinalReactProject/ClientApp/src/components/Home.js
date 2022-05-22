import React, { Component } from 'react';
import { product } from '../Models/product';
import { ProductList } from './ProductList';
import { Cart } from './Cart';

export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);
        this.state = {
            products: [
                new product(23, "Mouse", 47.99),
                new product(39, "Keyboard", 99.99),
                new product(54, "Monitor", 47.99)
            ],
            cartItems: []
        }
    }


    addToCart = (product) => {
        this.state.cartItems.push(product);
        this.setState(this.state.cartItems);
    }

    removeFromCart = (product) => {
        this.state.cartItems.push(product);
        this.setState(this.state.cartItems);
    }


    render() {
        return (
            <div>
                <h1>Products</h1>
                <div style={{ textAlign: 'right' }} >
                    <button className='Cart' onClick={this.Cart} >Shopping Cart</button>
                </div>

                <ProductList products={this.state.products} onAddToCart={this.addToCart} />
                <Cart cartItems={this.state.cartItems} />

            </div>

        );
    }
   
}
