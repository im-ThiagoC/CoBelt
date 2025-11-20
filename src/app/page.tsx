"use client";

import { Button } from "@/components/ui/button";
import LogoutButton from "./logout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/clients";
import { toast } from "sonner";

const Home = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      toast.success("Workflow created successfully");
    }
  }));

  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center flex-col gap-y-6 text-red-500 font-sans dark:bg-black">
      hello from protected page
      <div>
        {JSON.stringify(data, null, 2)}
      </div>
      <Button
        disabled={create.isPending}
        onClick={() => {
          create.mutate();
        }}
      >
        Create Workflow
      </Button>
      <LogoutButton />
    </div>
  );
}

export default Home;
