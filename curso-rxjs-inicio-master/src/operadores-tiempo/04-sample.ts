import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

/**Sample: muestra el ultimo valor emitido por el observable principal
 * antes de que se complete el observable que recibe por parametro
 */
interval$.pipe( sample(click$))
.subscribe(console.log)


