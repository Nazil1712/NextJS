"use client"


export default function ErrorBoundary({error}) {

    console.log(error.message)
    return(
        <>
        <h1 className="text-5xl text-red-600 m-5">!!!! {error.message} !!!!</h1>
        </>
    )
}