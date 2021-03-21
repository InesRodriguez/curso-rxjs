import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


const url = 'https://httpbin.org/delay/1';

// ajax.post(url, {
//     id: 1,
//     nombre: 'Ines'
// }
//     , {
//         'mi-token': 'ABC123'
//     }).subscribe(console.log)
// Forma mas elegante y generica para realizar peticiones
ajax({
    url: url,
    method: 'POST',
    headers: {
    'mi-token': 'ABC123'
    },
    body:{
        id:1,
        nombre:'Ines'
    }
}).subscribe(console.log)


