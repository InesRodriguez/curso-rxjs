"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/* Nota: el operador distnct solo emite valores que no jhan sido emitidos previamente
A diferencia del distinct el distinctUntilChanged emitira el valor si el
valor anterior a el es distinto al valor actual a emitir. Tanto el distinct como
 el distinctUntilChanged utlizan comparacion ====
*/
var numeros$ = rxjs_1.of(1, '1', 1, 2, 2, 3, 3, 4, 4, 5, 3, 1);
numeros$.pipe(operators_1.distinctUntilChanged())
    .subscribe(console.log);
var personajes = [
    { nombre: "Megaman" },
    { nombre: "Megaman" },
    { nombre: "Aquaman" },
    { nombre: "Spider man" },
    { nombre: "Aquaman" },
    { nombre: "Batman" },
    { nombre: "Cat woman" },
    { nombre: "Thor" },
    { nombre: "Megaman" },
];
rxjs_1.from(personajes)
    .pipe(operators_1.distinctUntilChanged(function (ant, act) { return ant.nombre === act.nombre; }))
    .subscribe(console.log);
