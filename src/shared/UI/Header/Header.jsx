import React from "react"
import classes from "./Header.module.css"
import { MAIN_ROUTE } from "../../../utils/consts"
import { useHeader } from "./useHeader"
import { useCart } from "../../providers/CartContext"

const Header = () => {
    const { location, handleLogoClick, handleCartButtonClick } = useHeader()
    const { cartItems } = useCart()

    const totalCourses = cartItems.reduce((acc, item) => acc + item.counter, 0)

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.counter, 0)

    return (
        <header className={classes.container}>
            <div className={classes.header}>
                <img src={"/img/gorizontalny_logo 1.png"} alt={"logo"} onClick={handleLogoClick} />
                {location.pathname === MAIN_ROUTE && (
                    <div className={classes.cart} onClick={handleCartButtonClick}>
                        <span>{totalPrice} ₽</span>
                        <hr />
                        <div className={classes.right_part}>
                            <img src={"/img/iconfinder_shopping-cart_2561279 1.png"} alt={"cart-pic"} />
                            <span>{totalCourses}</span>
                        </div>
                    </div>
                )}
            </div>
            <hr />
        </header>
    )
}

export default Header
