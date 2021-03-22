/**Merge: Es una funcion que recibe 2 observables 
 * y el resultado sera la combinacion de ambos observables simultaneamente*/

import { combineLatest, fromEvent } from "rxjs";
import { pluck } from "rxjs/operators";

/**combineLatest: Combina  */

// import { fromEvent, merge } from "rxjs";
// import { pluck } from 'rxjs/operators';

// const keyup$ = fromEvent(document, 'keyup').pipe(pluck('type'));
// const click$ = fromEvent(document,'click').pipe(pluck('type'));

// merge(keyup$, click$).subscribe(console.log)
/*CombineLatest: combina en un observable la respuesta del observable actual
con la ultima respuesta del observable anterior*/ 

const input1 = document.createElement('input');
const input2 = document.createElement('input');
input1.placeholder = "email@gmail.com";
input2.placeholder = "*****";
input2.type = "password";

document.querySelector('body').append(input1, input2);

const getInputElement = (elem: HTMLElement) =>
    fromEvent<KeyboardEvent>(elem, 'keyup')
        .pipe(
            pluck<KeyboardEvent, string>('target', 'value'));

combineLatest(
   [ getInputElement(input1),
    getInputElement(input2)]
).subscribe(console.log)