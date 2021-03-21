import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeAll, pluck } from 'rxjs/operators';
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

/*Nota: Al usar mergeAll si la respuesta que recibimos al suscribirnos a un observable es 
otro observable no es necesario subscribirse nuevamente a este, pues se transforma
 como si fuera un obsevable 
de primernivel
*/

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GitHubUsersResp>>(texto =>
        ajax.getJSON(
            `https://api.github.com/search/users?q=${texto}`
        )),
    mergeAll<GitHubUsersResp>(),
    pluck<any, GitHubUser[]>('items')
).subscribe(mostrarUsuarios);