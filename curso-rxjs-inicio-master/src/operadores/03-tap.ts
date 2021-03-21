import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1, 10);
// El tap es util para debuggerar
numeros$.pipe(
    tap(x => console.log('antes', x)),
    map(y => y * 10),
    tap({
        next: valor => console.log('despues', valor),
        complete: () => console.log('Se termino todo')
    })
).subscribe(val => console.log('subs', val))