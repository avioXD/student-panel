import { getDataFromToken } from "@/helper/getDataFromToken";
import { DecodedToken } from "@/models/user/decoded-token";
import { NextRequest, NextResponse } from "next/server";

/**
 * Retrieves the user details from the database.
 *
 * @param request - The NextRequest object containing the request information.
 * @returns A NextResponse object with the user details.
 */
export function GET(request: NextRequest) {
  try {
    const decodedToken: DecodedToken | null = getDataFromToken(request);
    if (!decodedToken) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    return NextResponse.json(decodedToken);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
