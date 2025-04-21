"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import '../globals.css'
import { useState } from "react";

export default function AuthLayout({ children }) {
  const navlinks = [
    { name: "Register", href: "/register" },
    { name: "Forgot Password", href: "/forgot-password" },
    { name: "Login", href: "/login" },
  ];

  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <html>
      <body>
        <div>
          <input type="text" value={input} className="border-black border-2" onChange={(e)=>{
            setInput(e.target.value)
          }}/>
        </div>
        <div>
          {navlinks.map((v) => {
            const isActive = v.href == pathname;

            console.log(isActive)

            return (
              <div key={v.name}>
                <Link href={v.href}>
                  <span className={`${isActive ? 'text-blue-400':''} mb-14`}>{v.name}</span>
                </Link>
              </div>
            );
          })}
        </div>
        {children}
      </body>
    </html>
  );
}
