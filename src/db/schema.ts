import { integer , pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar("name", { length: 255 }).notNull(),
    age: integer("age").notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    isActive: integer("is_active").notNull().default(1), // 1 for true, 0 for false 
    // Not mentioned isActive in the original schema, but added for completeness  
})


