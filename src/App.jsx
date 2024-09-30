import "./index.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Player from "./pages/Player/Player";
import { useEffect } from "react";
import { useAuth } from "./context/AuthContext"; // Import useAuth
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";

const App = () => {
  const { currentUser } = useAuth(); // Use useAuth to get currentUser
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  useEffect(() => {
    if (currentUser) {
      console.log('Logged In');
      // Check if the current path is the login page
      if (location.pathname === '/login') {
        navigate('/'); // Only redirect to home if coming from login
      }
      // If you're on the Player page, don't navigate
    } else {
      console.log('Logged out');
      navigate('/login');
    }
  }, [currentUser, navigate, location.pathname]);

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
