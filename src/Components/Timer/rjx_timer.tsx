import { Subject, interval } from "rxjs";
import { repeatWhen, share, startWith, takeUntil } from "rxjs/operators";

let Rjx_timer = (
  delay
): { observable$: any; start: Function; stop: Function } => {
  let observable$;
  let _stop = new Subject<void>();
  let _start = new Subject<void>();

  observable$ = interval(delay)
    .pipe(
      startWith(void 0),
      takeUntil(_stop),
      repeatWhen(() => _start)
    )
    .pipe(share());

  return {
    observable$,
    start: () => {
      _start.next();
    },
    stop: () => {
      _stop.next();
    },
  };
};

export default Rjx_timer;
