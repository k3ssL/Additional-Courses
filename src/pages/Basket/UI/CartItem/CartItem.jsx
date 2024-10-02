import React from "react"
import classes from "./CartItem.module.css"
import { useCart } from "../../../../shared/providers/CartContext"

const CartItem = ({ id, img, name, type, counter, price }) => {
    const { increaseInCart, decreaseFromCart, removeFromCart } = useCart()

    return (
        <div className={classes.container}>
            <img src={img} alt={"item-pic"} className={classes.item_img} />
            <div className={classes.item_name_type}>
                <span className={classes.item_name}>{name}</span>
                <span className={classes.item_type}>{type}</span>
            </div>
            <div className={classes.items_counter}>
                <img
                    src={"/img/Group 35.png"}
                    className={classes.control_counter}
                    alt={"minus-pic"}
                    onClick={() => decreaseFromCart(id, type)}
                />
                <span className={classes.counter}>{counter}</span>
                <img
                    src={"/img/Group 37.png"}
                    className={classes.control_counter}
                    alt={"plus-pic"}
                    onClick={() => increaseInCart(id, type)}
                />
            </div>
            <span className={classes.item_price}>{price * counter} ₽</span>
            <img
                src={"/img/Group 36.png"}
                alt={"delete-item-pic"}
                className={classes.item_delete}
                onClick={() => removeFromCart(id, type)}
            />
        </div>
    )
}

export default CartItem
