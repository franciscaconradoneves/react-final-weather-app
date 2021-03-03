import React from "react";

export default function FormattedDate(props){
    const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]

    let weekDay = days[props.date.getDay()];
    let hours = props.date.getHours();
    if(hours <10){
        hours = `0${hours}`
    }
    let minutes = props.date.getMinutes();
    if(minutes <10){
        minutes = `0${minutes}`
    }
    
    return (<span>
        {weekDay}, {hours}:{minutes}
    </span>);
}