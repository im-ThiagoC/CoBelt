
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import LogoutButton from "./logout";

const Home = async () => {
  await requireAuth();

  const data = await caller.getUsers();

  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center flex-col gap-y-6 text-red-500 font-sans dark:bg-black">
      hello from protected page
      <div>
        {JSON.stringify(data, null, 2)}
      </div>
      <LogoutButton />
    </div>
  );
}

export default Home;
