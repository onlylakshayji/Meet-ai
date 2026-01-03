import { inferRouterOutputs } from "@trpc/server";

import type {AppRouter} from "@/trpc/routers/_app";

export type MeetingGetOne = inferRouterOutputs<AppRouter>['meetings']['getOne'];


// export type AgentGetMany = inferRouterOutputs<AppRouter>['agents']['getMany'][number];

// export type AgentCreate = inferRouterOutputs<AppRouter>['agents']['create']; // Added myself , its extra and not used yet