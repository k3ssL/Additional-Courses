import React from "react"
import ReactDOM from "react-dom/client"
import "./app/index.css"
import App from "./app/App"
import { CartProvider } from "./shared/providers/CartContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <CartProvider>
            <App />
        </CartProvider>
    </React.StrictMode>,
)
