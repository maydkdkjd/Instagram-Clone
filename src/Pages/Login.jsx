import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import userEvent from "@testing-library/user-event";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Login = (props) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("Log In");
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error2, setError] = useState("");
  const btnDisabled = () => {
    if (password.length >= 6 && email.length >= 1) {
      document.getElementById("login").style.opacity = 1;
    } else {
      document.getElementById("login").style.opacity = 0.3;
    }
  };
  useEffect(() => {
    btnDisabled();
  }, [password, email]);

  const signedIn = async (e) => {
    e.preventDefault();
    try {
      setLogin(
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      );

      const user = await signInWithEmailAndPassword(auth, email, password);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      setError(error.message);
      setLogin("Login")
    }
    
  };

  return (
    <>
      <div className="h-screen w-[100%]  flex justify-center items-center bg-[#fafafa] text-[14px]">
        <div className="  w-[63%] flex justify-center items-center h-[90%] ">
          <div className=" h-[100%] w-[42%] flex justify-between  ">
            <img
              src={
                "https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
              }
              alt=""
              className=""
            />
            <img
              src={
                "https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
              }
              alt=""
              className="relative right-[50%]"
            />

            {/* <img src={"https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"} alt="" />
                <img src={"https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"} alt="" /> */}
          </div>
          <div className="h-[100%]   w-[42%] bg-[#fafafa] flex flex-col items-center relative ">
            <div className="h-[70%] border-[2px] w-[100%] flex flex-col items-center bg-[#ffffff]">
              <div className="w-[70%]  flex justify-center items-center h-[30%]">
                <img
                  src={
                    "https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                  }
                  alt=""
                />
              </div>
              <div className="w-[80%]">
                <form action="">
                  <input
                    type="text"
                    placeholder="Phonenumber, name, email"
                    className="w-[100%] bg-[#fafafa]  opacity-80 border-2 p-2 focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-[100%] bg-[#fafafa]  opacity-80 border-2 p-2 mt-[6px] focus:outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <h2 className="text-[red] text-center">{error2}</h2>
                  <button
                    onClick={signedIn}
                    id="login"
                    className="login1 w-[100%] p-1 bg-[#0095F6] mt-3 opacity-40 rounded-[4px] text-white font-[bolder] flex items-center justify-center"
                  >
                    <span>{login}</span>
                  </button>
                </form>
              </div>
              <div className="w-[80%] mt-[25px] flex">
                <div className="border-2 w-[40%] h-[0]"></div>
                <div className="mx-[20px]">
                  <span className="relative bottom-[8px]">OR</span>
                </div>
                <div className="border-2 w-[40%] h-[0]"></div>
              </div>
              <div className="my-4">
                <Link to="/" className="text-[#385185] flex items-center">
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/512/124/124010.png"
                    }
                    className="w-[16px] h-[16px] mr-2"
                    alt=""
                  />
                  Log in with Facebook
                </Link>
              </div>
              <div className="my-1 text-[#00376B]">
                <Link to="/" className="">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="w-[100%] bg-[#ffffff] flex items-center justify-center mt-[8px] border-2 h-[10%]">
              <h4>Don't have an account? </h4>
              <Link to="/signup" className=" text-[#0095F6] ml-1">
                Sign Up
              </Link>
            </div>
            <Link to="/signup" className="mt-[25px]">
              Get the app
            </Link>
            <div className="w-[100%] flex justify-around px-10 absolute bottom-0">
              <img
                src={
                  "https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                }
                alt=""
                className="w-[136px] h-[40px]"
              />
              <img
                src={
                  "https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                }
                alt=""
                className="w-[136px] h-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
