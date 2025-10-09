import { useTRPC } from "@/trpc/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {z} from "zod";

import { AgentGetOne } from "../../types";
import { useForm } from "react-hook-form";
import { agentsInsertSchema } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import { GeneratedAvatar } from "@/components/generated-avatar";
import { Textarea } from "@/components/ui/textarea";
import{
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { init } from "next/dist/compiled/webpack/webpack";
import { toast } from "sonner";

interface AgentFormProps{
    onSuccess ?:() => void;
    onCancel?: () => void;
    initialValues?: AgentGetOne;
}

export const AgentForm = ({
    onSuccess,
    onCancel,
    initialValues
}: AgentFormProps) => {
    const trpc = useTRPC();
    const queryClient = useQueryClient();

    const createAgent = useMutation(
        trpc.agents.create.mutationOptions({
            onSuccess: async() => {
                await queryClient.invalidateQueries(trpc.agents.getMany.queryOptions({}));

                if(initialValues?.id){
                    await queryClient.invalidateQueries(
                        trpc.agents.getOne.queryOptions({id: initialValues.id})
                    );
                }
                onSuccess?.();
            },
            onError: (error) => {
                toast.error(error.message);
            }
        })
    )

    const form = useForm<z.infer<typeof agentsInsertSchema>>({
        resolver: zodResolver(agentsInsertSchema),
        defaultValues: {
            name: initialValues?.name ?? "",
            instructions: initialValues?.instructions ??""
        },
    });

    const isEdit = !!initialValues?.id;
    const isPending = createAgent.isPending;

    const onSubmit = (values: z.infer<typeof agentsInsertSchema>) => {
        if(isEdit){
            console.log("Todo: Edit agent");
        }else{
            createAgent.mutate(values);
        };
    }


    return(
       <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <GeneratedAvatar
                seed = {form.watch("name")}
                variant="botttsNeutral"
                className="border size-16"
            />

            <FormField
                name="name"
                control={form.control}
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Agent Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Agent Name" {...field} disabled={isPending}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                name="instructions"
                control={form.control}
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Instructions</FormLabel>
                        <FormControl>
                            <Textarea placeholder = "Enter instructions for the Ai agents" {...field} disabled={isPending}/> 
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <div className="flex justify-between gap-x-2">
                {onCancel && (
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={onCancel}
                        disabled={isPending}
                    >
                        Cancel
                    </Button>
                )}
                <Button
                    type="submit"
                    //className="bg-green-500 hover:bg-green-900 text-white"
                    disabled={isPending}
                >
                    {isEdit ? "Update Agent" : "Create Agent"}
                </Button>
            </div>
        </form>
       </Form>
    )
}