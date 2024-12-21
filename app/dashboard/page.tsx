import { Button } from "@/components/ui/button";
import { getUserData } from "@/lib/actions";
import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";

const DashboardPage = async () => {
  const user = await auth();

  const userData = await getUserData(user?.user?.id as string);

  return (
    <div className="px-10 md:mx-[10%] lg:mx-[15%] h-[70vh] flex items-center justify-center">
      <div className="flex flex-col gap-10">
        {userData?.credits === 0 ? (
          <div className="flex flex-col px-10 md:mt-10">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl transition-all">
              Hi there
            </h1>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl transition-all">
              Want to create a thumbnail?
            </h1>
            <div className="mt-2 flex flex-col gap-3">
              <p className="leading-7 text-muted-foreground">
                Buy more credits to continue generating thumbnails.
              </p>
              <Link href="/dashboard/pricing">
                <Button>Buy credits</Button>
              </Link>
            </div>
            <div className="mt-8">{/* <Recent /> */}</div>
          </div>
        ) : (
          <div>Thumbnail Creator</div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
