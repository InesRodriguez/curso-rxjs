import { from, fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

// range(1, 5).pipe(
//     map<number, string>(val => (val * 10).toString())
// ).subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
)
// para acceder a la propiedad baseURI dentro de target
const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
)
// con mapTO se condiciona que la salida siempre sea la ingresada, en este caso 'Tecla presionada'
const keyupMapTo$ =  keyup$.pipe(
    mapTo('Tecla presionada')
)
const event = keyupCode$.subscribe(code => console.log('map', code));
const event2 = keyupPluck$.subscribe(key => console.log('pluck--> target.baseURI', key));
const event3 = keyupMapTo$.subscribe(key => console.log('mapto', key));


const source = from([
    { name: 'Joe', age: 30 },
    { name: 'Sarah', age: 35 },
    {
        adress: {
            street: 'Avenida siempre viva'
        }
    }
])

const example = source.pipe(pluck('name'));
const example2 = source.pipe(pluck('adress','street'))
// const subscribe = example.subscribe(val => console.log(val));
// const subscribe2 = example2.subscribe(val => console.log(val))