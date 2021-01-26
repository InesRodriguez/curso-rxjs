/*---Inicializar con npm start.Recuerda copiar y pegar aca 
ejercicios que se quiere reemplazar----- */

import { Observable, Observer, onErrorResumeNext, Subscriber, Subject } from 'rxjs';

// Definicion de un observer
const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
}
const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(
        () => subs.next(Math.random()), 1000
    );
    
    // Este return se ejecuta cuando se llama al unsubscribe del intervalo$
    return () => {
        clearInterval(intervalID)
        console.log("Intervalo destruido");
    } 
})

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd));

/**Subject:
 * 1- Casteo multiple (Soporta multiple subscripciones)
 * 2- Tambien es un observer
 * 3 - permite manejar next, error y complete
*/
const Subject$ = new Subject();
const subscription= intervalo$.subscribe(Subject$);

// const subs1 = Subject$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = Subject$.subscribe(rnd => console.log('subs2', rnd));

const subs1 = Subject$.subscribe(observer);
const subs2 = Subject$.subscribe(observer);

setTimeout(() => {
    Subject$.next(10);
    Subject$.complete();
    subscription.unsubscribe();
}, 3500);