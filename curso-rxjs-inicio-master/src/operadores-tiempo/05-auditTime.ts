import { fromEvent, interval } from 'rxjs';
import { auditTime, sample, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

/**auditTIme: Emite el ultimo valor del observable luego de transcurrido el intervalo de tiempo
 *  que recibe por parametro
 */
click$.pipe(
    map(({ x }) => x),
    tap(val => console.log('Tap', val)),
    auditTime(5000)
).subscribe(console.log)


