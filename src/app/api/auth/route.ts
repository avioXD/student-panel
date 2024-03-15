import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // Handle the POST request here
  // You can access the request body using req.body

  let user = {
    id: 1,
    role: "admin",
    name: "admin",
    email: "admin@gmail.com",
  };
  // Example: Get the data from the request body
  // Example: Perform some logic with the data
  const cookieStore = cookies();
  cookieStore.set("user", JSON.stringify(user));
  console.log("User is set in the cookie");
  return new Response("User is set in the cookie");
}
