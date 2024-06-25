import "./schedulecart.css";
import React,{useEffect,useState} from "react";
function ScheduleCard(time,description){
    return(
   <div className="schedulecart">
       <p>{time}</p>
       <p>{description}</p>
   </div>
    )
}
export default ScheduleCard;