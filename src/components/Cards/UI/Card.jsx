import React, { useState } from "react"
import classes from "./Card.module.css"

const Card = ({ image, name, types, price }) => {
    const typeNames = ["студент", "школьник"]
    const [activeType, setActiveType] = useState(0)

    const handleTypeClick = (index) => {
        setActiveType(index)
    }

    return (
        <div className={classes.container}>
            <img src={image} alt={"card-pic"} />
            <p className={classes.card_name}>{name}</p>
            <div className={classes.types}>
                {types.map((typeId, index) => (
                    <p
                        key={typeId}
                        onClick={() => handleTypeClick(index)}
                        className={index === activeType ? classes.active_type : ""}
                    >
                        {typeNames[typeId]}
                    </p>
                ))}
            </div>
            <div className={classes.bottom_part}>
                <p>от {price} ₽</p>
                <button>
                    {" "}
                    <img src={"/img/Vector.png"} alt={"Vector"} /> Добавить
                </button>
            </div>
        </div>
    )
}

export default Card
