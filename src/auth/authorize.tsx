export const auth = async () => {
  try {
    console.log("authenticating");
    const response = await fetch("http://localhost:3000/api/user");
    const user = await response.json();
    console.log("user", user);
    if (user && user.id) {
      return {
        isAuthorized: true,
        ...user,
      };
    }
  } catch (error: any) {
    console.log("error", error);
    return { isAuthorized: false };
  }
};
