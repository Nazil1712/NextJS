"use client";

import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function OrderProduct() {
    const router = useRouter();

    const handleClick = () =>{
        console.log("Your has been placed successfully")
        router.push('/order-success')
        // router.replace('/order-success')  // This will remove the current page from history (from which you hit the button)
        // router.back()
        // router.refresh()
    }   


    useEffect(()=>{
        console.log("I am rendered")
    })

    return (
        <>
        <h1 className="text-5xl text-pink-500">Order Product</h1>
        <button className="rounded border border-red-600 bg-gray-100 hover:bg-blue-500 hover:text-white m-7 cursor-pointer" onClick={handleClick}>Place Order</button>
        
        </>
    )
}