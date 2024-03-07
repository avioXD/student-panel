import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Menu } from "./_components/menu/Menu";
import { Profile } from "./_components/profile/Profile";

const Navbar = () => {
  return (
    <div className="shadow-md bg-white">
      <MaxWidthWrapper>
        <div className="h-[80px] flex items-center justify-between  ">
          <div>
            <img
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
