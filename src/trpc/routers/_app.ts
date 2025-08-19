import { createTRPCRouter } from '../init';
import { agentsRouter } from '@/modules/agents/server/procedure';
export const appRouter = createTRPCRouter({
  agents: agentsRouter,
  // Add other routers here as needed
  // e.g., users: usersRouter, posts: postsRouter, etc.
  // hello: helloRouter,
  // ... other routers
});
// export type definition of API
export type AppRouter = typeof appRouter;