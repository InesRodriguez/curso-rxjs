/**Merge: Es una funcion que recibe 2 observables 
 * y el resultado sera la combinacion de ambos observables simultaneamente*/

import { fromEvent, merge } from "rxjs";
import { pluck } from 'rxjs/operators';

const keyup$ = fromEvent(document, 'keyup').pipe(pluck('type'));
const click$ = fromEvent(document,'click').pipe(pluck('type'));

merge(keyup$, click$).subscribe(console.log)