import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homee/Home";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoginStatus } from "./redux/features/auth/authSlice";
import Profile from "./pages/profile/Profile";
import Cart from "./components/cart";

const App = () => {
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoginStatus());
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
