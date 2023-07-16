import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favs from "./views/Favs";
import Footer from "./components/Footer";

import { ImageProvider } from "./context/ImageContext";
function App() {
    return (
        <div className="App">
            <ImageProvider>
                <Router>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favs" element={<Favs />} />
                    </Routes>

                    <Footer />

                </Router>
            </ImageProvider>
        </div>
    );
}

export default App;
