import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  // Handle the POST request here
  // You can access the request body using req.body
  const { username, password } = await req.json();

  return await fetch("http://127.0.0.1:4000/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
