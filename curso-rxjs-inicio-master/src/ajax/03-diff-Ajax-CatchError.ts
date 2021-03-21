import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


const url = 'https://httpbinxxx.org/delay/1';
const url2 = 'https://api.github.com/users?per_page=5';

const manejaError = (resp: AjaxError) => {
    console.warn('error:', resp.message);
    return of({
        ok: false,
        usuarios: []
    });

}

const obs$ = ajax.getJSON(url).pipe(
    catchError(manejaError)
);
const obs2$ = ajax(url).pipe(
    catchError(manejaError)
);

obs$.subscribe(data => console.log('getJSON:', data)) // getJSON devuelve directamente el objeto response de la peticion
obs2$.subscribe(data => console.log('ajax', data))
