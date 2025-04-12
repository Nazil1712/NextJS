import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to Home</h1>
      <Link href={"/about"}>
        <p className="border m-5 rounded-2xl border-blue-600 inline-block hover:bg-blue-600 hover:text-white p-3 hover:cursor-pointer">
          About Us
        </p>
      </Link>
      <br />
      <Link href="/profile">
        <p className="border m-5 rounded-2xl border-blue-600 inline-block hover:bg-blue-600 hover:text-white p-3 hover:cursor-pointer">
          Profile Page
        </p>
      </Link>

      <br />
      <Link href={"/products"}>
        <p className="border m-5 rounded-2xl border-blue-600 inline-block hover:bg-blue-600 hover:text-white p-3 hover:cursor-pointer">
          View Products
        </p>
      </Link>
    </>
  );
}
