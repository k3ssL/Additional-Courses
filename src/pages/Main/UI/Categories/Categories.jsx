import React from "react"
import classes from "./Categories.module.css"
import Category from "../Category/Category"
import { useCategories } from "./useCategories"
import SkeletonCategories from "../SkeletonCategories/SkeletonCategories"

const Categories = ({ setActiveCategories }) => {
    const { categories, localActiveCategory, handleActiveCategory, activeCategoryName } =
        useCategories(setActiveCategories)

    return (
        <>
            <div className={classes.container}>
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <Category
                            key={category.id}
                            name={category.name}
                            isActive={category.id === localActiveCategory}
                            onClick={() => handleActiveCategory(category.id)}
                        />
                    ))
                ) : (
                    <SkeletonCategories />
                )}
            </div>
            <h1 className={classes.category_name}>{activeCategoryName}</h1>
        </>
    )
}

export default Categories
