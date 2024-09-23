import { BASKET_ROUTE, MAIN_ROUTE } from "./utils/consts"
import MainPage from "./pages/MainPage/MainPage"
import BasketPage from "./pages/BasketPage/BasketPage"

export const routes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage,
    },

    {
        path: BASKET_ROUTE,
        Component: BasketPage,
    },
]
