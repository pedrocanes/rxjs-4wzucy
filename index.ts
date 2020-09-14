import { of, Observable, observable, Subject, combineLatest } from 'rxjs'; 
import { map, timeout } from 'rxjs/operators';

const subject = new Subject();
const subject2 = new Subject();
 
subject.subscribe({
  next: (v) => console.log(v)
});

subject2.subscribe({
  next: (v) => console.log(v)
});
 
subject.next(1);

subject2.next('A');

subject.next(2);

subject2.next('B');
subject2.next('C');
subject2.next('D');

subject.next(3);
subject.next(4);
subject.next(5);

subject.complete();
subject2.complete();

const combinedTimers = combineLatest(subject, subject2);
combinedTimers.subscribe(value => console.log(value));