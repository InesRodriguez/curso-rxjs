import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
const texto = document.createElement('div');
texto.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Mauris mollis sem nisi, eget cursus nisi dictum eleifend.<br><br> Phasellus interdum augue sed libero semper, 
vitae vestibulum risus aliquam. In viverra vulputate consectetur.Donec suscipit augue sit amet fringilla malesuada. 
Proin feugiat mauris tincidunt maximus ullamcorper. <br><br> Aliquam et laoreet urna. Nulla massa ipsum,
porttitor non auctor faucibus, scelerisque in velit. Donec rhoncus justo sed diam consectetur,
non venenatis arcu lobortis. Maecenas varius maximus erat, id tincidunt augue iaculis eget.
Ut vitae facilisis sapien, varius suscipit ex. <br><br> Praesent mattis et orci a feugiat. 
Donec facilisis porttitor ipsum, sit amet iaculis nulla porta nec. 
Aenean vestibulum sagittis nulla, sed finibus nibh lacinia vel.
Cras at justo est. Phasellus dapibus iaculis velit vel viverra.
 Morbi diam odio, maximus eu pulvinar eu, tempor in turpis. 
 Etiam eget tortor urna. Donec eget tellus quis nulla cursus dictum. `;

const body = document.querySelector('body');
body.append(texto);
const progressBar = document.createElement('div');

progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion para crear calculo de progres bar
const calcularPorcentajeScrol = (event) => {
    console.log(event)
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement
    console.log(scrollTop, scrollHeight, clientHeight)
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const scroll$ = fromEvent(document, 'scroll')

const progress = scroll$.pipe(
    //map(event => calcularPorcentajeScrol(event))
    map( calcularPorcentajeScrol),
    tap (console.log)
)
progress.subscribe(percent => {
    progressBar.style.width = `${percent}%`;
})
