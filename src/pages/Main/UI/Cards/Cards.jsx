import React from "react"
import classes from "./Cards.module.css"
import Card from "../Card/Card"
import SkeletonCard from "../SkeletonCard/SkeletonCard"

const Cards = ({ courses, activeCategory }) => {
    return (
        <div>
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
        </div>
    )
}

export default Cards
