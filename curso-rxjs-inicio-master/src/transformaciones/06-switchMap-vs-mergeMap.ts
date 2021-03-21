import { fromEvent, interval } from "rxjs";
import { mergeMap, switchMap } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);
/* el switchMap solo matiene solo una suscripcion activa(la ultima) 
mientras el mergeMap matiene todas las que fluyan a traves del 
*/
click$.pipe(
   // mergeMap(()=> interval$),
   switchMap(()=> interval$)
).subscribe( console.log)