import React from "react"
import classes from "./Cart.module.css"
import CartItems from "../CartItems/CartItems"
import { MAIN_ROUTE, SBP_ROUTE } from "../../../../utils/consts"
import { useCart } from "../../../../shared/providers/CartContext"
import { useNavigate } from "react-router-dom"

const Cart = () => {
    const { cartItems, clearCart } = useCart()
    const navigate = useNavigate()

    const totalCourses = cartItems.reduce((acc, item) => acc + item.counter, 0)

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.counter, 0)

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <div className={classes.cart}>
                    <img src={"/img/iconfinder_shopping-cart_2561279 2.png"} alt={"cart-pic"} />
                    <h1>Корзина</h1>
                </div>
                <div className={classes.trash} onClick={clearCart}>
                    <img src={"/img/iconfinder_trash-2_3324927 1.png"} alt={"trash-pic"} />
                    <p>Очистить корзину</p>
                </div>
            </div>
            <hr />
            <CartItems />
            <div className={classes.total_courses}>
                <span>Всего курсов: {totalCourses} шт.</span>
                <p>
                    Сумма заказа: <span className={classes.total_courses_price}>{totalPrice} ₽</span>
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
    )
}

export default Cart
