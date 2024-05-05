import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './component/Login&SignIn/Login/login';
import Regester from './component/Login&SignIn/Login/signin';
import UserHome from './component/User/UserHome/UserHome';

function App() {
  return (
  
    <div className="App">
   
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Login/>} />
        <Route path="/regester" element={<Regester/>} />
        <Route path="/UserHome" element={<UserHome/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
