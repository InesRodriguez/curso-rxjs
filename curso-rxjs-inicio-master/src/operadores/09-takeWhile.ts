import { fromEvent } from "rxjs";
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');
// takewhile recibe valores mientras se cumpla la condicon
click$
    .pipe(
        map(({ x, y }) => ({ x, y })),
        takeWhile(({ y }) => y <= 150, true)
    )
    .subscribe({
        next: event => console.log('next', event),
        complete: () => console.log("completado")
    })