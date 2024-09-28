import React from "react"
import EmptyCart from "./UI/EmptyCart/EmptyCart"
import { useCart } from "../../shared/providers/CartContext"
import Cart from "./UI/Cart/Cart"

const Basket = () => {
    const { cartItems } = useCart()

    return cartItems.length > 0 ? <Cart /> : <EmptyCart />
}

export default Basket
