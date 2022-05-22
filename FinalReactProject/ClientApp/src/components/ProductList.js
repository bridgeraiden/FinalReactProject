import React, { Component } from 'react';
import { Productitem } from './Productitem';

export class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = { products: props.products };
    }



    render() {
        return (
            <div>
                <p> My product list </p>
                {this.state.products.map(product =>
                    <Productitem
                        product={product}
                        key={product.productId}
                        onAddToCart={this.props.onAddToCart.bind(this, product)}
                        
                    />
                )}
            </div>
        );
    }

    
}
