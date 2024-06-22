import "./Schedule.css"; 
import { useState,useEffect } from "react";
import{motion} from "framer-motion";
import colorSharp2 from "../assets/color-sharp2.png"
import Aos from "aos";
  import "aos/dist/aos.css";
 function Schedule(){

    useEffect(()=>{
     Aos.init({duration:600});
    })
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const schedules1= [
    {
      time: "09.00-11.00",
      description: "Enregistrement",
      
    },
    {
        time: "11.00-12.00",
        description: "Cérémonie d'ouverture",
        
      },
      {
        time: "12.00-13.00",
        description: "pause cafe",
        
      },
      {
        time: "13.00-15.00",
        description: "Session d'entrainement",
        
      },
  ];
  const schedules2= [
    {
      time: "07.30-09.30",
      description: "Séance photos des équipes",
      
    },
    {
        time: "10.00-15.00",
        description: "Session officiele TCPC 2023 (le concours)",
        
      },
      {
        time: "15.00-16.00",
        description: "délibération",
        
      },
      {
        time: "16.00-17.00",
        description: "Cérémonie de cloture et prix",
        
      },
  ];
    return(
    <motion.div className="container_schedule"
    initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        data-aos = "fade-left">
            <h1 className="schedule_h1">Schedule</h1>
            <p className="schedule_p">We encourage you to actively participate in the sessions and ask questions of the speakers and panelists. It's a great opportunity to learn, share your knowledge and engage in meaningful discussions.
Don't forget to share your experiences on social media using the official event hashtag. We would love to see your photos, thoughts and highlights from the event.</p>
    <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         23/06/2023
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          24/06/2023
        </button>
        
    </div>
    <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>23/06/2023</h2>
          <hr />
          <div className="horaire">
          {
                          schedules1.map((schedule, index) => {
                            return (
                                <div className="schedulecart" key={index}>
                                <p>{schedule.time}</p>
                                <p>{schedule.description}</p>
                              </div>
                            )
                          })
                        }
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>24/06/2023</h2>
          <hr />
          <div className="horaire">
          {
                          schedules2.map((schedule, index) => {
                            return (
                                <div className="schedulecart" key={index}>
                                <p>{schedule.time}</p>
                                <p>{schedule.description}</p>
                              </div>
                            )
                          })
                        }
          </div>
        </div>
 </div>
 <img className="background-image-right" src={colorSharp2} alt="Image" />
 </motion.div>

    )
}
export default Schedule