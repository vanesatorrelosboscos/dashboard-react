function TimerBtn({time, onClick}){
    return(
        <button className="preset-btn" data-time={time*60} onClick={() => onClick(time)}>{time}m</button>
    )
}

export default TimerBtn