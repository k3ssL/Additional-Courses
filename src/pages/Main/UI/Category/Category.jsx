import React from "react"
import classes from "./Category.module.css"

const Category = ({ name, isActive, onClick }) => {
    return (
        <div className={isActive ? classes.active_category : classes.container} onClick={onClick}>
            <p className={classes.name}>{name}</p>
        </div>
    )
}

export default Category
