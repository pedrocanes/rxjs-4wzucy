import { of, Observable, fromEvent, from, observable, fromEventPattern } from 'rxjs'; 
import { map, timeout, filter } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';


// const source = of('World').pipe(
//   map(x => `Hello ${x}!`)
// );

// source.subscribe(x => console.log(x))


const source = from([1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15]);
const example = source.pipe(filter(num => num % 2 != 0));
const subscribe = example.subscribe(val => console.log(val));