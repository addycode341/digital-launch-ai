import React from "react";


import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import About from "./About";
import Products from "./Products";
import Services from "./Services";
import Offers from "./Offers";
import Gallery from "./Gallery";
import Reviews from "./Reviews";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";





function MobileStoreWebsite({data}){


return(


<div

className="
relative
w-full
min-h-screen
bg-black
text-white
overflow-x-hidden
"

>


{/* NAVBAR */}

<Navbar data={data}/>





<main

className="
w-full
overflow-hidden
"

>



<section className="
w-full
overflow-hidden
">

<Hero data={data}/>

</section>






<section className="
w-full
overflow-hidden
">

<Stats/>

</section>






<section className="
w-full
overflow-hidden
">

<About data={data}/>

</section>






<section className="
w-full
overflow-hidden
">

<Products data={data}/>

</section>







<section className="
w-full
overflow-hidden
">

<Services/>

</section>







<section className="
w-full
overflow-hidden
">

<Offers/>

</section>







<section className="
w-full
overflow-hidden
">

<Gallery/>

</section>








<section className="
w-full
overflow-hidden
">

<Reviews/>

</section>







<section className="
w-full
overflow-hidden
">

<FAQ/>

</section>







<section className="
w-full
overflow-hidden
">

<Contact data={data}/>

</section>





</main>







<footer className="
w-full
overflow-hidden
">

<Footer/>

</footer>






<WhatsAppButton/>




</div>


)

}


export default MobileStoreWebsite;