import { fromEvent } from "rxjs";
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

// debounceTime: Imprimira el valor despues del intervalo de tiempo que recibe por parametro
const click$ = fromEvent(document, 'click')
click$.pipe(
    debounceTime(3000)
).subscribe(console.log)

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$.pipe(
    debounceTime(1000),
    pluck( 'target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log)