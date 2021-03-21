"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
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
    .pipe(operators_1.distinctUntilKeyChanged('nombre'))
    .subscribe(console.log);
