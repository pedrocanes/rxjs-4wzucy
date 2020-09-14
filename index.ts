import { of, Observable } from 'rxjs'; 
import { map, timeout } from 'rxjs/operators';


// const source = of('World').pipe(
//   map(x => `Hello ${x}!`)
// );

// source.subscribe(x => console.log(x))


const hello = Observable.create(function(observer) {
  observer.next(42);
  observer.next(43);
  observer.next(44);
  observer.complete();
});

const subscribe = hello
  .pipe(timeout(10))
  .subscribe(val => console.log(val));