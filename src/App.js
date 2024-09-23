import MainPage from "./pages/MainPage/MainPage"
import Header from "./components/Header/Header"
import { BrowserRouter } from "react-router-dom"
import BasketPage from "./pages/BasketPage/BasketPage"
import AppRouter from "./AppRouter"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <AppRouter />
            </BrowserRouter>
        </div>
    )
}

export default App
