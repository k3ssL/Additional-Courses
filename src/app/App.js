import Header from "../components/Header/Header"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "../components/AppRouter"

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
