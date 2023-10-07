import React from "react";
import Header from "../Components/Header";
import Posts from "../Components/Posts"

const Homepage = () => {
  return (
    <>
      <div className="h-screen w-full bg-[#fafafa] relative">
        <Header />
        <Posts/>
      </div>
    </>
  );
};

export default Homepage;
