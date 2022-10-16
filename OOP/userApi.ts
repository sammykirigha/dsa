import { API } from "./inheritance";

type User = {
	name: string,
	email: string
}

interface Users {
	User:User
}[]

export class UsersAPI extends API {
	constructor() {
		super("http://example.com/users")
	}

	//Hight-level functionality (extending it)
	async getUsers(): Promise<Users>{
		let response = await this.get('/');
		return response.data as Users
	}
}