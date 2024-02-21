"use client";

import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useUserStore } from "@/store/user/userStore";

const Navbar = () => {
  const { user } = useUserStore();
  return (
    <div>
      <MaxWidthWrapper>
        <div className="h-[80px] flex items-center justify-between shadow-md px-10">
          <div>Logo</div>
          <div>
            {user ? (
              <div>
                <div>{user.name}</div>
                <div>{user.email}</div>
              </div>
            ) : (
              <div>Login</div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
      ;
    </div>
  );
};

export default Navbar;
