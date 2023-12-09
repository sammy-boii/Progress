import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Help } from "./pages/Help";
import NavBar from "./components/NavBar";
import ShoppingCartPreview from "./components/ShoppingCartPreview";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <ShoppingCartPreview />
    </>
  );
}
