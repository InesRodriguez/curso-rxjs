import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones 
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail,inputPassword, submitBtn);
document.querySelector('body').append(form);

/*Nota tap: Operador que dispara un efecto secundario que no modifica el flujo de informacion 
que fluye a traves del observable*/

//helper

const peticionHttpLogin = (userPass)=> ajax.post('https://reqres.in/api/login?delay=1', userPass)
                                        .pipe(
                                            pluck('response','token'),
                                            catchError(err=> of('Ha ocurrido un error'))
                                        )



const submitForm$ = fromEvent<Event>(form, 'submit')
    .pipe(
        tap(ev => ev.preventDefault()),
        map(event=> ({
            email: event.target[0].value,
            password: event.target[1].value
        })),
        //mergeMap(userPass =>peticionHttpLogin(userPass)) // userPass: objeto que retorna el map
        switchMap(userPass =>peticionHttpLogin(userPass)),
        //exhaustMap(userPass =>peticionHttpLogin(userPass))
    )
    /*switchMap: cancela las suscripciones en proceso  o anteriores y solo devuelve la ultima entrante.
     exhaustMap: Ignora las otras peticiones entrantes hasta que se complete el observable actual
     mergeMap: EJecuta y recibe multiples peticiones a la vez.
    */

submitForm$.subscribe(token => { console.log(token) })