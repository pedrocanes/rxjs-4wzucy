import { fromEvent, interval, merge, observable, from, combineLatest } from 'rxjs';
import { debounce, mapTo, filter, map, switchMap, debounceTime, buffer, delay, mergeMap, startWith } from 'rxjs/operators';



var checkBox1 = document.getElementById('1');
var checkBox2 = document.getElementById('2');
var checkBox3 = document.getElementById('3');
var checkBox4 = document.getElementById('4');
var checkBox5 = document.getElementById('5');

const event1 = fromEvent(checkBox1, 'change').pipe(startWith('none'));
const event2 = fromEvent(checkBox2, 'change').pipe(startWith('none'));
const event3 = fromEvent(checkBox3, 'change').pipe(startWith('none'));
const event4 = fromEvent(checkBox4, 'change').pipe(startWith('none'));
const event5 = fromEvent(checkBox5, 'change').pipe(startWith('none'));


const combinedEvents = combineLatest(event1, event2, event3, event4, event5);

const result = from(fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()));

combinedEvents.pipe(debounceTime(1000)).subscribe((val) => val.map((event) => {
  if(event != 'none'){
    result.pipe(
      map((comm) => {
        return comm.filter(otherThing => otherThing.userId == event.target.id && event.target.checked);
      })
      ).subscribe((finalThing) => {
        if(finalThing.length > 0) console.log(finalThing.map((comment) => comment.title))
      })
  }
}));

//combinedEvents.subscribe(val => console.log(val));


// example.pipe(
//   debounceTime(1000),
//   filter(e => e.target.checked))
//   .subscribe(event => {
//     result.pipe(
//       map((val) => {
//         return val.filter(num => num.userId == event.target.id);
//       })
//     ).subscribe((val) => {
//       console.log(val.map((comment) => comment.title))
//     })
//   });

// example.pipe(
//   debounceTime(1000),
//   filter(e => e.target.checked),
//   mergeMap(event => {
//     return result.pipe(
//       map((val) => {
//         return val.filter(num => num.userId == event.target.id);
//       })
//     )
//   })
// ).subscribe((val) => {
//       console.log(val.map((comment) => comment.title))
//     })

