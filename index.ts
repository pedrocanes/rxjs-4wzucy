import { of, Observable, fromEvent, from, observable, fromEventPattern } from 'rxjs'; 
import { map, timeout, filter, switchMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';


// const source = of('World').pipe(
//   map(x => `Hello ${x}!`)
// );

// source.subscribe(x => console.log(x))


const source = from([1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15]);
const example = source.pipe(filter(num => num % 2 != 0));


var button = document.querySelector('button');


var clicks = fromEvent(button, 'click');
var result = from(fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()));
var resultPiped = result.pipe(
  map((val) => {
    return val.filter(num => num.completed);
  })
);

clicks.pipe(
  switchMap(event => {
    return resultPiped
  })
).subscribe((val) => console.log(val));