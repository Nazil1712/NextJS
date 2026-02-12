import Link from "next/link";
import React from "react";

const F1 = () => {
  return (
    <div>
      <h1 className="text-6xl">F1 Page</h1>
      <Link href={"/f1/f2"}>Go to F2</Link>
      <p></p>
      <Link href={"/f3"}>Go to F3</Link>
    </div>
  );
};

export default F1;
