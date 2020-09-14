import { of, Observable, fromEvent, from, observable } from 'rxjs'; 
import { map, timeout } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';


// const source = of('World').pipe(
//   map(x => `Hello ${x}!`)
// );

// source.subscribe(x => console.log(x))

var clicks = fromEvent(document, 'click');
clicks.subscribe(x => console.log(x));