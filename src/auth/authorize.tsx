import axios from "axios";

interface Auth {
  isAuthorized: boolean;
  id: number;
  role: string;
  name: string;
}

export const auth = async () => {
  try {
    console.log("authenticating");
    const { data } = await axios.get("http://localhost:3000/api/user");
    console.log("data", data);
    return data;
  } catch (error: any) {
    console.log("error client", error.message);
    return { isAuthorized: false, id: 0, role: "", name: "" };
  }
};
