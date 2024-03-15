import { cookies } from "next/headers";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";

/**
 *
 */
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token");

    let user: any = {};
    user = await axios.get(
      "https://randomapi.com/api/y1lfp11q?key=LEIX-GF3O-AG7I-6J84"
    );
    user = user.data.results[0];
    let response = NextResponse.json(user);
    if (user) return response;
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error: "User not found" });
  }
}
