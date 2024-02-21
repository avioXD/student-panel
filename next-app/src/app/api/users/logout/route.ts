import { NextResponse } from "next/server";

export function GET() {
  try {
    const response = NextResponse.json(
      { message: "Logged out successful", success: true },
      { status: 200 }
    );
    response.cookies.set("token", "", {
      maxAge: 0,
      httpOnly: true,
      expires: new Date(0),
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
