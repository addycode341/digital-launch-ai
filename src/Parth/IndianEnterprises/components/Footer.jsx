import { motion } from "framer-motion";

import {
MapPin,
Phone,
Mail,
MessageCircle
} from "lucide-react";


function Footer(){


const scrollTop=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



const scrollSection=(id)=>{

document
.getElementById(id)
?.scrollIntoView({

behavior:"smooth"

});

};





return(


<footer

className="
bg-black
text-white
border-t
border-white/10
pt-20
pb-8
relative
overflow-hidden
"

>


{/* Background Glow */}

<div

className="
absolute
right-0
top-0
w-96
h-96
bg-yellow-500/10
blur-[120px]
rounded-full
"

></div>





<div

className="
max-w-7xl
mx-auto
px-6
relative
z-10
"

>


<div

className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-10
"

>





{/* BRAND */}


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>


<h2

className="
text-3xl
font-bold
"

>

Indian

<span className="
text-yellow-500
">

Enterprises

</span>

</h2>




<p

className="
text-gray-400
mt-5
text-sm
leading-relaxed
"

>

Premium printing services, office stationery,
school supplies, leather and rexine products
with modern technology and quality finishing.

</p>




<div

className="
flex
gap-4
mt-6
"

>


<a

href="#"

className="
w-11
h-11
rounded-full
bg-white/5
border
border-white/10
flex
items-center
justify-center
font-bold
text-sm
hover:bg-yellow-500
hover:text-black
transition
"

>

IG

</a>





<a

href="#"

className="
w-11
h-11
rounded-full
bg-white/5
border
border-white/10
flex
items-center
justify-center
font-bold
text-sm
hover:bg-yellow-500
hover:text-black
transition
"

>

FB

</a>



</div>



</motion.div>









{/* SERVICES */}



<div>


<h3

className="
text-xl
font-bold
mb-6
"

>

Services

</h3>



<ul

className="
space-y-4
text-gray-400
text-sm
"

>


<li className="hover:text-yellow-500 transition cursor-pointer">

Printing Services

</li>


<li className="hover:text-yellow-500 transition cursor-pointer">

Office Stationery

</li>


<li className="hover:text-yellow-500 transition cursor-pointer">

School Stationery

</li>


<li className="hover:text-yellow-500 transition cursor-pointer">

Leather & Rexine Products

</li>



</ul>



</div>








{/* QUICK LINKS */}



<div>


<h3

className="
text-xl
font-bold
mb-6
"

>

Quick Links

</h3>



<ul

className="
space-y-4
text-gray-400
text-sm
"

>


<li

onClick={scrollTop}

className="
cursor-pointer
hover:text-yellow-500
transition
"

>

Home

</li>




<li

onClick={()=>scrollSection("about")}

className="
cursor-pointer
hover:text-yellow-500
transition
"

>

About

</li>




<li

onClick={()=>scrollSection("gallery")}

className="
cursor-pointer
hover:text-yellow-500
transition
"

>

Gallery

</li>





<li

onClick={()=>scrollSection("contact")}

className="
cursor-pointer
hover:text-yellow-500
transition
"

>

Contact

</li>



</ul>


</div>









{/* CONTACT */}



<div>


<h3

className="
text-xl
font-bold
mb-6
"

>

Contact

</h3>




<div

className="
space-y-5
text-gray-400
text-sm
"

>



<p

className="
flex
items-center
gap-3
"

>

<MapPin

size={18}

className="
text-yellow-500
"

/>

Your Business Address

</p>





<p

className="
flex
items-center
gap-3
"

>

<Phone

size={18}

className="
text-yellow-500
"

/>

+91 XXXXX XXXXX

</p>






<p

className="
flex
items-center
gap-3
"

>

<Mail

size={18}

className="
text-yellow-500
"

/>

info@indianenterprises.com

</p>



</div>







<a

href="https://wa.me/919999999999"

target="_blank"

className="
mt-7
inline-flex
items-center
gap-3
bg-yellow-500
text-black
px-6
py-3
rounded-full
font-semibold
hover:scale-105
transition
"

>


<MessageCircle size={20}/>

Chat On WhatsApp


</a>




</div>







</div>








<div

className="
border-t
border-white/10
mt-14
pt-6
text-center
text-gray-500
text-sm
"

>


© {new Date().getFullYear()} Indian Enterprises. All Rights Reserved.


</div>





</div>


</footer>


)

}


export default Footer;