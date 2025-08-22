"use client";

import {useSuspenseQuery} from "@tanstack/react-query";
import {useTRPC} from "@/trpc/client";
import { LoadingState } from "@/components/loading-states";
import { ErrorState } from "@/components/error-states";
import { ResponsiveDialog } from "@/components/responsive-dialog";
import { Button } from "@/components/ui/button";

export const AgentsView = () => {
  const trpc = useTRPC();
  const {data} = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return (
    <div className="flex flex-col p-4 gap-y-4">
      <ResponsiveDialog
      title = "Agent Details"
      description = "More information about the agent"
      open = {true}
      onOpenChange = {() => {}}
      >
        <Button className="bg-amber-200">Open Dialog</Button>
      </ResponsiveDialog>
        {JSON.stringify(data, null, 2)}
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