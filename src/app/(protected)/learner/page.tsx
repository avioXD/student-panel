import { auth } from "@/auth/authorize";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await auth();
  if (user.id) {
    return redirect("/learner/" + user.id);
  } else redirect("/login");
};

export default Page;
