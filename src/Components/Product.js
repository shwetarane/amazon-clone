import React from 'react'
import "../static/css/Product.css"
import {useStateValue} from "../StateProvider"


function Product({id, title, image, price, rating}) {
    // eslint-disable-next-line
    const[ {cart}, dispatch] = useStateValue();
    // console.log('object', cart)
    // disptach item into Data Layer
    const addToCart=()=>{
        dispatch({
            type: "ADD_TO_CART",
            item:{
                id:id, 
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i)=>(
                        <p>&#9733;</p>
                    ))}
                    
                </div>
            </div>
            
            <img 
                src={image} 
                alt="" />
            
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
