import React from "react"
import classes from "./EmptyCart.module.css"
import { MAIN_ROUTE } from "../../../../utils/consts"
import { useNavigate } from "react-router-dom"

const EmptyCart = () => {
    const navigate = useNavigate()
    return (
        <div className={classes.container}>
            <h1>
                Корзина пустая <img src={"/img/smile.png"} alt={"smile-pic"} />
            </h1>
            <p>
                Вероятней всего, вы не заказывали ещё курсы. <br /> Для того, чтобы заказать курсы, перейди на <br />
                главную страницу.
            </p>
            <img src={"/img/shopping-cart-colour 1.png"} alt={"not-found-pic"} />
            <button onClick={() => navigate(MAIN_ROUTE)}>Вернуться назад</button>
        </div>
    )
}

export default EmptyCart
