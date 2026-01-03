import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient, trpc } from "@/trpc/server";
import { 
    MeetingsView, 
    MeetingsViewError, 
    MeetingsViewLoading 
} from "@/modules/meetings/ui/views/meetings-view";
import { MeetingsListHeaders } from "@/modules/meetings/ui/components/meetings-list-headers";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";


const Page = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if(!session?.user){
        redirect('/sign-in')
    }
    
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(
        trpc.meetings.getMany.queryOptions({})
    );

    return(
        <>
        <MeetingsListHeaders/>
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<MeetingsViewLoading/>}>
                <ErrorBoundary fallback= {<MeetingsViewError/>}>
                    <MeetingsView/>
                </ErrorBoundary>
            </Suspense>
        </HydrationBoundary>
        </>
        
    )
}


export default Page;