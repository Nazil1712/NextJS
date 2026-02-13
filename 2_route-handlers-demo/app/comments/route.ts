import { NextRequest } from "next/server";
import { comments } from "./data";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredCommments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;

    console.log(query)
  return Response.json(filteredCommments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
