import React from "react";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import { Menu } from "./_components/menu/Menu";
import { Profile } from "./_components/profile/Profile";
import Image from "@/components/ui/image";

const Navbar = () => {
  return (
    <div className="shadow-md sticky top-0 z-10 bg-white">
      <MaxWidthWrapper>
        <div className="h-[80px] flex items-center justify-between  ">
          <div>
            <Image
              fill={true}
              className="h-8 md:h-10"
              src="/assets/logo/logo.svg"
              alt="logo"
            />
          </div>
          <div className="hidden items-center gap-x-8  md:flex">
            <Menu />
            <Profile />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
