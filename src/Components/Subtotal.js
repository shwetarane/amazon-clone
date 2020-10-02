import React from 'react'
import "../static/css/Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider"
import {getCartTotal} from "../reducer";


function Subtotal() {
    const[{cart}] = useStateValue();
    
    return (
        <div className="subtotal">
        {console.log(getCartTotal(cart))}
            <CurrencyFormat 
                renderText={(value)=>(
                <>
                {console.log(cart, value)}
                <p>
                    Subtotal ( {cart.length} items ): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains gift
                </small>
                </>
                )}
                
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal