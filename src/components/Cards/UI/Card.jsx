import React from "react"
import classes from "./Card.module.css"
import { useCard } from "./useCard"

const Card = ({ image, name, types, price }) => {
    const { handleTypeClick, activeType, typeNames, handleButtonClick, isButtonActive } = useCard()

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
                <button onClick={handleButtonClick}>
                    {" "}
                    <img src={isButtonActive ? "/img/Vector2.png" : "/img/Vector.png"} alt={"Vector"} /> Добавить
                </button>
            </div>
        </div>
    )
}

export default Card
