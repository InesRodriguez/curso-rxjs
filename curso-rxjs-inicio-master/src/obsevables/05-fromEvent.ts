// FromEvent: Permite crear observable en base a un event target

import { fromEvent } from "rxjs";

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('next', val)
}
src1$.subscribe(event => {
    console.log('x', event.x);
    console.log('y', event.y);
});
src2$.subscribe(evento => console.log(evento.key));