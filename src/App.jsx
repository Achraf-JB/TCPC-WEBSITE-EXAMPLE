

import Navbar from "./components/navbar";
import AnimatedRoutes from "./components/animatedRoute";

 import {BrowserRouter} from "react-router-dom";
function App() {
  
  return (
     <>
     
  <BrowserRouter>
       <Navbar />
       <AnimatedRoutes/>
  </BrowserRouter>
      
   </>
    
  );
}

export default App;