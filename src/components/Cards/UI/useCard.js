import { useState } from "react"

export const useCard = () => {
    const typeNames = ["студент", "школьник"]
    const [activeType, setActiveType] = useState(0)
    const [isButtonActive, setIsButtonActive] = useState(true)

    const handleTypeClick = (index) => {
        setActiveType(index)
    }

    const handleButtonClick = () => {
        setIsButtonActive(true)
    }

    return {
        typeNames,
        activeType,
        isButtonActive,
        handleTypeClick,
        handleButtonClick,
    }
}
