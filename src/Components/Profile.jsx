import React from "react";
import Header from "./Header";
import image from "../tanisha2.png";
import "../App.css"
import ProfilePhotos from "./ProfilePhotos";

const Profile = () => {
  
  return (
    <>
      <div className="h-screen w-full">
        <Header />
        <div className="h-[230px] w-[45%] m-auto mt-20">
          <div className="flex justify-between">
            <div className="h-[170px] w-[170px]">
              <img
                src={image}
                alt=""
                className="h-[100%] w-[100%] object-cover object-center rounded-[55%]"
              />
            </div>

            <div className="flex flex-col gap-3 w-[60%]">
              <div className="flex">
                <h1 className="text-[25px]">mayank_the_riser</h1>
                <button className="p-3">Edit Profile</button>
                <i className="fa-sharp fa-solid fa-gear"></i>
              </div>
              <div className="flex">
                <ul className="flex list-none justify-between w-[70%]">
                  <li>4 Posts</li>
                  <li>Followers</li>
                  <li>Following</li>
                </ul>
              </div>
              <div>
                <h1>mayank_the_riser</h1>
                <h3>
                  Always calm and enjoying the life around the competitive age
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex items-center justify-center">
          <div className="flex px-5 data_header">
            <div className="flex items-center p-3 mx-6 relative border-2 ">
              <i className="fa-solid fa-signs-post"></i>
              <h1>Posts</h1>
            </div>

            <div className="flex items-center p-3 mx-6 relative ">
              <i className="fa-regular fa-bookmark"></i>
              <h1>Saved</h1>
            </div>

            <div className="flex items-center p-3 mx-6 relative ">
              <i className="fa-light fa-user"></i>
              <h1>Tagged</h1>
            </div>
          </div>
        </div>
        <ProfilePhotos/>
      </div>
    </>
  );
};

export default Profile;
