"use client";

import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const GoogleAuthButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button
          disabled
          className="border rounded-md py-2 mt-4 flex items-center justify-center gap-4 px-5 md:w-64 bg-foreground/5 transition-all"
        >
          <Loader2 className="size-4 animate-spin" />
          Please wait
        </button>
      ) : (
        <button className="border rounded-md py-2 mt-4 flex items-center justify-center gap-4 px-5 md:w-64 hover:bg-foreground/5 transition-all duration-300 active:scale-90">
          <FcGoogle className="size-5" />
          Sign in with Google
        </button>
      )}
    </>
  );
};

export const GithubAuthButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button
          disabled
          className="border rounded-md py-2 mt-4 flex items-center justify-center gap-4 px-5 md:w-64 bg-foreground/5 transition-all"
        >
          <Loader2 className="size-4 animate-spin" />
          Please wait
        </button>
      ) : (
        <button className="border rounded-md py-2 mt-4 flex items-center justify-center gap-4 px-5 md:w-64 hover:bg-foreground/5 transition-all duration-300 active:scale-90">
          <FaGithub className="size-5" />
          Sign in with Github
        </button>
      )}
    </>
  );
};

export const LogoutButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button variant="outline" className="w-full text-base" disabled>
          <Loader2 className="size-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button variant="outline" className="transition-all">
          Sign out
        </Button>
      )}
    </>
  );
};
