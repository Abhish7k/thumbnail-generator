import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { GithubAuthButton, GoogleAuthButton } from "./AuthButtons";
import { signIn } from "@/lib/auth";

const AuthModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="group relative px-2 py-1 sm:px-4 sm:py-1.5 flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md text-white 
        bg-blue-700 transition-all duration-300 active:scale-90"
        >
          <span className="relative z-10">Sign in</span>

          <div className="ease-&lsqb;cubic-bezier(0.19,1,0.22,1)&rsqb; absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]" />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-[80%] min-[500px]:max-w-[400px] py-10 transition-all">
        <DialogHeader className="flex flex-row items-center justify-center gap-2">
          <DialogTitle className="text-4xl font-semibold">NAILR</DialogTitle>

          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 mt-10">
          <form
            action={async () => {
              "use server";

              await signIn("google");
            }}
          >
            <GoogleAuthButton />
          </form>

          <form
            action={async () => {
              "use server";

              await signIn("github");
            }}
          >
            <GithubAuthButton />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
