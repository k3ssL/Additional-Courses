import React from "react"
import classes from "./Card.module.css"
import { useCard } from "./useCard"

const Card = ({ image, name, types, price }) => {
    const { handleTypeClick, activeType, typeNames, isButtonActive, clickCount, handleAddButtonClick } = useCard()

    return (
        <div className={classes.container}>
            <img src={image} alt={"card-pic"} />
            <span className={classes.card_name}>{name}</span>
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
                <span>от {price} ₽</span>
                <button onClick={handleAddButtonClick}>
                    <img src={isButtonActive ? "/img/Vector2.png" : "/img/Vector.png"} alt={"add icon"} />
                    Добавить
                    {clickCount > 0 && (
                        <span className={classes.counter}>{clickCount}</span> // Отображаем счётчик
                    )}
                </button>
            </div>
        </div>
    )
}

export default Card
