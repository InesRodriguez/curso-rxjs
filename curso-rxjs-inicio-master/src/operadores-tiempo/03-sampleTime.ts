import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

/** SampleTime : imprime el ultimo valor luego de transcurrido el
 *intervalo de tiempo que recibe por parametro
 * */
const click$ = fromEvent<MouseEvent>(document, 'click')
click$.pipe(
    sampleTime(2000),
    map(({ x, y }) => ({ x, y }))
).subscribe(console.log)

