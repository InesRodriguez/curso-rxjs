import { of, interval, forkJoin } from 'rxjs';
import { delay, take } from 'rxjs/operators';

const numeros$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c').pipe(delay(3500));

/**ForkJoin: Combina en una sola respuesta la ultima emision de los observables que recibe */
forkJoin(
    numeros$,
    interval$,
    letras$
).subscribe(console.log)

forkJoin({
    num: numeros$,
    inte: interval$,
    letras: letras$
}).subscribe(console.log)