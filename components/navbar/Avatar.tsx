/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { AvatarFallback, AvatarImage, AvatarShadcn } from "../ui/avatar";
import Avvvatars from "avvvatars-react";
import { IoLogOutOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { signOut } from "next-auth/react";

interface AvatarProps {
  user?: any;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <AvatarShadcn>
            <AvatarImage src={user.user.image} />

            <AvatarFallback>
              <Avvvatars value={user.user.email} />
            </AvatarFallback>
          </AvatarShadcn>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="mr-10">
          <DropdownMenuLabel className="pl-2 pr-4">
            <div className="flex flex-col gap-1">
              <p className="font-medium leading-none capitalize">
                {user.user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground max-w-40 truncate">
                {user.user.email}
              </p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <div className="flex items-center gap-x-2 rounded-sm w-full cursor-pointer">
              <MdAttachMoney className="text-xl mr-1" />1 credit left
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <div className="flex items-center gap-x-2 rounded-sm w-full cursor-pointer">
              <FiShoppingCart className="text-xl mr-1" />
              Buy more credits
            </div>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="cursor-pointer">
            <div onClick={() => signOut()} className="flex items-center gap-2">
              <IoLogOutOutline className="text-xl mr-1" />
              Log out
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Avatar;
