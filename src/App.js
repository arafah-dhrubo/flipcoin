import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashbaord/Dashboard';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
function App() {
  return (
    <div className="relative flex justify-between bg-base-100">
      {/* <div className='w-full h-screen overflow-y-auto'> */}
        {/* <Navbar /> */}
        {/* <div className=' h-full'> */}
          <BrowserRouter>
          <Sidebar />
           <Routes>
           {/* <Route path="/" element={}> */}
            <Route path="/" element={<Dashboard/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route index element={<Dashboard/>}/>
          {/* </Route> */}
           </Routes>
          </BrowserRouter>
        </div>

  );
}

export default App;
