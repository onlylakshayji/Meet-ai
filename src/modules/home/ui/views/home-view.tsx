"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

 export const HomeView = ({greeting}) => {
  const trpc = useTRPC();
  //const {data} = useQuery(trpc.hello.queryOptions({text: "Lakshay !"}));

  return (
   <div className="flex flex-col p-4 gap-y-4">
      {/* <p className="text-lg">{data?.greeting}</p> */}
      <p className="text-lg">{greeting.greeting}</p>
   </div>
  );
}
