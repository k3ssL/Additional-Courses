import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "../../../../app/consts"

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
        axios.get(`${API_URL}/categories`).then((response) => {
            setCategories(response.data)
        })
    }, [])

    return {
        categories,
        localActiveCategory,
        handleActiveCategory,
        activeCategoryName,
    }
}
