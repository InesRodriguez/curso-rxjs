import { fromEvent, asyncScheduler } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged, throttleTime } from 'rxjs/operators';

/** throttleTime: Imprimira el valor primero y despues aguarda antes de imprimir otro valor 
 * segun el intervalo recibido por parametro
 * */
const click$ = fromEvent(document, 'click')
click$.pipe(
    throttleTime(3000)
).subscribe(console.log)

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$.pipe(
    throttleTime(400, asyncScheduler, {
        leading: true, // primer elemento
        trailing: true // ultimo elemento
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
)
    .subscribe(console.log)