import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';


import New from './new';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route index element={<LoginPage/>} />
    <Route path="register" element={<RegisterPage/>} />
    <Route path="home" element={<HomePage/>} />
    <Route path="Notification" element={<HomePage/>} />

    

    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
