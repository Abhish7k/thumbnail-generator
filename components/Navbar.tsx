import React from "react";
import { LogOutButton, SignInButton } from "./AuthButton";
import Link from "next/link";
import { auth } from "@/auth";

export const Navbar = async () => {
  const user = await auth();

  console.log(user);

  //   const user = false;

  return (
    <div className="border-b px-[15%] h-14 flex items-center justify-between">
      <div className="">
        <Link href="/">NAILR</Link>
      </div>

      <div>
        {user ? (
          <div>
            <LogOutButton />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <SignInButton />
          </div>
        )}
      </div>
    </div>
  );
};
