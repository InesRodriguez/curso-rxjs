"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var click$ = rxjs_1.fromEvent(document, 'click');
// takewhile recibe valores mientras se cumpla la condicon
click$
    .pipe(operators_1.map(function (_a) {
    var x = _a.x, y = _a.y;
    return ({ x: x, y: y });
}), operators_1.takeWhile(function (_a) {
    var y = _a.y;
    return y <= 150;
}, true))
    .subscribe({
    next: function (event) { return console.log('next', event); },
    complete: function () { return console.log("completado"); }
});
