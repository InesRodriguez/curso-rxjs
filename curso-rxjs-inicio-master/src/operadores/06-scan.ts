import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

/* Nota: El scan es similar al reduce con la diferencia que los valores
 entrantes se emiten en ese instante*/

const numeros = [1, 2, 3, 4, 5]
const totalacumulador = (acc: number, crr: number) => acc + crr;
from(numeros).pipe(
    reduce(totalacumulador, 0)
).subscribe(console.log)
// scan
from(numeros).pipe(
    scan(totalacumulador, 0)
).subscribe(console.log)

interface Usuario {
    id?: string,
    autentitcado?: boolean,
    token?: string,
    edad?: Number
}
const user: Usuario[] = [
    { id: 'ine', autentitcado: false, token: null },
    { id: 'ine', autentitcado: true, token: 'ABC' },
    { id: 'ine', autentitcado: true, token: 'ABC123' },
]

const state$ = from(user).pipe(
    scan<Usuario>((acc, cur) => {
        return { ...acc, ...cur }
    }, { edad: 33 })

);
const id$ = state$.pipe(
    map(state => state.id)
)
id$.subscribe(console.log)