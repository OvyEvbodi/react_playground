"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTemplate = void 0;
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
