"use client";

import { useState } from "react";


export default function Counter() {
    const [count, setCount] = useState(0);
  

    if(count === 5 ) {
        throw new Error("Count can not be 5 !")
    }

    const handleClick = () => {
      setCount(count + 1);
    };
  
    return (
      <>
        <div className="m-5">
          <h1 className="text-3xl">Count : {count}</h1>
          <button onClick={handleClick} className="border mt-5 rounded-2xl p-3 bg-blue-400 text-white cursor-pointer">
            + Increment
          </button>
        </div>
      </>
    );
  }