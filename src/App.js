import Login from "./Pages/Login";
import React, { useEffect } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom'
import Signup from "./Pages/Signup";
import Homepage from "./Pages/Homepage";
import Profile from "./Components/Profile"
import {auth} from "./Firebase"
function App() {
  const navigate = useNavigate()
  useEffect(()=>{
    handle()
  },[])
  const handle = () =>{
    auth.onAuthStateChanged((user)=>{
      if(!user){
        navigate("/Login")
      }
      else{
        navigate("/")
      }
    })
  }
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/profile" element={<Profile/>} />
      
      {/* <Route path="/" element={<Login/>}></Route> */}
    </Routes>

    
    </>
  );
}

export default App;
