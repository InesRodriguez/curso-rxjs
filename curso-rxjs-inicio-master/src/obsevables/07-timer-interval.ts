import { interval, timer } from 'rxjs';

const observer = {
    next: value => console.log(value),
    complete: () => console.log("complete")
}
const interval$ = interval (1000)

// Emite un valor despues de dos segundos. En este caso 0
//const timer$ = timer(2000)

// Inicia en dos segundos  y empieza a emitir valores cada segundo
// const timer$ = timer(2000, 1000)

// suma 5 segundos a la fecha actual. Util cuando se necesita emitir valor a determinada hora
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);


const timer$ = timer(hoyEn5)

console.log('Inicio')
//interval$.subscribe(observer)
timer$.subscribe(observer)
console.log('Fin')

