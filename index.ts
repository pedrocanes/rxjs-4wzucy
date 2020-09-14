import { of, Observable, fromEvent, from, observable, fromEventPattern } from 'rxjs'; 
import { map, timeout } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';


// const source = of('World').pipe(
//   map(x => `Hello ${x}!`)
// );

// source.subscribe(x => console.log(x))


function addClickHandler(handler) {
  document.addEventListener('click', handler);
}

function removeClickHandler(handler) {
  document.removeEventListener('click', handler);
}

var clicks = fromEventPattern(
  addClickHandler,
  removeClickHandler
);
clicks.subscribe(x => console.log(x));