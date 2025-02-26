import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

const userTable = pgTable('users', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 255 }).notNull(),
	age: integer().notNull(),
	email: varchar({ length: 250 }).notNull().unique(),
});

export { userTable };
