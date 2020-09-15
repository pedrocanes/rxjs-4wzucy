import { fromEvent, interval, merge, observable, from } from 'rxjs';
import { debounce, mapTo, filter, map, switchMap, debounceTime, buffer, delay } from 'rxjs/operators';


var checkBox1 = document.getElementById("1");
const clicks = fromEvent(checkBox1, 'input');

var checkBox2 = document.getElementById("2");
var checkBox3 = document.getElementById("3");
var checkBox4 = document.getElementById("4");
var checkBox5 = document.getElementById("5");

const clicks2 = fromEvent(checkBox2, 'input');
const clicks3 = fromEvent(checkBox3, 'input');
const clicks4 = fromEvent(checkBox4, 'input');
const clicks5 = fromEvent(checkBox5, 'input');

const example = merge(
  clicks,
  clicks2,
  clicks3,
  clicks4,
  clicks5
);

const result = from(fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()));

example.pipe(
  delay(1000),
  filter(e => e.target.checked)).subscribe(event => {
    result.pipe(
      map((val) => {
        return val.filter(num => num.userId == event.target.id);
      })
    ).subscribe((val) => console.log(val))
  });