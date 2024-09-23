import React, { useEffect, useState } from "react"
import classes from "./Cards.module.css"
import Card from "./UI/Card"
import axios from "axios"

const Cards = ({ activeCategory }) => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        async function fetchCourses() {
            const response = await axios.get("https://66f19d744153791915518fff.mockapi.io/api/courses")
            await setCourses(response.data)
        }
        fetchCourses()
    }, [])

    return (
        <div className={classes.container}>
            {courses
                .filter((course) => activeCategory === 0 || course.category === activeCategory)
                .map((course) => (
                    <Card
                        key={course.id}
                        name={course.name}
                        image={course.image}
                        types={course.type}
                        price={course.price}
                    />
                ))}
        </div>
    )
}

export default Cards
