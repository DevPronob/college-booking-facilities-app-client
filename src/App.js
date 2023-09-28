import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import Colleges from './Components/Colleges/Colleges';
import MyCollege from './Components/MyCollege/MyCollege';
import Admission from './Components/Admission/Admission';
import CollegeDetails from './Components/CollegeDetails/CollegeDetails';
import About from './Components/About/About';
import NotFound from './Shared/NotFound';
import PrivateAuth from './Shared/PrivateAuth';

function App() {
  return (
    <>
     <Navbar></Navbar>
     <div className="app">
     <Routes>
        <Route path="/" element={ <Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
        <Route path="/college/:id" element={<PrivateAuth><CollegeDetails></CollegeDetails></PrivateAuth>} />
        <Route path="/colleges" element={<Colleges></Colleges>} />
        <Route path="/my-colleges" element={<PrivateAuth><MyCollege></MyCollege></PrivateAuth>} />
        <Route path="/admission" element={<PrivateAuth><Admission></Admission></PrivateAuth>} />
        <Route path="/profile" element={<About></About>} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
    </>
  );
}

export default App;
