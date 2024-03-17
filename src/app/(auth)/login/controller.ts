import { redirect } from "next/navigation";

export const login = async (formData: FormData) => {
  try {
    const rawFormData = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });
    const { token, username } = await response.json();
    if (token) {
      return { isAuthorized: true, token, username };
    }
  } catch (error: any) {
    console.log("error", error);
    return { isAuthorized: false };
  }
};
