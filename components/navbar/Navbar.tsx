import React from "react";
import Link from "next/link";
import { auth, signOut } from "@/lib/auth";
import AuthModal from "./AuthModal";
import { LogoutButton } from "./AuthButtons";

export const Navbar = async () => {
  const user = await auth();

  console.log(user);

  return (
    <div className="border-b px-[15%] h-16 flex items-center justify-between">
      <div className="">
        <Link href="/" className="font-bold text-2xl">
          NAILR
        </Link>
      </div>

      <div>
        {user ? (
          <form
            action={async () => {
              "use server";

              await signOut();
            }}
          >
            <LogoutButton />
          </form>
        ) : (
          <div className="flex items-center gap-2">
            <AuthModal />
          </div>
        )}
      </div>
    </div>
  );
};
