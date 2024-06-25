import "./join.css" ;
import React,{useState,useEffect} from "react";
import Typewriter from 'typewriter-effect';
import{motion} from "framer-motion";
import img_contact from "../assets/contact-img.svg"
import Aos from "aos";
import "aos/dist/aos.css";
 function Join(){

   useEffect(()=>{
    Aos.init({duration:600});
   })
   
    const[data ,setData] = useState({ lastname:"",firstname:"", email:"",phone:"",adresse:"",message:""});
  // const [error, setError] = useState(null)
  // const [emptyFields, setEmptyFields] = useState([])
    const handleChange =(e) =>{
      const{name ,value} = e.target;
      setData({...data,[name]:value})
    }
    const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(data);

  // Destructure the data object to get the required fields
  const { lastname, firstname, email, phone, adresse, message } = data;

  const part = { lastname, firstname, email, phone, adresse, message };

  try {
    const response = await fetch('/api/participants', {
      method: 'POST',
      body: JSON.stringify(part),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const json = await response.json();
    console.log(json);
    // Handle the response as needed
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

   
    return(
    <motion.div className="container_join"
    initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}} 
        data-aos = "fade-down">
       <div className="contact_img">
          <img src={img_contact} alt="" />
       </div>
       <div className="container_form">
           <form methode="post" action="/join" onSubmit={handleSubmit}>
           <h3 className='xxD'>
                  <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    strings:"Registration form"
                }}
                  />
            </h3>
            <div className="name">
              <input required type="text" onChange={handleChange} value={data.lastname} name="lastname" id ="" placeholder="lastname" />
            <input required type="text" onChange={handleChange} value={data.firstname} name="firstname" id ="" placeholder=" firstname" />
            
            </div>
            <input required type="email" onChange={handleChange} value={data.email}  name="email" id =""  placeholder="Enter email" />
            <input required type="phone" onChange={handleChange} value={data.phone}  name="phone" id =""  placeholder="Enter phone Number" />
            <input required type="text"  onChange={handleChange} value={data.adresse} name="adresse" id ="" placeholder="Enter adresse" />
            <textarea  required onChange={handleChange} value={data.message} name="message" id="" cols="30" rows="10" placeholder="Type Here..." ></textarea>
            <button type="submit"><span>Send</span></button>
            </form>
       </div>
    </motion.div>
   )
}
export default Join;