import React, { useEffect, useState } from "react";
import {db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
const ProfilePhotos = () => {
  const [info, setInfo] = useState([]);
  const [render, setRender] = useState(false)
  useEffect(()=>{
    if(render){
      return
    }else{
      const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "Posts"));
        querySnapshot.forEach((doc) => {
          const arr = new Set(setInfo((arr) => [...arr, doc.data()]));
          console.log(info);
          setRender(true)
        });
      };
      getData()
    }
    
    
  },[])
  return (
    <>
      <div className=" w-[70%] flex items-center justify-center mt-5 m-auto">
        <div className="grid grid-cols-3 gap-x-5 gap-y-3 ">
          
            {(!info) ? (
                <p>No Photos yet</p>
            ) : (
                info.map((curElem, id) => {
                    return (
                      <div className="h-[300px] w-[250px] cursor-pointer hover:bg-[black] bg-blend-multiply" key={id}>
                        <img
                          src={curElem.image}
                          alt="Posts"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    );
                  })
            )
        }
            
          
        </div>
      </div>
    </>
  );
};

export default ProfilePhotos;
