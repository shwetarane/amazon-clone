import React from 'react'
import "../static/css/Checkout.css"
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import {useStateValue} from "../StateProvider"

function Checkout() {
    const [{cart}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/pantry/storefront/2020/3_25_CG_hero_1500x200._CB420058172_.png"
                    alt=""/>
                <div>
                    <h2 className="checkout__title">
                        Your Cart
                    </h2>

                    {cart.map(item => (<CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}/>))}

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
