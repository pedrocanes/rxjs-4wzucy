import { of, Observable, fromEvent, from, observable, fromEventPattern, range } from 'rxjs'; 
import { map, timeout, filter } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';


// const source = of('World').pipe(
//   map(x => `Hello ${x}!`)
// );

// source.subscribe(x => console.log(x))


const obs3 = range(1,20);
const obs2 = range(1,40);
const obs1 = range(1,60);

const result = obs1.pipe(
  filter(val => val % 2 ===0)
);

const result2 = obs2.pipe(
  filter(val => val % 3 ===0)
);

const result3 = obs3.pipe(
  filter(val => val % 5 ===0)
);


result.subscribe((val) => console.log(val, 'obs1'));
result2.subscribe((val) => console.log(val, 'obs2'));
result3.subscribe((val) => console.log(val, 'obs3'));