"use client"

import { Button } from "@/components/ui/button"
import { PlusIcon, XCircleIcon } from "lucide-react"
import { NewAgentDialog } from "./new-agent-dialog"
import { useState } from "react"
import { useAgentsFilters } from "../../hooks/use-agents-filters"
import { AgentsSearchFilter } from "./agents-searchFilter"
import { DEFAULT_PAGE } from "@/constants"


export const AgentsListHeaders = () => {
    const [filters, setFilters] = useAgentsFilters();
    const [isDialogOpen , setIsDialogOpen] = useState(false);
    const isAnyfilterModified = !!filters.search;
    
    const onclearFilters = () => {
        setFilters({
            search: "",
            page: DEFAULT_PAGE,
        });
    }

    return (
        <>
        <NewAgentDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
            <div className="py-4 px-4 md:px-8 flex flex-col gap-y-4">
                <div>
                    <div className="flex items-center justify-between">
                        <h5 className="font-medium text-xl">My agents</h5>
                        <Button onClick={() => setIsDialogOpen(true)} className="bg-green-500 hover:bg-green-900 text-white">
                            <PlusIcon/>
                            New Agent
                        </Button>
                    </div>
                </div>
                <div className="flex items-center gap-x-2 p-1">
                    <AgentsSearchFilter/>
                    {isAnyfilterModified && (
                        <Button variant="outline" size="sm" onClick={onclearFilters} className="flex items-center gap-x-2">
                            <XCircleIcon/>
                            Clear
                        </Button>
                    )}
                </div>
            </div>
        </>

    )
}