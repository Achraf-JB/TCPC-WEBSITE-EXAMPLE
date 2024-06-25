import React from "react";
import Contact from "../components/contact";
import Schedule from "../components/schedule";
import HomePage from "../components/homePage";
import Join from "../components/join";
import{AnimatePresence} from "framer-motion";
import { Routes, Route, useLocation} from "react-router-dom";
 function AnimatedRoutes(){
    const location = useLocation(); 
    return(
       <AnimatePresence>
     <Routes location = {location} key={location.pathname}>
         <Route path="/" element={ <HomePage/> } />
         <Route path="/schedule" element={ <Schedule/> } />
         <Route path="/contact" element={ <Contact/>} />
         <Route path="/join" element={ <Join/> } />
         <Route path="*" element={<div>404 not found</div>} />
       </Routes>
       </AnimatePresence>
    )
} 
export default AnimatedRoutes; 