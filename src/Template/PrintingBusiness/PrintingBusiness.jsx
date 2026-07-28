import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Products from "./Products";
import Technology from "./Technology";
import WhyChooseUs from "./WhyChooseUs";
import Stats from "./Stats";
import Gallery from "./Gallery";
import Process from "./Process";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";



function PrintingBusiness(){


return(


<div

className="
bg-[#050505]
text-white
overflow-hidden
"

>


<Navbar/>


<main>


<Hero/>


<About/>


<Services/>


<Products/>


<Technology/>


<WhyChooseUs/>


<Stats/>


<Gallery/>


<Process/>


<Testimonials/>


<FAQ/>


<Contact/>


</main>



<Footer/>


<WhatsAppButton/>


</div>


)

}


export default PrintingBusiness;