"use client";

import Image from "next/image";
import { getDataFromToken } from "@/helper/getDataFromToken";
import { useUserStore } from "@/store/user/userStore";
import { useEffect } from "react";
import MaxWidthWrapper from "@/components/panel/MaxWidthWrapper";
import Hero from "./_components/hero/Section";
import Category from "./_components/category/Section";

export default function Page() {
  const { setUser, user } = useUserStore();
  useEffect(() => {
    setUser({
      email: "jhon@gmail.com",
      id: "PIUAPASD",
      name: "Jhon",
      phoneNumber: "1234567890",
      phoneNumberPrefix: "+91",
    });
  }, [setUser]);
  return (
    <div>
      <MaxWidthWrapper>
        <Hero />
        <Category />
      </MaxWidthWrapper>
    </div>
  );
}
