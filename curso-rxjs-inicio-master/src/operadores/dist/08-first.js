"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var click$ = rxjs_1.fromEvent(document, 'click');
// el operador first se completa cunado encuentra el primer valor que cumple con la condicion especificada
click$
    .pipe(operators_1.tap(console.log), 
// map(event => ({
//     clientY: event.clientY,
//     clientX: event.clientX
// }))
// destructuracion de objetos
operators_1.map(function (_a) {
    var clientY = _a.clientY, clientX = _a.clientX;
    return ({
        clientY: clientY, clientX: clientX
    });
}), operators_1.first(function (event) { return event.clientY > 150; }))
    .subscribe({
    next: function (val) { return console.log('next', val); },
    complete: function () { return console.log('complete'); }
});
