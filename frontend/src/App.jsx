import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import ShowProducts from "./pages/ShowProducts.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CreateProduct from "./pages/CreateProduct.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Outlet />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/show-products" element={<ShowProducts />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
