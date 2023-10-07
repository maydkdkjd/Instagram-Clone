import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import {auth, db} from '../Firebase'
import {collection, addDoc} from "firebase/firestore"
import Login from "./Login"
import { createUserWithEmailAndPassword } from "firebase/auth";
import Header from "../Components/Header";
const Signup = () => {
    const [users, setUsers] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [ide, setId] = useState("")
    

    const saveData = async(event) =>{
      event.preventDefault();
      try {
        const { id } = await addDoc(collection(db, "users"),
        {
          name2:name,
          use:users
          
        })

        
          
        setId(id)
        // console.log(ide)
        console.log(id)
        // alert("Data Added")
        await createUserWithEmailAndPassword(auth, email, password)
        
        
        // console.log(user)
      } catch (error) {
        console.log(error)
      }
     
    }
    <Header id = {ide} />
   

  return (
    <>
      <div className="h-screen w-[100%] flex justify-center items-center bg-[#fafafa]">
        <div className="w-[26%] h-[100%] mt-[50px]">
          <div className="h-[100%] w-[100%] border-[1px] border-[#8e8e8e] flex flex-col items-center bg-[#fff] ">
             <div className="p-3 flex justify-center items-center mt-8">
              <img
                src={
                  "https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                }
                alt=""
              />
             </div>
             <div className="flex flex-col items-center h-[80%] w-[80%]">
              <h1 className="text-center text-[19px] text-[grey] leading-6 font-[bolder]">
                Sign up to see photos and videos from your friends.
              </h1>
              <button className="p-1 text-[white] bg-[#0095F6] w-[100%] my-3 rounded-[4px]">
                Log In with Facebook
              </button>
              <div className="w-[80%] my-3 flex">
                <div className="border-2 w-[40%] h-[0]"></div>
                <div className="mx-[20px]">
                  <span className="relative bottom-[8px]">OR</span>
                </div>
                <div className="border-2 w-[40%] h-[0]"></div>
              </div>
              <div className="h-[] w-[100%]">
                <form>
                  <input
                    type="text"
                    placeholder="Mobile Number or Email"
                    className="w-[100%] border-[1px] text-[14px] p-2 my-1"
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-[100%] border-[1px] text-[14px] p-2 my-1"
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-[100%] border-[1px] text-[14px] p-2 my-1"
                    onChange={(e)=>{
                        setUsers(e.target.value)
                    }}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-[100%] border-[1px] text-[14px] p-2 my-1"
                    onChange={(e)=>{
                        setPassword(e.target.value)
                        console.log(password)
                    }}
                  />
                  <p className="text-[12px] my-3  text-center w-[100%] text-[grey] ">
                    People who use our service may have uploaded your contact
                    information to Instagram. Learn More
                  </p>
                  <p className="text-[12px] my-3 text-center w-[100%] text-[grey]">
                    By signing up, you agree to our Terms , Privacy Policy and
                    Cookies Policy .
                  </p>
                  <button onClick={saveData} className="p-1 text-[white] bg-[#0095F6] opacity-30 w-[100%] mt-1 rounded-[4px] hover:opacity-100"
            >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>

          </div>
          <div className="w-[100%] h-[10%] flex justify-center items-center bg-[#fff] border-[1px] border-[#8e8e8e] mt-2">
            <h2>Have an account? <Link to="/Login" className="underline cursor-pointer">Sign Up</Link></h2>
          </div>
          <div className="flex flex-col justify-center items-center mt-2">
            <h2 className="my-3">Get the app</h2>
            <div className="flex">
                <img src={"https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"} alt="" className="w-[136px] h-[40] mx-1"/>
                <img src={"https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"} alt="" className="w-[136px] h-[40]"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;




 