import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";

function App() {

return (

<BrowserRouter>

<Navbar />

<Routes>

<Route

path="/"

element={<Home />}

/>

<Route

path="/product"

element={<Product />}

/>

<Route

path="/about"

element={<About />}

/>

<Route

path="/contact"

element={<Contact />}

/>

<Route

path="/privacy-policy"

element={<PrivacyPolicy />}

/>

<Route

path="/terms"

element={<Terms />}

/>

<Route

path="/disclaimer"

element={<Disclaimer />}

/>

</Routes>

<FloatingWhatsApp />

<Footer />

</BrowserRouter>

);

}

export default App;