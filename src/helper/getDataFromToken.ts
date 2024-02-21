import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken";
import { DecodedToken } from "@/models/user/decoded-token";

/**
 * Retrieves data from a token.
 *
 * @param request - The NextResponse object containing the token.
 * @returns The data extracted from the token, or null if an error occurs.
 */
export const getDataFromToken = (request: NextRequest): DecodedToken | null => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: DecodedToken | unknown = jwt.verify(
      token,
      process.env.JWT_SECRET!
    );
    return decodedToken as DecodedToken;
  } catch (error) {
    console.error(error);
    return null;
  }
};
