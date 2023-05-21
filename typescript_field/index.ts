import { Finance } from './classes/finances.js';
import { HasFormatter } from './interfaces/formatter.js';
import { ListTemplate } from './classes/template.js';

const spendingType = document.getElementById('finance') as HTMLSelectElement;
const sourceDest = document.getElementById('finance_name') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const form = document.querySelector('form')!;
const uList = document.getElementById('finance_list') as HTMLUListElement;


const newFinance = (e: Event): void  => {
    e.preventDefault();
    console.log();
    let logg: HasFormatter = new Finance(sourceDest.value,  amount.valueAsNumber, spendingType.value, details.value);
    let displayList = new ListTemplate(uList);
    displayList.render(logg, spendingType.value);
    uList.style.display = "block";
};

form.addEventListener('submit', newFinance);
