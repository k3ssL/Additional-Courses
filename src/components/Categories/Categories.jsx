import React from "react"
import classes from "./Categories.module.css"
import Category from "./UI/Category"
import { useCategories } from "./useCategories"

const Categories = ({ setActiveCategories }) => {
    const { categories, localActiveCategory, handleActiveCategory, activeCategoryName } =
        useCategories(setActiveCategories)

    return (
        <>
            <div className={classes.container}>
                {categories.map((category) => (
                    <Category
                        key={category.id}
                        name={category.name}
                        isActive={category.id === localActiveCategory}
                        onClick={() => handleActiveCategory(category.id)}
                    />
                ))}
            </div>
            <h1 className={classes.category_name}>{activeCategoryName}</h1>
        </>
    )
}

export default Categories
