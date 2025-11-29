"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/clients";
import LogoutButton from "./logout";

const Home = () => {
  const trpc = useTRPC();

  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const testAi = useMutation(
    trpc.testAi.mutationOptions({
      onSuccess: () => {
        toast.success("AI executed successfully");
      },
      onError: (error) => {
        toast.error(`Error executing AI: ${error.message}`);
      },
    }),
  );

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        toast.success("Workflow created successfully");
      },
    }),
  );

  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center flex-col gap-y-6 text-red-500 font-sans dark:bg-black">
      hello from protected page
      <div>{JSON.stringify(data, null, 2)}</div>
      <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>
        Test AI
      </Button>
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
};

export default Home;
