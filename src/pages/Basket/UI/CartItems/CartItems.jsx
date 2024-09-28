import React from "react"
import classes from "./CartItems.module.css"
import CartItem from "../CartItem/CartItem"
import { useCart } from "../../../../shared/providers/CartContext"

const CartItems = () => {
    const { cartItems } = useCart()

    console.log(cartItems)

    return (
        <div className={classes.container}>
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    img={item.image}
                    name={item.name}
                    type={item.type}
                    counter={item.counter}
                    price={item.price}
                />
            ))}
        </div>
    )
}

export default CartItems
