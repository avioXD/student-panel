import { useUserStore } from "@/store/user/userStore";
import { useEffect } from "react";
import MaxWidthWrapper from "@/components/panel/MaxWidthWrapper";
import HeroSection from "./_components/hero/HeroSection";
import { CategorySection } from "./_components/category/CategorySection";
import { ExploreExperience } from "./_components/explore-experience/ExploreExperience";

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
        <HeroSection />
        <CategorySection />
        <ExploreExperience />
      </MaxWidthWrapper>
    </div>
  );
}
