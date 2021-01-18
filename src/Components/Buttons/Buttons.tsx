import React from "react";
import "./Button.style.css";

type Props = {
  startBtn: any;
  waitBtn: any;
  resetBtn: any;
  stopBtn: any;
  isStartCompleted: boolean;
  isDisabled: boolean | undefined;
};

const Buttons = (props: Props) => {
  const { startBtn, waitBtn, resetBtn, stopBtn, isStartCompleted , isDisabled} = props;

  return (
    <div className="btns-container">
      {isStartCompleted ? (
        <button className="btn btn-stop" onClick={stopBtn}>
          Stop
        </button>
      ) : (
        <button className="btn btn-start" disabled={isDisabled} onClick={startBtn}>
          Start
        </button>
      )}
      <button className="btn btn-wait" onClick={waitBtn}>
        Wait
      </button>
      <button className="btn btn-reset" onClick={resetBtn}>
        Reset
      </button>
    </div>
  );
};

export default Buttons;
