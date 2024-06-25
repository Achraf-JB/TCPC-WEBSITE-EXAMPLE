 import "./contact.css" ;

 import React, { useRef,useEffect } from 'react';
 import img_contact from"../assets/contact-img.svg";
 import{motion} from "framer-motion";
 import emailjs from '@emailjs/browser';
 import Aos from "aos";
 import "aos/dist/aos.css";
 
   
  function Contact(){
   const form = useRef();
   useEffect(()=>{
    Aos.init({duration:600});
   })
 
   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs.sendForm('service_7vg1nqo', 'template_gq7yxtd', form.current, 'HQGpWryDGqXj4MkLQ')
       .then(
           () => {
               alert('jwk bh');
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
   };
    return(
     <motion.div className="container_contact"
     initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        data-aos = "fade-right">
        <div className="contact_img">
           <img src={img_contact} alt="" />
        </div>
        <div className="container_form">
            <form ref={form} onSubmit={sendEmail}>
                <h1> Get In Touch</h1>
             <input required type="text" name="name" id ="" placeholder="Enter name" />
             <input required type="email" name="email" id =""  placeholder="Enter email" />
             <input required type="phone" name="phone" id =""  placeholder="Enter phone" />
             <textarea  required name="message" id="" cols="30" rows="10" placeholder="Type Here..." ></textarea>
             <button type="submit"><span>Send</span></button>
             </form>
        </div>
     </motion.div>
    )
 }
 export default Contact