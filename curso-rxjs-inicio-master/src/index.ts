import { from, of, Subscription } from 'rxjs';
/**
 * of = crea un observable en base a una secuencia de argumentos
 * from= crea un observable en base array, promise, iterable, observable
 */

const observer = {
    next: value => console.log('Next:', value),
    complete: () => console.log("complete")
}
// funcion generadora redux
const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable  =  miGenerador();
// for (let index  of miIterable ) {
//     console.log('index', index)
    
// }
from (miIterable).subscribe(observer);

const source$ = from([1, 2, 3, 4, 5])

const source2$ = of(1, 2, 3, 4, 5)
const source3$ = of(...[1, 2, 3, 4, 5])

const source4$ = of('Ines')
const source5$ = from('Ines')

const source6$ = from(  fetch('https://api.github.com/users/klerith'));

source6$.subscribe( async resp=>{
    console.log(resp)
    const dataResp =await resp.json()
    console.log(dataResp)
});

//source5$.subscribe(observer);