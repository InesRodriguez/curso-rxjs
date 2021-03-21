import { interval } from "rxjs";
import { reduce, take, tap } from 'rxjs/operators';

const number = [1, 2, 3, 4, 5];

const totalReducer= (acum: number, curr: number) => acum + curr;
const total = number.reduce(totalReducer, 0);
console.log('total', total);

// Nota:  la funcion totalReduce se manda sin parentesis para que no se ejecute al momento

interval(500).pipe(
    tap(console.log),
    take(6),
    reduce(totalReducer)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log()
})

