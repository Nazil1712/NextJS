import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

type UserV1 = {
  id: number;
  name: string;
  email: string;
};

export async function GET() {
  redirect('/api/v2/users')
  const users: UserV1[] = [
    {
      id: 1,
      name: "Nazil",
      email: "nazil@example.com",
    },
    {
      id: 2,
      name: "John",
      email: "john@example.com",
    },
  ];

  return NextResponse.json({
    version: "v1",
    data: users,
  });
}