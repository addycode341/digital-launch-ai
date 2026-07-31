import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import WhatsAppButton from "../components/WhatsAppButton";

function Home(){


return(

<div

className="
bg-black
min-h-screen
text-white
"


>


<Navbar/>


<Hero/>




<section

id="about"

className="
scroll-mt-20
"

>

<About/>

</section>





<section

id="services"

className="
scroll-mt-20
"

>

<Services/>

</section>





<WhyChooseUs/>






<section

id="gallery"

className="
scroll-mt-20
"

>

<Gallery/>

</section>






<section

id="contact"

className="
scroll-mt-20
"

>

<Contact/>

</section>





<Footer/>
<WhatsAppButton/>

</div>


)

}


export default Home;