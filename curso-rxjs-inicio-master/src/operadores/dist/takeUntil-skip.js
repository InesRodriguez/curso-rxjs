"use strict";
/*Nota:
-takeUntil recibe por parametro otro observable y se ejecuta hasta que el
observable recibido cumpla con su condicion.
-skip comienza a emitir valores a partir de un determinado valor o referencia
*/
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var boton = document.createElement('button');
boton.innerHTML = "Detener timer";
document.querySelector("body").append(boton);
var counter$ = rxjs_1.interval(1000);
var clickBtn$ = rxjs_1.fromEvent(boton, 'click').pipe(operators_1.tap(function () { return console.log("antes del skip"); }), operators_1.skip(1), operators_1.tap(function () { return console.log("despues del skip"); }));
counter$
    .pipe(operators_1.takeUntil(clickBtn$))
    .subscribe({
    next: function (event) { return console.log("next", event); },
    complete: function () { return console.log("complete"); }
});
