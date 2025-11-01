"use client";

import { useTRPC } from "@/trpc/clients";
import { useSuspenseQuery } from "@tanstack/react-query";

const ClientPage = () => {
  const trpc = useTRPC();
  const { data: users } = useSuspenseQuery(trpc.getUsers.queryOptions());

  return (
    <div>
      {JSON.stringify({ message: "Hello from Client Component!" })}
    </div>
  );
}

export default ClientPage;
