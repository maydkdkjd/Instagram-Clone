import React, {useState} from "react";
import { auth, db } from "../Firebase";
import { useNavigate, Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { Avatar } from "@mui/material";

const Header = (props) => {
  const [image, setImage]  = useState("https://www.freeiconspng.com/thumbs/photography-icon-png/photo-album-icon-png-14.png")
  const [caption, setCaption] = useState("")
  const navigate = useNavigate();
  const handleProfile = (e) => {
    e.preventDefault();
    if (document.getElementById("profilediv").style.display == "block") {
      document.getElementById("profilediv").style.display = "none";
    } else {
      document.getElementById("profilediv").style.display = "block";
    }
  };
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth);
    navigate("/Login");
  };
  const handlePost = (e) => {
    e.preventDefault();
    if (document.getElementById("post").style.display == "block") {
      document.getElementById("post").style.display = "none";
      document.getElementById("post_image").setAttribute("src", "https://www.freeiconspng.com/thumbs/photography-icon-png/photo-album-icon-png-14.png")
    } else {
      document.getElementById("post").style.display = "block";
    }
  };

    const handlePost2 = (e) =>{
      e.preventDefault();
      const reader = new FileReader()
      reader.onload = () =>{
        if(reader.readyState === 2){
          setImage(reader.result)
        }
      }
      reader.readAsDataURL(e.target.files[0])
    
    }
    
  const handleSubmitPost = async(e) =>{
    try {
      await addDoc(collection(db, "users", props.id, "Posts"),{
        image:image,
        caption:caption
      })
      alert("data added")
    } catch (error) {
      // console.log(error.message)
    }
    setImage("https://www.freeiconspng.com/thumbs/photography-icon-png/photo-album-icon-png-14.png")
    document.getElementById("caption").value=''

  }

  const handleProfileClick = (e) =>{
    e.preventDefault()
    navigate("/profile")
  }
  return (
    <>
      <div className="bg-[#fff] h-[10%] border-black border-[1px] flex items-center justify-center fixed w-full top-0 left-0 z-10">
        <div className="flex w-[70%] h-[65%] items-center justify-between ">
          <div className="flex items-center">
            <div className=" flex bg-cover bg-center relative top-1">
              <img
                src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                alt="Instagram"
                className="w-[103px] h-[30px]"
              />
            </div>
            <button>
              <i className="fa-solid fa-chevron-down ml-1"></i>
            </button>
          </div>
          <div className="h-full w-[28%] flex relative left-5 items-center">
            <i className="fa-solid fa-magnifying-glass absolute mx-3 text-[#8e8e8e]"></i>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="bg-[#efefef] h-[100%] w-[100%] rounded-[4px] pl-10 "
            />
          </div>
          <div className="flex">
            <ul className="list-none flex text-[25px]">
              <li>
                <i className="fa-solid fa-house mx-3 "></i>
              </li>
              <li>
                <i className="fa-regular fa-comment mx-3 "></i>
              </li>
              <li>
                <button onClick={handlePost}>
                  <i className="fa-regular fa-square-plus mx-3 "></i>
                </button>
              </li>
              <li>
                <i className="fa-regular fa-compass mx-3 "></i>
              </li>
              <li>
                <i className="fa-regular fa-heart mx-3 "></i>
              </li>
                <Avatar onClick={handleProfileClick}/>
                <div
                  id="profilediv"
                  className=" h-[200px] w-[200px] bg-[#fff] absolute top-[45px] right-0 -z-[1] hidden text-[15px]"
                >
                  <div className="bg-[#fff] mb-2 hover:bg-[grey] cursor-pointer w-full h-[15%] p-4 flex items-center"
                  onClick={handleProfileClick}>
                    <i className="fa-regular fa-user mx-1"></i>
                    <span>Profile</span>
                  </div>
                  <div className="bg-[#fff] mb-2 hover:bg-[grey] cursor-pointer w-full h-[15%] p-4 flex items-center">
                    <i className="fa-regular fa-bookmark  mx-1"></i>
                    <span>Saved</span>
                  </div>
                  <div className="bg-[#fff] mb-2 hover:bg-[grey] cursor-pointer w-full h-[15%] p-4 flex items-center">
                    <i className="fa-sharp fa-solid fa-gear mx-1"></i>
                    <span>Settings</span>
                  </div>
                  <div className="bg-[#fff] mb-2 hover:bg-[grey] cursor-pointer w-full h-[15%] p-4 flex items-center">
                    <i className="fa-solid fa-repeat mx-1"></i>
                    <span>Switch accounts</span>
                  </div>
                  <hr />
                  <div className="bg-[#fff] mb-2 hover:bg-[grey] cursor-pointer w-full h-[15%] p-4 flex items-center">
                    <span onClick={handleSignOut}>Sign out</span>
                  </div>
                </div>
              
            </ul>
          </div>
        </div>
      </div>
      <div
        id="post"
        className="absolute top-0 left-0 bg-[rgba(0,0,0,0.6)] bg-blend-darken hidden
         w-full h-screen z-[1]"
      >
        <i
          className="fa-solid fa-xmark absolute top-4 right-6 text-[20px] text-white cursor-pointer"
          onClick={handlePost}
        ></i>
        <div className="flex flex-col bg-white h-[70%] w-[30%] items-center rounded-[8px] absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4">
          <div className="h-[100%]">
            <h1 className="text-center py-2">Create New Post</h1>
            <hr />
            <div className="flex flex-col items-center justify-center h-[60%]">
              <img
                src={image}
                id="post_image"
                className="h-[150px]"
                alt="Post Image"
              />
              <h1 className="text-[25px]">Drag Photos from here</h1>
              <input
                type="file"
                multiple="multiple"
                id="drag_photo"
                name="file"
                onChange={handlePost2}
                className=" bg-[blue] mt-3 hidden"
                accept="image/*"
              />
              <label
                htmlFor="drag_photo"
                className="p-3 bg-[blue] my-2 text-white cursor-pointer"
                
              >
                Select Photo from Computer
              </label>
            </div>
            <input
              type="textfield"
              name=""
              id="caption"
              onChange={(e)=>{
                setCaption(e.target.value)
              }}
              className="bg-[grey] w-full h-[100px] text-white pt-0 pl-0"
            />
          </div>
          <button className="bg-[#0095F6] absolute top-2 right-3 p-1 text-white" onClick={handleSubmitPost}>POST</button>
        </div>
          
      </div>
    </>
  );
};

export default Header;


 