"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Application = /** @class */ (function () {
    function Application(Element, Xrem) {
        this.e = Element;
        this.x = Xrem;
    }
    Application.prototype.fun = function () {
        return this.x;
    };
    Application.prototype.incrmint = function () {
        this.x = 0;
    };
    return Application;
}());
exports.default = Application;
var nu = new Application("drrg", 2001);
nu.incrmint();
console.log(nu.fun());
