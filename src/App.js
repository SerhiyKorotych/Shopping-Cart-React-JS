import "./App.css";
import Header from "./components/header/header.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.page";
import Cart from "./pages/cart/cart.page";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
