import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import Rooms from "./Rooms";
import Amenities from "./Amenities";
import About from "./About";
import Gallery from "./Gallery";
import Offers from "./Offers";
import Reviews from "./Reviews";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";





function HotelWebsite({data}){


return(


<div

className="
bg-black
text-white
min-h-screen
"

>
<Navbar/>

<Hero data={data}/>


<Stats/>


<About data={data}/>


<Rooms/>


<Amenities/>


<Gallery/>


<Offers/>


<Reviews/>


<FAQ/>


<Contact data={data}/>


<Footer/>


<WhatsAppButton/>


</div>


)

}


export default HotelWebsite;