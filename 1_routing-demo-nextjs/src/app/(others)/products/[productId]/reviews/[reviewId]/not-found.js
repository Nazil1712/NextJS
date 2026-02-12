'use client';

import {usePathname} from "next/navigation";

export default function NotFound() {

    const pathname = usePathname();
    // console.log(pathname)
    // console.log(pathname.split("/"))


    const pathArray = pathname.split('/');

    const productId = pathArray[2];
    const reviewId = pathArray[4];


    return (
        <>
            <h1 className="text-red-700 text-6xl">Review Not Found for Product {productId} and for review {reviewId}</h1>
        </>
    )
}