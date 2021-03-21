import { fromEvent, interval } from 'rxjs';
import { concatMap, exhaustMap, switchMap, take } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');
/**ExhausttMap: Al entrar una nueva suscripcion siel observable en curso no se ha completado
 * Cancela la suscripcion entrante.
 * El exhaustMap es util cuando tenemos observables que emiten mucho valores muy rapido o que pueden ser
 * ignorados. Un boton que es presionado multiples veces
 * */

click$.pipe(
   //switchMap(() => interval$)
   // concatMap(()=> interval$)
   exhaustMap(()=> interval$)
).subscribe(console.log);