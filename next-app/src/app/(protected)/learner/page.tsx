"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.get("api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/learner/course">Course</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
