"use client";

import {useSuspenseQuery} from "@tanstack/react-query";
import {useTRPC} from "@/trpc/client";
import { LoadingState } from "@/components/loading-states";
import { ErrorState } from "@/components/error-states";
import { DataTable } from "../components/data-table";
import { columns, Payment } from "../components/columns";

export const AgentsView = () => {
  const trpc = useTRPC();
  const {data} = useSuspenseQuery(trpc.agents.getMany.queryOptions());
  console.log("data", data);

  // Using mock data for now

  const mockData: Payment[] = [
    { id: '1', amount: 100, status: 'success', email: 'abc@gmail.com'},
    { id: '2', amount: 200, status: 'pending', email: 'bcd@gmail.com'},
    { id: '3', amount: 300, status: 'failed', email: 'efg@gmail.com'},
    { id: '4', amount: 400, status: 'processing', email: 'xyz@gmail.com'},
    { id: '5', amount: 500, status: 'success', email: 'lakshay123@gmail.com'},
    { id: '6', amount: 600, status: 'failed', email: 'dbce bejkf'},
    { id: '7', amount: 700, status: 'pending', email: ''},
    { id: '8', amount: 800, status: 'processing', email: ''},
    { id: '9', amount: 900, status: 'success', email: ''},
    { id: '10', amount: 1000, status: 'failed', email: ''},

  ]
  
  return (
    <div className="flex flex-col p-4 gap-y-4">
        <DataTable columns={columns} data={mockData}/>
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