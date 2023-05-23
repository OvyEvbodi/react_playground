// import { Finance } from './classes/finances.js';
// import { HasFormatter } from './interfaces/formatter.js';
// import { ListTemplate } from './classes/template.js';

const spendingType = document.getElementById('finance') as HTMLSelectElement;
const sourceDest = document.getElementById('finance_name') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const form = document.querySelector('form')!;
const uList = document.getElementById('finance_list') as HTMLUListElement;

//finance class
//import { HasFormatter } from "../interfaces/formatter";

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
        return `$${this.amount} for ${this.details}\nBy: ${this.client}`
    }
}


// list template class
//import { HasFormatter } from "../interfaces/formatter.js";

export class ListTemplate{
    constructor(private wrap: HTMLUListElement){}

    render(obje: HasFormatter, title: string): void {
        let listItem = document.createElement('li');
        let heading = document.createElement('h3');
        let summary = document.createElement('p');

        heading.innerText = title;
        summary.innerText = obje.format();
        listItem.append(heading);
        listItem.append(summary);

        this.wrap.append(listItem);
    }
}


// formatter interface
// interface for formatter
export interface HasFormatter {
    format(): string;
}

// end of bullshit code

const newFinance = (e: Event): void  => {
    e.preventDefault();
    console.log();
    let logg: HasFormatter = new Finance(sourceDest.value,  amount.valueAsNumber, spendingType.value, details.value);
    let displayList = new ListTemplate(uList);
    displayList.render(logg, spendingType.value);
    uList.style.display = "block";
};

form.addEventListener('submit', newFinance);
