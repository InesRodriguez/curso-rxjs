import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeAll, mergeMap, pluck, switchMap } from 'rxjs/operators';
import { GitHubUser } from '../interfaces/github-user.interface';
import { GitHubUsersResp } from '../interfaces/github-users.interface';
const body = document.querySelector('body');
const inputText = document.createElement('input');
const orderList = document.createElement('ol');
body.append(inputText, orderList);

//Helpers

const mostrarUsuarios = (usuarios: GitHubUser[]) => {
    orderList.innerHTML = '';
    console.log(usuarios);
    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver pagina';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);
        orderList.append(li);
    }
}

//Streams
const input$ = fromEvent<KeyboardEvent>(inputText, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap<string, Observable<GitHubUsersResp>>(texto =>
        ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
        )),
    pluck<any, GitHubUser[]>('items')
)//.subscribe(mostrarUsuarios);

/*Nota: El switchMap a diferencia del mergeMap se suscribe solo a la ultima peticion recibida.
Lo observables que fluyan a traves del no pueden emitir en paralelo. 
Mantiene vivo una sola emision y no varias en parelolo
como el mergeMap
*/
const url = 'https://httpbin.org/delay/1?arg=';
input$.pipe(
    pluck('target', 'value'),
    switchMap(texto => ajax.get(url + texto))
).subscribe(console.log)