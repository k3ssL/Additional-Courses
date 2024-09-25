import { useState } from "react"

export const useCard = () => {
    const typeNames = ["студент", "школьник"]
    const [activeType, setActiveType] = useState(0)
    const [isButtonActive, setIsButtonActive] = useState(true)
    const [clickCount, setClickCount] = useState(0)

    const handleAddButtonClick = () => {
        setIsButtonActive(true)
        setClickCount((prevState) => prevState + 1)
    }

    const handleTypeClick = (index) => {
        setActiveType(index)
    }
    return {
        typeNames,
        activeType,
        isButtonActive,
        handleTypeClick,
        handleAddButtonClick,
        clickCount,
    }
}
