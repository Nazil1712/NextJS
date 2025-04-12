import Link from "next/link";

export default function Auth() {
  return (
    <>
      <h1 className="text-5xl m-7">Authantication</h1>
      <Link href={"/register"}>
        {" "}
        <span className="ml-7 mr-7">Register</span>
      </Link>
      <Link href={"/login"}>
        {" "}
        <span className="ml-7 mr-7">Login</span>
      </Link>
      <Link href={"/forgot-password"}>
        {" "}
        <span className="ml-7 mr-7">Forgot Password</span>
      </Link>
    </>
  );
}
