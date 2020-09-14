import { of, Observable } from 'rxjs'; 
import { map, timeout } from 'rxjs/operators';


// const source = of('World').pipe(
//   map(x => `Hello ${x}!`)
// );

// source.subscribe(x => console.log(x))


//emits values of any type
const source = of(42,43,45);
//output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }
const subscribe = source.subscribe(val => console.log(val));