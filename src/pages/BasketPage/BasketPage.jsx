import React from "react"
import classes from "./BasketPage.module.css"
import EmptyCart from "./UI/EmptyCart/EmptyCart"
import CartItems from "./UI/CartItems/CartItems"
import { useNavigate } from "react-router-dom"
import { MAIN_ROUTE, SBP_ROUTE } from "../../utils/consts"

const BasketPage = () => {
    const cartItems = [1]
    const navigate = useNavigate()
    return cartItems ? (
        <div className={classes.container}>
            <div className={classes.title}>
                <div className={classes.cart}>
                    <img src={"/img/iconfinder_shopping-cart_2561279 2.png"} alt={"cart-pic"} />
                    <h1>Корзина</h1>
                </div>
                <div className={classes.trash}>
                    <img src={"/img/iconfinder_trash-2_3324927 1.png"} alt={"trash-pic"} />
                    <p>Очистить корзину</p>
                </div>
            </div>
            <hr />
            <CartItems />
            <div className={classes.total_courses}>
                <span>Всего курсов: {cartItems.length} шт.</span>
                <p>
                    Сумма заказа: <span className={classes.total_courses_price}>900 ₽</span>
                </p>
            </div>
            <div className={classes.bottom_buttons}>
                <button onClick={() => navigate(MAIN_ROUTE)} className={classes.back_button}>
                    <img src={"/img/Path.png"} alt={"back-arrow-pic"} />
                    Вернуться назад
                </button>
                <button className={classes.pay_button} onClick={() => (window.location.href = SBP_ROUTE)}>
                    Оплатить сейчас
                </button>
            </div>
        </div>
    ) : (
        <EmptyCart />
    )
}

export default BasketPage
