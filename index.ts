import { of, Observable, from } from 'rxjs'; 
import { map, timeout } from 'rxjs/operators';


// const source = of('World').pipe(
//   map(x => `Hello ${x}!`)
// );

// source.subscribe(x => console.log(x))


const array = [42,43,45];
const result = from(array);

result.subscribe(x => console.log(x));