import { ShoppingCart } from "@phosphor-icons/react";
import './CartWidget.css'
import { useState } from "react";



const CartWidget = () => {

    return(
        <>
        <div className="cart">
            <ShoppingCart size={32} />
             <div className="cart_iten">0</div>
             
        </div>
        </>
    )
}

export default CartWidget
