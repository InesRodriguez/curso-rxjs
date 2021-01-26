/*---Inicializar con npm start.Recuerda copiar y pegar aca 
ejercicios que se quiere reemplazar----- */

import { Observable, Observer, onErrorResumeNext } from 'rxjs';

// Definicion de un observer
const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(subscriber => {
    // crear contador 1,2,3,4
    let count = 0;
    const intervalo = setInterval(() => {
        count++;
        subscriber.next(count);
        console.log(count);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500)

    return () => {
        clearInterval(intervalo)
        console.log("Intervalo destruido");
    }
});

//intervalo$.subscribe(observer);
// const subs1 = intervalo$.subscribe(num => console.log('Num:', num));
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

//encadenar observables
subs1.add(subs2)
    .add(subs3);
// cuando se ejectura el unsuscribe del primero se ejecutan a la vez 2 y 3
setTimeout(() => {
    subs1.unsubscribe();
    console.log("Completado timeout");
    // const subs1 = intervalo$.subscribe(num => console.log('Num:', num));
}, 3000);