import React, { useState, useEffect } from "react";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

const Posts = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [info, setInfo] = useState([]);
  const handleLikes = (e) => {
    e.preventDefault();
    setLikeCount(likeCount + 1);
  };

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users", ));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      const arr = new Set(setInfo((arr) => [...arr, doc.data()]));
      console.log(arr);

      //   const uniqueIds = [];

      //   const unique = info.filter((element) => {
      //     const isDuplicate = uniqueIds.includes(element.id);

      //     if (isDuplicate) {
      //       uniqueIds.push(element.id);

      //       return true;
      //     }

      //     return false;
      //   });
      //   setInfo(unique)
      //   console.log(info)
    });
  };

  return (
    <>
    <div className="mt-20">
    {info.map((curElem, id) => (
        <div
          className="text-[15px] h-[600px] w-[460px] bg-[white] ml-24 mb-4 border-gray-300 border-[1px] rounded-[5px]"
          key={id}
        >
          <div className="flex justify-between px-4 bg-white py-4">
            <div className="rounded-[50%]">
              <img src={""} alt="" />
              <h1>mayank_the_riser</h1>
            </div>
            <button>
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
          <div className="h-[60%] w-full bg-center border[1px] border-black ">
            <img
              src={curElem.image}
              alt=""
              className="h-[100%] w-full object-cover bg-center"
            />
          </div>
          <div className="w-[95%] ml-2">
          <ul className="list-none text-[25px]">
          
            <button onClick={handleLikes}>
              <i className="fa-regular fa-heart  mr-2  " fill="#000" ></i>
            </button>
            <button>
              <i className="fa-regular fa-comment mx-2"></i>
            </button>
            <button>
              <i className="fa-regular fa-paper-plane mx-2"></i>
            </button>
          </ul>
          <div>
            <span>{likeCount} likes</span>
            <h2>mayank_the_riser : {curElem.caption} </h2>
          </div>
          
          <div className="py-1">
            <h2>view all comments</h2>
            <h3>1 DAY AGO</h3> 
          </div>
       
          
          </div>
          <div className="py-2 px-2 mt-2 w-[100%] flex justify-between border-[1px]">
            <div className="w-full flex items-center">
            <i className="fa-regular fa-face-smile mr-2 "></i>
            <input type="text" placeholder="Add a comment..." className="pl-3 w-full focus:border-none outline-none"/>
            </div>
            <button className=" text-[#0095F6] px-2">POST</button>

            
          </div>
        </div>
      ))}

    </div>

    </>
  );
};

export default Posts;
