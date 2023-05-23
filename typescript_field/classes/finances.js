"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance = void 0;
var Finance = /** @class */ (function () {
    function Finance(client, amount, finance, details) {
        this.client = client;
        this.amount = amount;
        this.finance = finance;
        this.details = details;
    }
    Finance.prototype.format = function () {
        return "".concat(this.amount, " for ").concat(this.details, "\nBy: ").concat(this.client);
    };
    return Finance;
}());
exports.Finance = Finance;
