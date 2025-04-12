"use client"

import {useState} from "react"


/* 
    We can't use metadata object in Client components, It is not allowed by NextJS,
    You will see error, If you will do so ... 
*/

// export const metadata = {
//     title : "Counter app",
// }


export default function Counter() {

    const [count, setCount] = useState(0);

    const handleClick = () =>{
        setCount(count + 1);
    }

    return(
        <>
        
        <p>Count : {count}</p>
        <button onClick={handleClick}>+ 1</button>



        </>
    )
}