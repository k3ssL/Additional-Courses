import { BASKET_ROUTE, MAIN_ROUTE } from "./consts"
import Main from "../pages/Main/Main"
import Basket from "../pages/Basket/Basket"

export const routes = [
    {
        path: MAIN_ROUTE,
        Component: Main,
    },

    {
        path: BASKET_ROUTE,
        Component: Basket,
    },
]
