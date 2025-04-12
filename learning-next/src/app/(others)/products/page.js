import Link from "next/link";

export default function ProductList() {
  return (
    <>
      <h1>Product List</h1>
      <Link href={`/products/1`}>
        <p className="border rounded-2xl border-blue-600 inline-block hover:bg-blue-600 hover:text-white p-3 hover:cursor-pointer m-5">
          Product 1
        </p>
      </Link>
      <Link href={`/products/2`}>
        <p className="border rounded-2xl border-blue-600 inline-block hover:bg-blue-600 hover:text-white p-3 hover:cursor-pointer m-5">
          Product 2
        </p>
      </Link>
      <Link href={`/products/3`} replace>
        <p className="border rounded-2xl border-blue-600 inline-block hover:bg-blue-600 hover:text-white p-3 hover:cursor-pointer m-5">
          Product 3
        </p>
      </Link>
      <Link href={`/products/4`}>
        <p className="border rounded-2xl border-blue-600 inline-block hover:bg-blue-600 hover:text-white p-3 hover:cursor-pointer m-5">
          Product 4
        </p>
      </Link>
    </>
  );
}
