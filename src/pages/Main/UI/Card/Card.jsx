import React from "react"
import classes from "./Card.module.css"
import { useCard } from "./useCard"
import { useCart } from "../../../../shared/providers/CartContext"

const Card = ({ id, image, name, types, price }) => {
    const { handleTypeClick, activeType, typeNames, isButtonActive, clickCount, handleAddButtonClick } = useCard()
    const { addToCart } = useCart()

    const handleAddToCart = () => {
        const course = {
            id,
            name,
            image,
            type: typeNames[activeType],
            price,
        }
        addToCart(course)
        handleAddButtonClick()
    }

    return (
        <div className={classes.container}>
            <img src={image} alt={"card-pic"} />
            <span className={classes.card_name}>{name}</span>
            <div className={classes.types}>
                {types.map((typeId, index) => (
                    <span
                        key={typeId}
                        onClick={() => handleTypeClick(index)}
                        className={index === activeType ? classes.active_type : ""}
                    >
                        {typeNames[typeId]}
                    </span>
                ))}
            </div>
            <div className={classes.bottom_part}>
                <span>от {price} ₽</span>
                <button onClick={handleAddToCart}>
                    <img src={isButtonActive ? "/img/Vector2.png" : "/img/Vector.png"} alt={"add icon"} />
                    Добавить
                    {clickCount > 0 && <span className={classes.counter}>{clickCount}</span>}
                </button>
            </div>
        </div>
    )
}

export default Card
