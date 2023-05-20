var spendingType = document.getElementById('finance');
var sourceDest = document.getElementById('finance_name');
var amount = document.getElementById('amount');
var form = document.querySelector('form');
var loggit = function () {
    console.log(spendingType.value, sourceDest.value, amount.value);
};
form.addEventListener('submit', loggit);
