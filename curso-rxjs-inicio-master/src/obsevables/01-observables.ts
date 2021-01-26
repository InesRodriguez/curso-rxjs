import { Observable, Observer } from 'rxjs';

// Definicion de un observer
const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]:', value),
    error:error => console.log('error [obs]:', error),
    complete: ()=> console.log('Completado [obs]')
}
// Definicion de un observable
const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');
    
    // tes generando error
    // const a = undefined;
    // a.nombre ='Ines';
    
    subs.next('Adios');

    /* Al llamar a la funcion complete las emisiones 
    del obsevable no se notificara a sus subscriptores */

    subs.complete();

    subs.next('Hola');
    
})
obs$.subscribe(console.log);
/** Maneras de emitir flujos de observale */
// obs$.subscribe(
//     valor => console.log('Next', valor),
//     error=> console.warn('error:', error),
//     () => console.info('Completado')
// )
// Imprimir flujo de observable pasando por paramero observer
//obs$.subscribe(observer);








