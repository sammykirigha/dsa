import { API } from "./inheritance";

type Post = {
	name: string,
	author: string
}

interface Posts {
	Post: Post
}[]

export class ForumAPI extends API {
	constructor() {
		super("http://example.com/forum")
	}

	async getPosts(): Promise<Posts>{
		let response = await this.get('/')
		return response.data as Posts
	}
}