import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './component/Login&SignIn/Login/login';
import Regester from './component/Login&SignIn/Login/signin';
import UserHome from './component/User/UserHome/UserHome';
import Profile from './component/User/UserProfile/profile';
import RunningMatch from './component/match/runningMatch/Rmatch';
import OrgnizerProfile from './component/Orgnizer/OrgnizerProfile/OrgnizerProfile';
import AddForm from './component/Orgnizer/OrgnizerForms/addForm';
import AdminDashboard from './component/admin/adminDashbourd/adminDashbourd';

function App() {
  return (
  
    <div className="App">
   
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Login/>} />
        <Route path="/regester" element={<Regester/>} />
        <Route path="/UserHome" element={<UserHome/>} />
        <Route path="/OrgnizerProfil" element={<OrgnizerProfile/>} />
        <Route path="/AddForm" element={<AddForm/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/runningMatches" element={<RunningMatch/>} />
        <Route path="/AdminDashboard" element={<AdminDashboard/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
