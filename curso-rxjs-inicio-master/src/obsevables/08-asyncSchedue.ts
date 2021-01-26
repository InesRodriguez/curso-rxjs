import { asyncScheduler } from "rxjs"

//-----------Simil timer js con rxjs------------------
const saludar = () => console.log('Hola Ines')
const saludar2 = nombre => console.log(`Hola ${nombre}`)

// Ejecuta la funcion saludar luego de dos segundos
//asyncScheduler.schedule(saludar,2000);

// Se pasa en el lugar del estado el nombre a la funcion como parametro
asyncScheduler.schedule(saludar2, 2000, 'Ines');

//-----------Simil interval js con rxjs----------------
const sub = asyncScheduler.schedule(function (state) {
    console.log('state', state)
    this.schedule(state + 1, 1000)

}, 3000, 0)

// setTimeout(() => {
//         sub.unsubscribe()
// }, 6000);

asyncScheduler.schedule(() => sub.unsubscribe(), 6000);