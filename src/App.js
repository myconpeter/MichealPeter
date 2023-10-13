import About from "./pages/About";
import Home from "./pages/Home";
import NavBar from "./layouts/NavBar";
import Faq from "./pages/help/faq";
import HelpLayout from "./layouts/HelpLayout";
import Contact, { contactAction } from "./pages/help/Contact";
import Error404 from "./pages/help/Error404";
import Careers from "./layouts/Careers";
import Career, { careerLoader } from "./pages/careers/Career";
import CareerDetail, { careerDetailLoader } from "./pages/careers/CareerDetails";
import CareerError from "./pages/careers/CareerError";

import {
createBrowserRouter,
createRoutesFromElements,
Route,
RouterProvider
} from "react-router-dom";



const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {< NavBar />} >
        <Route index element= {<Home /> } />
       <Route path="about" element = { < About />} />
       <Route path="help" element ={<HelpLayout/>}>
        < Route path="contact" element = {<Contact />} action={contactAction} />
        < Route path="faq"  element = {<Faq />}  />
       </Route>

       <Route path="careers" element = {<Careers />} errorElement= {<CareerError />}>
        <Route 
        index 
        element = {<Career />}
        loader={careerLoader}
        />

        <Route path=":id" element = {<CareerDetail />} 
        loader={careerDetailLoader}
        
        />
       </Route>

       < Route path="*" element = {<Error404 />} />
    </Route>
  )
)

function App() {
  return (
    <div>
      <RouterProvider router={ Router} />
    </div>
  );
}

export default App;
