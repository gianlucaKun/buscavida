import './App.css';
import Home from './pages/home/Home.jsx';
import Menu from "./pages/menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/utils/ScrollToHash";

function App() {
    return (
        <BrowserRouter>
            <ScrollToHash />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;