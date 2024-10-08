import Header from "../shared/UI/Header/Header"
import { BrowserRouter } from "react-router-dom"
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
