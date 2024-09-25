import { useEffect, useState } from "react"
import axios from "axios"

export const useCards = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        async function fetchCourses() {
            const response = await axios.get("https://66f19d744153791915518fff.mockapi.io/api/courses")
            await setCourses(response.data)
        }
        fetchCourses()
    }, [])

    return {
        courses,
    }
}
