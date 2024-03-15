import { cookies } from "next/headers";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
export const dynamic = "force-dynamic";

/**
 *
 */
export async function GET() {
  try {
    const cookieStore = cookies();
    let user: any = cookieStore.get("user");
    user = await axios.get(
      "https://randomapi.com/api/y1lfp11q?key=LEIX-GF3O-AG7I-6J84"
    );
    console.log("user", user.data);
    user = user.data.results[0];
    if (user) return Response.json(user);
  } catch (error) {
    console.log("error", error);
    return Response.json({ error: "User not found" });
  }
}
