import {z} from 'zod';

export const agentsInsertSchema = z.object({
    name: z.string().min(1,{message : "Name is required"}).max(200,{message : "Name is too long"}),
    instructions : z.string().min(1,{message : "Instructions are required"}).max(800,{message : "Instrcutions are too long"}),
})