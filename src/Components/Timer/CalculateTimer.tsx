
const CalculateTimer = (second : number) : {} => {
    const hours : number = Math.floor(second / 3600);
    const minutes : number = Math.floor((second - (hours * 3600)) / 60);
    const seconds : number = Math.floor((second - (hours * 3600) - (minutes * 60)));

    const hourFormat : number | string = hours < 10 ? `0${hours}` : hours;
    const minuteFormat : number | string = minutes < 10 ? `0${minutes}` : minutes;
    const secondFormat : number | string = seconds < 10 ? `0${seconds}` : seconds;
    return {
        hourFormat,
        minuteFormat,
        secondFormat
    };
}
    

export default CalculateTimer;
