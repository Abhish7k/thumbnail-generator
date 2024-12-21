"use client";

import React from "react";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";

export const SignInButton = () => {
  return (
    <Button onClick={() => signIn("google")} className="">
      Sign In
    </Button>
  );
};

export const LogOutButton = () => {
  return <Button onClick={() => signOut()}>Log Out</Button>;
};
