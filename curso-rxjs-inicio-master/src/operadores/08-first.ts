import { fromEvent } from "rxjs";
import { first, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');
// el operador first se completa cunado encuentra el primer valor que cumple con la condicion especificada
click$

    .pipe(
        tap<MouseEvent>(console.log),
        // map(event => ({
        //     clientY: event.clientY,
        //     clientX: event.clientX
        // }))
        // destructuracion de objetos
        map(({ clientY, clientX }) => ({
            clientY, clientX
        })),
        first(event => event.clientY > 150)
    )
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete')
    })