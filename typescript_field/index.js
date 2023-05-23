"use strict";
// import { Finance } from './classes/finances.js';
// import { HasFormatter } from './interfaces/formatter.js';
// import { ListTemplate } from './classes/template.js';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTemplate = exports.Finance = void 0;
var spendingType = document.getElementById('finance');
var sourceDest = document.getElementById('finance_name');
var amount = document.getElementById('amount');
var details = document.getElementById('details');
var form = document.querySelector('form');
var uList = document.getElementById('finance_list');
//finance class
//import { HasFormatter } from "../interfaces/formatter";
var Finance = /** @class */ (function () {
    function Finance(client, amount, finance, details) {
        this.client = client;
        this.amount = amount;
        this.finance = finance;
        this.details = details;
    }
    Finance.prototype.format = function () {
        return "$".concat(this.amount, " for ").concat(this.details, "\nBy: ").concat(this.client);
    };
    return Finance;
}());
exports.Finance = Finance;
// list template class
//import { HasFormatter } from "../interfaces/formatter.js";
var ListTemplate = /** @class */ (function () {
    function ListTemplate(wrap) {
        this.wrap = wrap;
    }
    ListTemplate.prototype.render = function (obje, title) {
        var listItem = document.createElement('li');
        var heading = document.createElement('h3');
        var summary = document.createElement('p');
        heading.innerText = title;
        summary.innerText = obje.format();
        listItem.append(heading);
        listItem.append(summary);
        this.wrap.append(listItem);
    };
    return ListTemplate;
}());
exports.ListTemplate = ListTemplate;
// end of bullshit code
var newFinance = function (e) {
    e.preventDefault();
    console.log();
    var logg = new Finance(sourceDest.value, amount.valueAsNumber, spendingType.value, details.value);
    var displayList = new ListTemplate(uList);
    displayList.render(logg, spendingType.value);
    uList.style.display = "block";
};
form.addEventListener('submit', newFinance);
