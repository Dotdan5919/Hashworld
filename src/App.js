import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import NotificationPage from './components/NotificationPage';
import ProfilePage from './components/ProfilePage';




import New from './new';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route index element={<LoginPage/>} />
    <Route path="register" element={<RegisterPage/>} />
    <Route path="home" element={<HomePage/>} />
    <Route path="Notification" element={<NotificationPage/>} />
    <Route path="Profile" element={<ProfilePage/>} />


    

    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
