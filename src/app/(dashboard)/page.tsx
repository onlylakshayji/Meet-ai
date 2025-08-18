import { auth } from "@/lib/auth";
import { HomeView } from "@/modules/home/ui/views/home-view"
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { caller } from "@/trpc/server";

const Page = async () => {
  const greeting = await caller.hello({ text: "Lakshay from server" });
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return <HomeView greeting = {greeting}/> // You can pass the greeting to HomeView if needed, e.g., <HomeView greeting={greeting} /> 
}

export default Page;