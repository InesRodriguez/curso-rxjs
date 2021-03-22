import { interval, concat, of } from 'rxjs';
import { take } from 'rxjs/operators';

const interval$ = interval(1000);
/* concat es una funcion que puede recibe un obsevable, un iterable o array y al completarse 
cada uno empieza a emitir el siguiente*/

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    of(1),
    ['a','b','c','d']
)
.subscribe(console.log)