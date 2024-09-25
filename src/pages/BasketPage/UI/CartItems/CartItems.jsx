import React from "react"
import classes from "./CartItems.module.css"
import CartItem from "../CartItem/CartItem"

const CartItems = () => {
    return (
        <div className={classes.container}>
            <CartItem
                img={
                    "https://static.vecteezy.com/system/resources/previews/002/124/981/original/blue-atom-icon-in-a-black-hexagon-vector.jpg"
                }
                name={"React+Redux"}
                type={"студент"}
                counter={2}
                price={770}
            />
        </div>
    )
}

export default CartItems
