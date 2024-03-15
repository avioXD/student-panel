import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const authMiddleware = async (callBack: string) => {
  try {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${sessionStorage.getItem("token")}`;

    axios
      .get("/auth/verify")
      .then((res) => {
        if (res.status === 200) {
          return callBack;
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          return "login";
        }
      });
  } catch (error) {
    return "login";
  }
};

export default authMiddleware;
