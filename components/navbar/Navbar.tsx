import React from "react";
import Link from "next/link";
import { auth } from "@/lib/auth";
import AuthModal from "./AuthModal";
import Avatar from "./Avatar";
import { Badge } from "../ui/badge";

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
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="">
              1 credit left
            </Badge>
            <Avatar user={user} />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <AuthModal />
          </div>
        )}
      </div>
    </div>
  );
};
