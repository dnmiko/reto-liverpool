import React, { Component } from 'react';
import './style.css';

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: props.product
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.product !== prevProps.product) {
            this.setState({
                product: this.props.product
            })
        }
    }

    render() {
        return (
            <div className="productCard">
                <img className="card_img" src={this.state.product.image_url} alt="Imagen del producto" />
                <div className="productInfoContainer">
                    <h5 >{this.state.product.name}</h5>
                    <p>{this.state.product.description}</p>
                </div>
            </div>
        )
    }
}

export default ProductCard;
