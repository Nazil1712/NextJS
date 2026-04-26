import { NextResponse } from "next/server";

type UserV2 = {
  id: number;
  name: string;
  email: string;

  // New fields (added in v2)
  age: number;
  role: string;
  isActive: boolean;
};

export async function GET() {
  const users: UserV2[] = [
    {
      id: 1,
      name: "Nazil",
      email: "nazil@example.com",
      age: 22,
      role: "developer",
      isActive: true,
    },
    {
      id: 2,
      name: "John",
      email: "john@example.com",
      age: 20,
      role: "designer",
      isActive: false,
    },
  ];

  return NextResponse.json({
    version: "v2",
    data: users,
  });
}