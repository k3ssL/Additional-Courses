import React from "react"
import classes from "./Cards.module.css"
import Card from "./UI/Card"
import { useCards } from "./useCards"

const Cards = ({ activeCategory }) => {
    const { courses } = useCards()

    return (
        <div className={classes.container}>
            {courses
                .filter((course) => activeCategory === "0" || course.category === activeCategory)
                .map((course) => (
                    <Card
                        key={course.id}
                        id={course.id}
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
