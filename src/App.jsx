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
  const { currentUser } = useAuth(); 
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    if (currentUser) {
      console.log('Logged In');
     
      if (location.pathname === '/login') {
        navigate('/'); 
      }
      
    } else {
   
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
