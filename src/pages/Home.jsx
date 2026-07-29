import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Templates from "../components/Templates";
import Pricing from "../components/Pricing";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppWidget from "../components/WhatsAppWidget";


function Home(){


const navigate = useNavigate();



const scrollTemplates = ()=>{

const section =
document.getElementById("templates");


if(section){

section.scrollIntoView({

behavior:"smooth"

});

}

};



return(


<div

className="
min-h-screen
w-full
bg-slate-950
text-white
overflow-x-hidden
"

>


<Navbar />



<main

className="
w-full
"

>


<Hero

onStart={()=>navigate("/builder")}

onDemo={scrollTemplates}

/>



<Features />



<Services />



<HowItWorks />



<Templates />



<Pricing />



<WhyChooseUs />



<Contact />



</main>





<Footer />



<WhatsAppWidget />



</div>


)

}


export default Home;