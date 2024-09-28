import React, { useState } from "react"
import classes from "./Main.module.css"
import Categories from "./UI/Categories/Categories"
import Cards from "./UI/Cards/Cards"

const Main = () => {
    const [activeCategory, setActiveCategory] = useState(0)
    return (
        <div className={classes.container}>
            <Categories setActiveCategories={setActiveCategory} />
            <Cards activeCategory={activeCategory} />
        </div>
    )
}

export default Main
