import { asyncScheduler, of, range } from 'rxjs';

/**
 * Nota: Las funciones asincronicas son las ultimas en ejecutarse,
 *  pues se ejecutan fuera del hilo principal de la app.
 * Pasando por parametro a una funcion rxjs el asyncScheduler, se vuelve asincrona
 * */

console.log('Inicio');
const src$ = range(1,5, asyncScheduler)
src$.subscribe(console.log)
console.log('Fin');