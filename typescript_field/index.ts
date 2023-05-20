const spendingType = document.getElementById('finance') as HTMLSelectElement;
const sourceDest = document.getElementById('finance_name') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;
const form = document.querySelector('form')!;

const loggit = (): void  => {
    console.log(spendingType.value, sourceDest.value, amount.value);
};

form.addEventListener('submit', loggit);
