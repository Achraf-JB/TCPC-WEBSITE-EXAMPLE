 import React from 'react';
 import Typewriter from 'typewriter-effect';
 import img1 from "../assets/header-img.svg";
 import {BsArrowRightCircle} from "react-icons/bs";
 import{motion} from "framer-motion";
 import './home.css';
import { NavLink } from 'react-router-dom';
 function Home (){
    return(
        <motion.div 
        className="container"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
           <div className="part1">
           <h1 className='xxD'>
                  <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    strings:"TCPC'2K23"
                }}
                  />
            </h1>
            <h2 className='H2'> 24&25 June</h2>
            <h3>
                The 2023 Tunisian Collegiate <br />
                Programming Context 
            </h3>
             <NavLink to='/join'> Register Now <BsArrowRightCircle size={30} /></NavLink>
            </div> 
           <div className="part2">
              <img src={img1}alt="HEADER" />
           </div>
            
        </motion.div>
    )
}
export default Home;