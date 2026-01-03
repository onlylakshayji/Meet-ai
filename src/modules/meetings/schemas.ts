import {z} from 'zod';

export const meetingsInsertSchema = z.object({
    name: z.string().min(1,{message : "Name is required"}).max(200,{message : "Name is too long"}),
    agentId : z.string().min(1,{message : "Agent is required"}),
})


export const metingsUpdateSchema = meetingsInsertSchema.extend({
    id: z.string().min(1,{message : "Id is required"})
});

