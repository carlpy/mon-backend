import db from '../db/index.js';
import { userTable } from '../db/schema.ts';

import { Request, Response } from 'express';

class UserController {
	async getUsers(req: Request, res: Response) {
		const users = await db.select().from(userTable);

		if (!users) {
			res.status(302).json({ message: 'There are no users' });
		}

		res.status(200).json(users);
	}

	async getUser(req: Request, res: Response) {
		const user = await db.select().from(userTable);

		res.status(200).json(user);
	}

	async createUser(req: Request, res: Response) {
		/* const { name, age, email } = req.body; */
		const user = await db.insert(userTable).values({
			name: 'Carlos Zambrano',
			age: 20,
			email: 'cmzambrano@gmai.com',
		});

		res.status(200).json({ message: 'User created succesfully', user });
	}

	async updateUser() {}

	async deleteUser() {}
}

export default new UserController();
