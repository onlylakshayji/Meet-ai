import { createTRPCRouter,baseProcedure } from "@/trpc/init";
import { agents } from "@/db/schema";
import { db } from "@/db";

export const agentsRouter = createTRPCRouter({
    getMany: baseProcedure.query(async () => {
        const data = await db.select().from(agents);
        await new Promise(resolve => setTimeout(resolve, 6000)); // Simulate a delay
        //throw new Error("Simulated error for testing purposes");
        return data;
    })
})