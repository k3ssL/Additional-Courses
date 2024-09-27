import { useEffect, useState } from "react"
import axios from "axios"

export const useCategories = (setActiveCategories) => {
    const [categories, setCategories] = useState([])
    const [localActiveCategory, setLocalActiveCategory] = useState(0)
    const [activeCategoryName, setActiveCategoryName] = useState("Все")

    const handleActiveCategory = (id) => {
        setLocalActiveCategory(id)
        setActiveCategories(id)

        const activeCategory = categories.find((category) => category.id === id)
        setActiveCategoryName(activeCategory ? activeCategory.name : "Все")
    }

    useEffect(() => {
        async function fetchCategories() {
            const response = await axios.get("https://66f19d744153791915518fff.mockapi.io/api/categories")
            setCategories(response.data)
            handleActiveCategory("0")
        }

        fetchCategories()
    }, [])
    return {
        categories,
        localActiveCategory,
        handleActiveCategory,
        activeCategoryName,
    }
}
