import { fromEvent, interval, merge, observable, from } from 'rxjs';
import { debounce, mapTo, filter, map, switchMap, debounceTime, buffer, delay } from 'rxjs/operators';



var checkBoxes = document.querySelectorAll('input');
const example = fromEvent(checkBoxes, 'change');

const result = from(fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()));

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

example.pipe(
  delay(1000),
  filter(e => e.target.checked),
  switchMap(event => {
    return result.pipe(
      map((val) => {
        return val.filter(num => num.userId == event.target.id);
      })
    )
  })
).subscribe((val) => {
      console.log(val.map((comment) => comment.title))
    })