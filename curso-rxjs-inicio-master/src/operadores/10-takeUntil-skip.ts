/*Nota: 
-takeUntil recibe por parametro otro observable y se ejecuta hasta que el 
observable recibido cumpla con su condicion.
-skip comienza a emitir valores a partir de un determinado valor o referencia
*/

import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = "Detener timer";
document.querySelector("body").append(boton)

const counter$ = interval(1000)

const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log("antes del skip")),
    skip(1),
    tap(() => console.log("despues del skip")),
)

counter$
    .pipe(
        takeUntil(clickBtn$)
    )
    .subscribe({
        next: event => console.log("next", event),
        complete: () => console.log("complete")
    })