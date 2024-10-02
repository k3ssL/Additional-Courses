import React from "react"
import classes from "./Cards.module.css"
import Card from "../Card/Card"
import { useCards } from "./useCards"
import SkeletonCard from "../SkeletonCard/SkeletonCard"

const Cards = ({ activeCategory }) => {
    const { courses } = useCards()

    return (
        <div className={classes.container}>
            {courses.length > 0
                ? courses
                      .filter((course) => activeCategory === 0 || course.category === activeCategory)
                      .map((course) => (
                          <Card
                              key={course.id}
                              id={course.id}
                              name={course.name}
                              image={course.image}
                              types={course.type}
                              price={course.price}
                          />
                      ))
                : [...new Array(8)].map((_, index) => <SkeletonCard key={index} />)}
        </div>
    )
}

export default Cards
