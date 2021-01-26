import { of } from 'rxjs';

// Los observables pueden emitir diversons tipos de objeto....
// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of<any>([1,2], {a:1, b:2}, function(){}, true, Promise.resolve());

// Los observables pueden trabajar de manera sincrona y asincrona

console.log('Inicio del observable');

obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log("termino la secuencia")
);

console.log('FIn del observable');
