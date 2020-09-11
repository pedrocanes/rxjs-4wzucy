import { of, Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';


// const source = of('World').pipe(
//   map(x => `Hello ${x}!`)
// );

// source.subscribe(x => console.log(x));

const hello = Observable.create(function(observer) {
  observer.next(42);
  observer.complete();
});

const subscribe = hello.subscribe(val => console.log(val));