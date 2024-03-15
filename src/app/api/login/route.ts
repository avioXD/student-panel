import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Handle the POST request here
  // You can access the request body using req.body

  let user = {
    id: 1,
    role: "admin",
    name: "admin",
    email: "admin@gmail.com",
  };

  let token = "";
  let response = NextResponse.json({ user, token });
  response.cookies.set("token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
