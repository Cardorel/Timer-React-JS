import React from 'react';
import './timer.style.css'

type Props = {
    timer : {
        hourFormat: number,
        minuteFormat : number,
        secondFormat : number
    },
}

const Timer = (props : Props) : JSX.Element => {
    const {hourFormat , minuteFormat , secondFormat} = props.timer;

    return (
        <div className="timer-container">
            <span className="timer hour-timer">{hourFormat}</span>
            <span className="dot-separation">:</span>
            <span className="timer minute-timer">{minuteFormat}</span>
            <span className="dot-separation">:</span>
            <span className="timer minute-timer">{secondFormat}</span>
        </div>
    );
}

export default Timer;
