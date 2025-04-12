"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
      setCount(count + 1);
    };
  
    return (
      <>
        <div className="p-7">
          <span>Count : {count}</span>
          <button onClick={handleClick} className="border ml-4">
            + 1 Increment
          </button>
        </div>
      </>
    );
  }