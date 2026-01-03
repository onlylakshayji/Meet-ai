import { ResponsiveDialog } from "@/components/responsive-dialog";
import { MeetingForm } from "./meeting-form";
import { useRouter } from "next/navigation";

interface NewMeetingtDialogProps{
    open:boolean;
    onOpenChange: (open:boolean) => void;
}

export const NewMeetingDialog = ({
    open,
    onOpenChange
}: NewMeetingtDialogProps) => {

    const router = useRouter();

    return (
        <ResponsiveDialog
            open={open}
            onOpenChange={onOpenChange}
            title="Create new meeting"
            description="Create a new meeting."
        >
           <MeetingForm
            onSuccess={(id) => {
                onOpenChange(false);
                router.push(`/meetings/${id}`);
            }}
            onCancel={() => {
                onOpenChange(false);
            }}
           />
        </ResponsiveDialog>
    )
}