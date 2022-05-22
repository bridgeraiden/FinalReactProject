import React, { Component } from 'react';
import { Productitem } from './Productitem';
import { ProductList } from './ProductList';
import { product } from '../Models/product';

export class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = { cartItems: props.cartItems };
    }





    render() {
        return (
            <div>
                <p> This is what is in your cart! </p>
                {this.state.cartItems.map(product =>
                    <Productitem
                        product={product}
                        key={product.productId}

                        
                    />
                )}

                
            </div>
        )
    }

  
}
