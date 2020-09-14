import { of, Observable, from } from 'rxjs'; 
import { map, timeout } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';


// const source = of('World').pipe(
//   map(x => `Hello ${x}!`)
// );

// source.subscribe(x => console.log(x))


const result = from(fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()));
result.subscribe(x => console.log(x));