import React, { useEffect, useState } from "react";

import gymData from "./gymData";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import About from "./About";
import Programs from "./Programs";
import Trainers from "./Trainers";
import Membership from "./Membership";
import Facilities from "./Facilities";
import Gallery from "./Gallery";
import WhyChooseUs from "./WhyChooseUs";
import Reviews from "./Reviews";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";



function Gym(){


const [websiteData,setWebsiteData]=useState(null);



useEffect(()=>{


const data = JSON.parse(
localStorage.getItem("websiteData")
);


setWebsiteData(data);


},[]);





const finalData = {


...gymData,



businessName:

websiteData?.businessName ||

gymData.businessName,




description:

websiteData?.description ||

gymData.description,




phone:

websiteData?.phone ||

gymData.phone,




whatsapp:

websiteData?.whatsapp ||

gymData.whatsapp,




location:

websiteData?.location ||

gymData.location,




contact:{

...gymData.contact,


address:

websiteData?.location ||

gymData.contact.address

}




};







return(


<div className="bg-black">



<Navbar

data={finalData}

/>




<Hero

data={finalData}

/>




<Stats

data={finalData}

/>




<About

data={finalData}

/>




<Programs

data={finalData}

/>




<Trainers

data={finalData}

/>




<Membership

data={finalData}

/>




<Facilities

data={finalData}

/>




<Gallery

data={finalData}

/>




<WhyChooseUs

data={finalData}

/>




<Reviews

data={finalData}

/>




<FAQ

data={finalData}

/>




<Contact

data={finalData}

/>




<Footer

data={finalData}

/>




<WhatsAppButton

data={finalData}

/>




</div>


)

}



export default Gym;