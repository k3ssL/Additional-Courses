import React from "react"
import classes from "./Header.module.css"
import { MAIN_ROUTE } from "../../../app/consts"
import { useHeader } from "./useHeader"
import { useCart } from "../../providers/CartContext"

const Header = () => {
    const { location, handleLogoClick, handleCartButtonClick } = useHeader()
    const { totalCourses, totalPrice } = useCart()

    return (
        <header className={classes.container}>
            <div className={classes.header}>
                <img
                    src={"/img/gorizontalny_logo 1.png"}
                    alt={"logo"}
                    onClick={handleLogoClick}
                    className={classes.logo}
                />
                {location.pathname === MAIN_ROUTE && (
                    <div className={classes.cart} onClick={handleCartButtonClick}>
                        <span className={classes.price}>{totalPrice} ₽</span>
                        <hr className={classes.cart_separator} />
                        <div className={classes.right_part}>
                            <img
                                src={"/img/iconfinder_shopping-cart_2561279 1.png"}
                                alt={"cart-pic"}
                                className={classes.cart_img}
                            />
                            <span>{totalCourses}</span>
                        </div>
                    </div>
                )}
            </div>
            <hr className={classes.separator} />
        </header>
    )
}

export default Header
