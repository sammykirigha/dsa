import { API } from "./inheritance";

type Payment = {
	amount: string;
	date: string;
	sender: string;
	receiver: string
}

interface Payments {
	Payment: Payment
}[]

export class BillingAPI extends API {
	constructor() {
		super("http://example.com/billing");
	}

	async getPayments(): Promise<Payments>{
		let respose = await this.get("/")
		return respose.data as Payments;
	}
}