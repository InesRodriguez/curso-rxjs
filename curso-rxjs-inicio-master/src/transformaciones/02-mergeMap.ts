import { fromEvent, interval, of } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';

/*Nota: El mergeMap no tiene limites de suscripciones internas y 
todas pueden estar activas simultaneamente. puede manejar multiples observables 
*/
const letras$ = of('a', 'b', 'c');
letras$
    .pipe(
        mergeMap(
            (letra) =>
                interval(1000)
                    .pipe(
                        map(i => letra + i),
                        take(3)
                    )
        ))
// .subscribe({
//     next: (e) => console.log('next', e),
//     complete: () => console.log('complete')
// })
const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

/*En este ejemplo nos suscribimos al evento mouseDown y con la funcion interval 
cuya condicion de parada viene dada por el operador takeUnitl; 
se ejecutara hasta que ocurra el evento de mouseUp
*/
mouseDown$.pipe(
    mergeMap(
        () => interval$.pipe(
            takeUntil(mouseUp$)
        )
    )
)
    .subscribe(console.log)
