import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

/* Nota: el operador distnct solo emite valores que no han sido emitidos previamente
A diferencia del distinct el distinctUntilChanged emitira el valor si el 
valor anterior a el es distinto al valor actual a emitir. Tanto el distinct como
 el distinctUntilChanged utlizan comparacion ====
*/
const numeros$ = of<number | string>(1, '1', 1, 2, 2, 3, 3, 4, 4, 5, 3, 1);
numeros$.pipe(
    distinctUntilChanged()
)
    .subscribe(console.log);

interface Personaje {
    nombre: string
}
const personajes: Personaje[] = [
    { nombre: "Megaman" },
    { nombre: "Megaman" },
    { nombre: "Aquaman" },
    { nombre: "Spider man" },
    { nombre: "Aquaman" },
    { nombre: "Batman" },
    { nombre: "Cat woman" },
    { nombre: "Thor" },
    { nombre: "Megaman" },
]

from(personajes)
    .pipe(
        distinctUntilChanged((ant,act)=> ant.nombre === act.nombre)
    )
    .subscribe(console.log)