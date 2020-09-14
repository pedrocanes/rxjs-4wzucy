import { of, Observable, fromEvent, from, observable, fromEventPattern } from 'rxjs'; 
import { map, timeout } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';


// const source = of('World').pipe(
//   map(x => `Hello ${x}!`)
// );

// source.subscribe(x => console.log(x))



const result = from(fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()));
const example = result.pipe(map((val) => {
  val.map((value) => {
    value.title = value.title.toUpperCase();
    return value;
  })
  return val;
}));
example.subscribe(x => console.log(x));