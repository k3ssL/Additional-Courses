import React, { useState } from "react"
import classes from "./Sort.module.css"

const Sort = ({ value, setValue }) => {
    const [open, setOpen] = useState(false)

    const list = [
        { name: "алфавиту", sortProperty: "alphabet" },
        { name: "популярности", sortProperty: "popularity" },
        { name: "цене", sortProperty: "price" },
    ]

    const onClickList = (obj) => {
        setValue(obj)
        setOpen(false)
    }

    return (
        <div className={classes.container}>
            <div className={classes.label}>
                {open ? (
                    <img src={"/img/sort-triangle.png"} alt={"sort-triangle"} />
                ) : (
                    <img src={"/img/sort-triangle-reverse.png"} alt={"sort-triangle"} />
                )}
                <b>Сортировка по:</b>
                <span onClick={() => setOpen(!open)}>{value.name}</span>
            </div>
            {open && (
                <div className={classes.popup}>
                    <ul>
                        {list.map((obj, i) => (
                            <li
                                key={i}
                                onClick={() => onClickList(obj)}
                                className={value.sortProperty === obj.sortProperty ? "active" : ""}
                            >
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Sort
