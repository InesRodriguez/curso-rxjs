import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numeros = of(1, 2, 3, 4, 5);
/// el operador take sirve para limitar el numero de emisiones de un oservable
numeros.pipe(
    tap(console.log),
    take(3)
).subscribe({
    next: val => console.log('Next:', val),
    complete: () => console.log('Completado')
})