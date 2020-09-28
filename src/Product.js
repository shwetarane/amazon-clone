import React from 'react'
import "./static/css/Product.css"


function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>Sapiens</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>&#9733;</p>
                </div>
            </div>
            
            <img 
                src={require('./static/images/background.jpg')} 
                alt="" />
            
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
