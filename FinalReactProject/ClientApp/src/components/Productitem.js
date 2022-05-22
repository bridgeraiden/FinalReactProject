import React, { Component } from 'react';
import { Cart } from './Cart';

export class Productitem extends Component {

    constructor(props) {
        super(props);
        this.state = { product: props.product };
    }

    render() {
        return (
            <div>
                <p> product: {this.state.product.productName},
                    id = {this.state.product.productId},
                    price = {this.state.product.unitPrice} </p>
                <button onClick={this.props.onAddToCart}>Add to cart</button>
                <button onClick={this.props.onRemoveFromCart }>Remove from Cart</button>
            </div>
        );
    }
}
