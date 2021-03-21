import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

range(10, 20).pipe(
    // filter(num => num % 2 == 0)
    filter((val, i) => {
        console.log('index', i)
        return val % 2 == 1
    })
)
interface personajes {
    tipo: string;
    nombre: string;
}
//.subscribe(console.log)
const personajes: personajes[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Spiderman'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
]
const personajes$ = from(personajes)
personajes$.pipe(
    filter(val => val.tipo === 'heroe')
).subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(
        map(event => event.code), //keyboardEvent. string
        filter(key => key === 'Enter')
    )
keyup$.subscribe(console.log)
