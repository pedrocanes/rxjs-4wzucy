import { of, Observable, observable, Subject, combineLatest, fromEvent, merge } from 'rxjs'; 
import { map, timeout, mapTo } from 'rxjs/operators';

var doneBtn = document.getElementById('done');
var cancelBtn = document.getElementById('cancel');


const doneClick = fromEvent(doneBtn, 'click');
const cancelClick = fromEvent(cancelBtn, 'click');

const example = merge(
  doneClick.pipe(mapTo('done!')),
  cancelClick.pipe(mapTo('cancel!'))
);
const subscribe = example.subscribe(val => console.log(val));
