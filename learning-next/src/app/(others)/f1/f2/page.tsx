import Link from "next/link";
import React from "react";

const F2 = () => {
  return (
    <div>
      <h1 className="text-6xl">F2 Page</h1>
      <p><Link href={"/f1/"}>Go to F1</Link></p>
      <p><Link href={"/f4/"}>Go to F4</Link></p>
    </div>
  );
};

export default F2;
