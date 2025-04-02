import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>Welcome to Home</h1>
      <Link href={"/about"}>About Us</Link>
      <br/>
      <Link href="/profile">Profile Page</Link>
    </>
  );
}
