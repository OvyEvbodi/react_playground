import { HasFormatter } from "../interfaces/formatter";

export class Finance  implements HasFormatter{
    readonly client: string;
    readonly amount: number;
    readonly finance: string;
    readonly details: string;

    constructor(client: string, amount: number, finance: string, details: string) {
        this.client = client;
        this.amount = amount;
        this.finance = finance;
        this.details = details;
    }

    format() {
        return `${this.amount} for ${this.details}\nBy: ${this.client}`
    }
}
