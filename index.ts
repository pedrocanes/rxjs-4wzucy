import { of, Observable } from 'rxjs'; 
import { map, timeout } from 'rxjs/operators';


// const source = of('World').pipe(
//   map(x => `Hello ${x}!`)
// );

// source.subscribe(x => console.log(x))


const source = of(42,43,45);

const subscribe = source.subscribe(val => console.log(val));