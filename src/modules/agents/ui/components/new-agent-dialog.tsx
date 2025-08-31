import { ResponsiveDialog } from "@/components/responsive-dialog";


interface NewAgentDialogProps{
    open:boolean;
    onOpenChange: (open:boolean) => void;
}

export const NewAgentDialog = ({
    open,
    onOpenChange
}: NewAgentDialogProps) => {
    return (
        <ResponsiveDialog
            open={open}
            onOpenChange={onOpenChange}
            title="Create new agent"
            description="Create a new agent to automate tasks and workflows."
        >
            <div>
                New Agent Dialog
            </div>
        </ResponsiveDialog>
    )
}