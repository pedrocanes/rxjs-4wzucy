import { of, Observable, fromEvent, from, observable, fromEventPattern } from 'rxjs'; 
import { map, timeout } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';


// const source = of('World').pipe(
//   map(x => `Hello ${x}!`)
// );

// source.subscribe(x => console.log(x))



var button = document.querySelector('button');
const clicks = fromEvent(button, 'click');
clicks.subscribe(x => console.log(x));