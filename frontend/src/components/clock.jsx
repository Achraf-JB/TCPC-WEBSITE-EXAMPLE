import'./clock.css'; 
import colorSharp from "../assets/color-sharp.png"
import React,{Fragment} from "react";
import{motion} from "framer-motion";
const Clock = ({timerDays,timerHours,timerMinutes,timerSecondes})=>
 {
    return(
       <Fragment>
        <section className='timer-container'>
        <section className='timer'>
            <div className="top">
                <p>Deadline Registration <br /> 03/06/2023
                </p>
            </div>
       <div className="clock">
            <section>
                <p>{timerDays}</p>
                <small>Days</small>
            </section>
            <span>:</span>
            <section>
                <p>{timerHours}</p>
                <small>Hours</small>
            </section>
            <span>:</span>
            <section>
                <p>{timerMinutes}</p>
                <small>Minutes</small>
            </section>
            <span>:</span>
            <section>
                <p>{timerSecondes}</p>
                <small>Seconds</small>
            </section>

        </div>
        </section>
        <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
       </Fragment>
        )
};
Clock.defaultProps={
    timerDays:'00',
    timerHours:'00',
    timerMinutes:'00',
    timersSecondes:'00'

}
export default Clock;