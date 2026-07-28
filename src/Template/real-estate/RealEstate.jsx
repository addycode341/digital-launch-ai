import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturedProperties from "./FeaturedProperties";
import PropertyTypes from "./PropertyTypes";
import WhyChooseUs from "./WhyChooseUs";
import Amenities from "./Amenities";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";


function RealEstate() {


  return (

    <div className="bg-black min-h-screen">


      {/* Navbar */}

      <Navbar />



      {/* Hero Section */}

      <Hero />



      {/* Properties */}

      <FeaturedProperties />



      {/* Property Categories */}

      <PropertyTypes />



      {/* Trust Section */}

      <WhyChooseUs />



      {/* Facilities */}

      <Amenities />



      {/* Achievement */}

      <Stats />



      {/* Reviews */}

      <Testimonials />



      {/* Gallery */}

      <Gallery />



      {/* Contact */}

      <Contact />



      {/* Footer */}

      <Footer />



      {/* Floating Button */}

      <FloatingWhatsApp />


    </div>

  );

}


export default RealEstate;