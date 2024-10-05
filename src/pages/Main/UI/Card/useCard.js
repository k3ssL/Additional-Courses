import { useState } from "react"
import { useCart } from "../../../../shared/providers/CartContext"

export const useCard = (id, name, image, price) => {
    const typeNames = ["студент", "школьник"]
    const [activeType, setActiveType] = useState(0)
    const [isButtonActive, setIsButtonActive] = useState(true)
    const [clickCount, setClickCount] = useState(0)

    const { addToCart } = useCart()

    const handleAddButtonClick = () => {
        setIsButtonActive(true)
        setClickCount((prevState) => prevState + 1)
    }

    const handleTypeClick = (index) => {
        setActiveType(index)
    }

    const handleAddToCart = () => {
        const course = {
            id,
            name,
            image,
            type: typeNames[activeType],
            price,
        }
        addToCart(course)
        handleAddButtonClick()
    }

    return {
        typeNames,
        activeType,
        isButtonActive,
        handleTypeClick,
        handleAddButtonClick,
        clickCount,
        handleAddToCart,
    }
}
