"use client";

import {useSuspenseQuery} from "@tanstack/react-query";
import {useTRPC} from "@/trpc/client";
import { LoadingState } from "@/components/loading-states";
import { ErrorState } from "@/components/error-states";
import { DataTable } from "../components/data-table";
import { columns } from "../components/columns";

export const AgentsView = () => {
  const trpc = useTRPC();
  const {data} = useSuspenseQuery(trpc.agents.getMany.queryOptions());
  
  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
        <DataTable columns={columns} data={data}/>
    </div>
  );
};


export const AgentsViewLoading = () => {
  return (
    <LoadingState title="Loading agents" description="This may take a few seconds ... "/>
  );
}

export const AgentsViewError = () => {
  return (
    <ErrorState title="Error while loading agents" description="Something went wrong"/>
  );
}