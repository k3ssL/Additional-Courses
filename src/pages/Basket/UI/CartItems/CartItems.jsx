import React from "react"
import CartItem from "../CartItem/CartItem"
import { useCart } from "../../../../shared/providers/CartContext"

const CartItems = () => {
    const { cartItems } = useCart()

    return (
        <div>
            {cartItems.map((item) => (
                <CartItem
                    key={`${item.id}-${item.type}`}
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
