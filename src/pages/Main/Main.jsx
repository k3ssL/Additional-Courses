import React from "react"
import Categories from "./UI/Categories/Categories"
import Cards from "./UI/Cards/Cards"
import Sort from "./UI/Sort/Sort"
import { useMain } from "./useMain"

const Main = () => {
    const { sortedCourses, activeCategory, setActiveCategory, sortType, setSortType } = useMain()

    return (
        <div>
            <Categories setActiveCategories={setActiveCategory} />
            <Sort value={sortType} setValue={setSortType} />
            <Cards activeCategory={activeCategory} courses={sortedCourses()} />
        </div>
    )
}

export default Main
