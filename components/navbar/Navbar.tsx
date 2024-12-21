import React from "react";
import Link from "next/link";
import { auth } from "@/lib/auth";
import AuthModal from "./AuthModal";
import Avatar from "./Avatar";
import { Badge } from "../ui/badge";

interface NavbarProps {
  creditsbadge: boolean;
  dashboardbtn: boolean;
}

export const Navbar: React.FC<NavbarProps> = async ({
  creditsbadge,
  dashboardbtn,
}) => {
  const user = await auth();

  return (
    <div className="border-b px-5 md:px-[10%] lg:px-[15%] h-16 flex items-center justify-between sticky top-0 transition-all">
      <div className="">
        <Link href="/" className="font-bold text-2xl">
          NAILR
        </Link>
      </div>

      <div>
        {user ? (
          <div className="flex items-center gap-4">
            {dashboardbtn && (
              <Link
                href="/dashboard"
                className="group relative px-2 py-1 sm:px-4 sm:py-1.5 flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md text-sm text-white bg-blue-700 transition-all duration-300 active:scale-90"
              >
                <span className="relative z-10">Dashboard</span>

                <div className="ease-&lsqb;cubic-bezier(0.19,1,0.22,1)&rsqb; absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]" />
              </Link>
            )}

            {creditsbadge && <Badge variant="outline">1 credit left</Badge>}

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
