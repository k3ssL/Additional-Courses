import React, { createContext, useState, useContext } from "react"

const CartContext = createContext()

export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (course) => {
        setCartItems((prev) => {
            const courseKey = `${course.id}-${course.type}`
            const existingItem = prev.find((item) => `${item.id}-${item.type}` === courseKey)

            if (existingItem) {
                return prev.map((item) =>
                    `${item.id}-${item.type}` === courseKey ? { ...item, counter: item.counter + 1 } : item,
                )
            }
            return [...prev, { ...course, counter: 1 }]
        })
    }

    const decreaseFromCart = (id, type) => {
        setCartItems((prev) => {
            const courseKey = `${id}-${type}`
            return prev
                .map((item) =>
                    `${item.id}-${item.type}` === courseKey ? { ...item, counter: item.counter - 1 } : item,
                )
                .filter((item) => item.counter > 0)
        })
    }

    const increaseInCart = (id, type) => {
        setCartItems((prev) => {
            const courseKey = `${id}-${type}`
            return prev.map((item) =>
                `${item.id}-${item.type}` === courseKey ? { ...item, counter: item.counter + 1 } : item,
            )
        })
    }

    const clearCart = () => {
        setCartItems([])
    }

    const removeFromCart = (id, type) => {
        const courseKey = `${id}-${type}`
        setCartItems((prev) => prev.filter((item) => `${item.id}-${item.type}` !== courseKey))
    }

    const totalCourses = cartItems.reduce((acc, item) => acc + item.counter, 0)

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.counter, 0)

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                decreaseFromCart,
                increaseInCart,
                clearCart,
                removeFromCart,
                totalCourses,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
