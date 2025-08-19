"use client";

import {useQuery} from "@tanstack/react-query";
import {useTRPC} from "@/trpc/client";

export const AgentsView = () => {
  const trpc = useTRPC();
  const {data, isLoading, isError} = useQuery(trpc.agents.getMany.queryOptions());

  if(isLoading) {
    return <div>Loading...</div>;
  }

    if(isError) {
        return <div>Error while loading agents</div>;
    }

  return (
    <div className="flex flex-col p-4 gap-y-4">
        {JSON.stringify(data, null, 2)}
    </div>
  );
};