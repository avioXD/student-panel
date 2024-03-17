export const auth = async () => {
  try {
    console.log("authenticating");
    const response = await fetch("http://localhost:3000/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const user = await response.json();
    console.log("user", user);
    return user;
  } catch (error: any) {
    console.log("error", error);
    return { isAuthorized: false };
  }
};
