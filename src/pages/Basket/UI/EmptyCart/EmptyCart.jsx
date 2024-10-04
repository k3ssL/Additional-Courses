import React from "react"
import classes from "./EmptyCart.module.css"
import { MAIN_ROUTE } from "../../../../app/consts"
import { useNavigate } from "react-router-dom"

const EmptyCart = () => {
    const navigate = useNavigate()
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>
                Корзина пустая <img src={"/img/smile.png"} alt={"smile-pic"} className={classes.smile} />
            </h1>
            <p className={classes.not_found_text}>
                Вероятней всего, вы не заказывали ещё курсы. <br /> Для того, чтобы заказать курсы, перейди на <br />
                главную страницу.
            </p>
            <img src={"/img/shopping-cart-colour 1.png"} alt={"not-found-pic"} className={classes.not_found_img} />
            <button onClick={() => navigate(MAIN_ROUTE)} className={classes.back_button}>
                Вернуться назад
            </button>
        </div>
    )
}

export default EmptyCart
