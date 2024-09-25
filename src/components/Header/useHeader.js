import { useLocation, useNavigate } from "react-router-dom"
import { BASKET_ROUTE, MAIN_ROUTE } from "../../utils/consts"

export const useHeader = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogoClick = () => navigate(MAIN_ROUTE)
    const handleCartButtonClick = () => navigate(BASKET_ROUTE)

    return {
        location,
        handleLogoClick,
        handleCartButtonClick,
    }
}
