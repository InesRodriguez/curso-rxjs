import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

// Nota: el operador distnct solo emite valores que no jhan sido emitidos previamente
const numeros$ = of<number | string>(1, '1', 1, 2, 2, 3, 3, 4, 4, 5, 3, 1);
numeros$.pipe(distinct())
    .subscribe(console.log);

interface Personaje {
    nombre: string
}
const personajes: Personaje[] = [
{nombre: "Megaman"},
{nombre: "Aquaman"},
{nombre: "Spider man"},
{nombre: "Aquaman"},
{nombre: "Batman"},
{nombre: "Cat woman"},
{nombre: "Thor"},
{nombre: "Megaman"},
]

from (personajes)
.pipe(distinct(p => p.nombre))
.subscribe(console.log)