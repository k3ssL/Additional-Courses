import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "../../app/consts"

export const useMain = () => {
    const [activeCategory, setActiveCategory] = useState(0)
    const [sortType, setSortType] = useState({ name: "алфавиту", sortProperty: "alphabet" })
    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios
            .get(`${API_URL}/courses`)
            .then((response) => {
                setCourses(response.data)
            })
            .catch((error) => {
                console.error("Ошибка при загрузке курсов: ", error)
            })
    }, [])

    const sortedCourses = () => {
        switch (sortType.sortProperty) {
            case "alphabet":
                return [...courses].sort((a, b) => a.name.localeCompare(b.name))
            case "popularity":
                return [...courses].sort((a, b) => b.popularity - a.popularity)
            case "price":
                return [...courses].sort((a, b) => a.price - b.price)
            default:
                return courses
        }
    }

    return {
        activeCategory,
        setActiveCategory,
        sortedCourses,
        sortType,
        setSortType,
    }
}
