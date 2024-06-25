 import "./about.css"
 import tcpc_img from "../assets/tcpc-img.jpg";
 import tcpc_img1 from "../assets/tcpc-img1.jpg";
 import "slick-carousel/slick/slick.css"; 
 import tcpc1 from "../assets/tcpc1.jpg";
 import tcpc2 from "../assets/tcpc2.jpg";
import "slick-carousel/slick/slick-theme.css";
import React, { Component,useEffect } from "react";
import{motion} from "framer-motion";
import Slider from "react-slick";
import Aos from "aos";
import "aos/dist/aos.css";
 function About(){
   
       useEffect(()=>{
        Aos.init({duration:600});
       })
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
        return (
              <motion.div className="container_about"
              initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        data-aos = "fade-right">
          
          <h1 className="about_text"> About This event</h1>
      <p className="about_p">In a typical TCPC event, teams of students compete against each other to solve a set of programming problems within a specified time frame. The problems often require algorithmic thinking and coding proficiency to come up with efficient solutions. Participants typically use programming languages such as C++, Java, or Python. <br />

The TCPC is a regional event that provides a platform for Tunisian collegiate programmers to showcase their abilities and engage in friendly competition. It may serve as a qualifying round for other national or international programming contests.</p>
<Slider {...settings}>

    <div className="about_img" >
        <img src={tcpc_img1} alt="" />
    </div>
    <div className="about_img">
         <img src={tcpc_img} alt="" />
    </div>  
    <div className="about_img">
         <img src={tcpc1} alt="" />
    </div> 
    <div className="about_img">
         <img src={tcpc2} alt="" />
    </div>      

 </Slider>
 </motion.div>
        );
      }
    
export default About;