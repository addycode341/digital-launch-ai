import React from "react";


import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import About from "./About";
import Services from "./Services";
import Stylists from "./Stylists";
import Gallery from "./Gallery";
import Offers from "./Offers";
import Reviews from "./Reviews";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";






function SalonWebsite(){


return(


<div

className="
min-h-screen
bg-black
text-white
overflow-hidden
"

>


{/* NAVBAR */}

<Navbar/>





<main>



{/* HERO */}

<Hero/>




{/* BUSINESS TRUST */}

<Stats/>




{/* ABOUT BRAND */}

<About/>




{/* SERVICES */}

<Services/>




{/* TEAM */}

<Stylists/>




{/* GALLERY */}

<Gallery/>




{/* OFFERS */}

<Offers/>




{/* CUSTOMER TRUST */}

<Reviews/>




{/* QUESTIONS */}

<FAQ/>




{/* BOOKING */}

<Contact/>




</main>





{/* FOOTER */}

<Footer/>




{/* WHATSAPP FLOAT */}

<WhatsAppButton/>





</div>


)

}



export default SalonWebsite;