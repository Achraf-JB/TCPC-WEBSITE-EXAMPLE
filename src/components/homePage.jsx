 import Home from "./home"
 import About from "./about"
 import Clock from "./clock"
 import Schedule from "./schedule";
 import Contact from "./contact";
 import{motion} from "framer-motion";
 import React,{useEffect,useState} from "react";

 import "./homePage.css";
 function HomePage(){
    const [timerDays , settimerDays] = useState();
  const [timerHours , settimerHours] = useState();
  const [timerMinutes, settimerMinutes] = useState();
  const [timerSecondes , settimerSecondes] = useState();
  let interval;
  const startTimer=()=>{
   const countDownDate = new Date("june 24 , 2023").getTime();
   interval= setInterval(()=>{
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(distance<0){
      clearInterval(interval.current);
    }
    else{
      settimerDays(days);
      settimerHours(hours);
      settimerMinutes(minutes);
      settimerSecondes(seconds);

    }
  }
   );
  };

  useEffect(()=>{
    startTimer();
  });
 
    return(
        <motion.div className="container_homePage"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>
        <Home className="Home" />
         <Clock className="clock" timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSecondes={timerSecondes}/>
         <About className="About" />
         <Schedule className="Schedule" />
         <Contact className="Contact" />
     </motion.div>  
    
    )
}
export default  HomePage