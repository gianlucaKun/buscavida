import './App.css';
import Home from './pages/home/Home.jsx';
import Menu from "./pages/menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/buscavida" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;