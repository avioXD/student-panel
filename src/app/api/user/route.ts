import { cookies } from "next/headers";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";

/**
 *
 */
export async function GET(request: NextRequest) {
  try {
    let user: any = {};
    user = {
      id: 1,
      username: "admin",
      email: "any@gmail.com",
      role: "admin",
      isAuthorized: true,
    };
    let response = NextResponse.json(user);
    if (user) return response;
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error: "User not found" });
  }
}
