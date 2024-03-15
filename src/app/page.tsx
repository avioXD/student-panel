import { redirect } from "next/navigation";
import LandingPage from "./(public)/landing/page";

export default function Page() {
  return redirect("/landing");
}
