import React from "react"
import classes from "./Header.module.css"
import { useNavigate } from "react-router-dom"
import { BASKET_ROUTE, MAIN_ROUTE } from "../../utils/consts"

const Header = () => {
    const navigate = useNavigate()
    return (
        <header className={classes.container}>
            <div className={classes.header}>
                <img src={"/img/gorizontalny_logo 1.png"} alt={"logo"} onClick={() => navigate(MAIN_ROUTE)} />
                <div className={classes.cart} onClick={() => navigate(BASKET_ROUTE)}>
                    <p>520 ₽</p>
                    <hr />
                    <div className={classes.right_part}>
                        <img src={"/img/iconfinder_shopping-cart_2561279 1.png"} alt={"cart-pic"} />
                        <p>3</p>
                    </div>
                </div>
            </div>
            <hr />
        </header>
    )
}

export default Header
