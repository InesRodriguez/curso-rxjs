import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

/* Nota: el operador distnct solo emite valores que no han sido emitidos previamente
A diferencia del distinct el distinctUntilChanged emitira el valor si el 
valor anterior a el es distinto al valor actual a emitir. Tanto el distinct como
 el distinctUntilChanged utlizan comparacion ====
 EL distinctUntilKeyChanged recibe la referencia de la propiedad del objeto
*/
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
        distinctUntilKeyChanged('nombre')
    )
    .subscribe(console.log)