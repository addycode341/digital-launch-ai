import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import WhyChooseUs from "./WhyChooseUs";
import Categories from "./Categories";
import Gallery from "./Gallery";
import CustomerReviews from "./CustomerReviews";
import CommonQuestions from "./CommonQuestions";
import Contact from "./Contact";
import Footer from "./Footer";
import "./bakery.css";

import WhatsAppButton from "./WhatsAppButton";


function BakeryWebsite(){

return(

<div className="bakery-theme">


<Navbar/>


<main>


<section id="home">
<Hero/>
</section>



<section id="products">
<FeaturedProducts/>
</section>




<WhyChooseUs/>




<section id="categories">
<Categories/>
</section>




<section id="gallery">
<Gallery/>
</section>




<section id="reviews">
<CustomerReviews/>
</section>




<CommonQuestions/>




<section id="contact">
<Contact/>
</section>



</main>




<Footer/>

<WhatsAppButton/>


</div>

)

}


export default BakeryWebsite;