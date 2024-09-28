import React, { createContext, useState, useContext } from "react"

const CartContext = createContext()

export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (course) => {
        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.id === course.id)
            if (existingItem) {
                return prev.map((item) => (item.id === course.id ? { ...item, counter: item.counter + 1 } : item))
            }
            return [...prev, { ...course, counter: 1 }]
        })
    }

    const decreaseFromCart = (courseId) => {
        setCartItems((prev) =>
            prev
                .map((item) => (item.id === courseId ? { ...item, counter: item.counter - 1 } : item))
                .filter((item) => item.counter > 0),
        )
    }

    const increaseInCart = (courseId) => {
        setCartItems((prev) =>
            prev.map((item) => (item.id === courseId ? { ...item, counter: item.counter + 1 } : item)),
        )
    }

    const clearCart = () => {
        setCartItems([])
    }

    const removeFromCart = (courseId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== courseId))
    }

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, decreaseFromCart, increaseInCart, clearCart, removeFromCart }}
        >
            {children}
        </CartContext.Provider>
    )
}
