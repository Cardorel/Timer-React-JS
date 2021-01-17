import React, { useState, useEffect, memo } from "react";
import { filter, throttleTime , share } from "rxjs/operators";
import "./App.css";
import Buttons from "./Components/Buttons/Buttons";
import CalculateTimer from "./Components/Timer/CalculateTimer";
import Rjx_timer from "./Components/Timer/rjx_timer";
import Timer from "./Components/Timer/Timer";

function App(): JSX.Element {
  let caller : {observable$ : any, start : Function , stop : Function} = Rjx_timer(1000);
  const [timeInSecond, setTimeInSecond] = useState<number | string>(0);
  const [timer, setTimer] = useState<{}>({});
  const [isStartCompleted, setIsStartCompleted] = useState<Boolean>(false);
  const [isDisabled , setIsDisabled] = useState<Boolean | undefined>(false);
  let [cleanInterval, setCleanInterval] = useState<any>();

  useEffect(() => {
    let timerObject = CalculateTimer(+timeInSecond);
    setTimer(timerObject);
  }, [timeInSecond]);

  //Start
  const HandleStartBtn = (): void => {
    setIsDisabled(true)
    let clean = caller.observable$.pipe(filter(Boolean) , share()).subscribe((value) => {
      if(value != null)
      {
        setIsStartCompleted(true);
        let timerObject = CalculateTimer(setTimeInSecond(value));
        setTimer(timerObject);
        caller.start();
      }
      return;
    });
    setCleanInterval(clean);

  };

  //Handle Wait Funct
  const HandleWaitBtn = (): void => {
    setIsStartCompleted(false);
    caller.observable$.pipe(
      throttleTime(300))
    .subscribe(() => {
      cleanInterval.unsubscribe()
      setIsDisabled(false)
    })

  };

  //Handle Reset
  const HandleResetBtn = (): void => {
    let timerObject: {} = CalculateTimer(0);
    cleanInterval.unsubscribe();
    setIsStartCompleted(false);
    setIsDisabled(false)
    setTimer(timerObject);
  };

  //HandleStop
  const HandleStopBtn = (): void => {
    cleanInterval.unsubscribe();
    setIsStartCompleted(false);
    setIsDisabled(false);
    
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <Timer timer={timer} />
        <Buttons
          startBtn={HandleStartBtn}
          waitBtn={HandleWaitBtn}
          resetBtn={HandleResetBtn}
          stopBtn={HandleStopBtn}
          isStartCompleted={isStartCompleted}
          isDisabled={isDisabled}
        />
      </div>
    </div>
  );
}

export default memo(App);
