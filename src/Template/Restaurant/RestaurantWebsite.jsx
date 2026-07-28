import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";

import Stats from "./Stats";
import Menu from "./menu";
import Categories from "./Categories";

import About from "./About";
import ChefSection from "./ChefSection";

import Offers from "./Offers";

import Gallery from "./Gallery";

import Reviews from "./Reviews";

import FAQ from "./FAQ";

import Contact from "./Contact";

import Footer from "./Footer";

import WhatsAppButton from "./WhatsAppButton";




function RestaurantWebsite(){


return(


<div

className="
min-h-screen
bg-[#080808]
text-white
overflow-hidden
"

>



<Navbar />



<main>


<Hero />



<Stats />



<Menu />



<Categories />



<About />



<ChefSection />



<Offers />



<Gallery />



<Reviews />



<FAQ />



<Contact />



</main>




<Footer />



<WhatsAppButton />



</div>


)


}



export default RestaurantWebsite;