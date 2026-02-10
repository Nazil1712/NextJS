"use client";

export default function ErrorBoundary({ error, reset }) {
  return (
    <>
      <div className="m-5">
        <h1 className="text-5xl text-red-600">!!!! {error.message} !!!!</h1>
        <button
          className="bg-amber-500 p-2 rounded-2xl text-white mt-5 hover:bg-amber-400 cursor-pointer"
          onClick={()=>reset()}
        >
          Try Again
        </button>
      </div>
    </>
  );
}
