import { fromEvent, interval, merge, observable, from } from 'rxjs';
import { debounce, mapTo, filter, map, switchMap, debounceTime, buffer, delay, throttle } from 'rxjs/operators';

const redDiv = document.getElementById('red');
const blueDiv = document.getElementById('blue');

const redEvent = fromEvent(redDiv, 'mouseover');
const blueEvent = fromEvent(blueDiv, 'mouseover');

const colorObs = merge(blueEvent.pipe(mapTo("blue")), redEvent.pipe(mapTo("red"))).pipe(throttle(ev => interval(1000)));
colorObs.subscribe((val) => console.log(val));