import React from "react";
import { motion } from "framer-motion";

import {
  Printer,
  Phone,
  Mail,
  MapPin,
  MessageCircle
} from "lucide-react";



function Footer(){


const services=[

"UV Printing",
"3D Effect Printing",
"Visiting Cards",
"Packaging Solutions",
"Corporate Stationery"

];



const links=[

"Home",
"About",
"Services",
"Products",
"Gallery",
"Contact"

];





return(


<footer

className="
bg-black
text-white
pt-20
pb-8
px-6
lg:px-8
"

>



<div

className="
max-w-7xl
mx-auto
"

>





<div

className="
grid
md:grid-cols-2
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


<div className="
flex
items-center
gap-3
">


<div

className="
w-14
h-14
rounded-2xl
bg-gradient-to-br
from-[#D4AF37]
to-orange-500
text-black
flex
items-center
justify-center
"

>


<Printer size={28}/>


</div>






<div>


<h2 className="
text-xl
font-black
">

INDIA ENTERPRISE

</h2>


<p className="
text-[#D4AF37]
text-xs
tracking-widest
uppercase
">

Premium Printing

</p>



</div>


</div>






<p className="
mt-5
text-gray-400
leading-relaxed
">

Premium printing solutions with
advanced technology, creative designs
and professional finishing for modern
businesses.

</p>





<div className="
flex
gap-3
mt-6
">


<button className="
w-10
h-10
rounded-full
bg-white/10
hover:bg-[#D4AF37]
hover:text-black
transition
font-bold
">

IG

</button>



<button className="
w-10
h-10
rounded-full
bg-white/10
hover:bg-[#D4AF37]
hover:text-black
transition
font-bold
">

f

</button>



<button className="
w-10
h-10
rounded-full
bg-white/10
hover:bg-[#D4AF37]
hover:text-black
transition
font-bold
">

in

</button>


</div>



</motion.div>









{/* LINKS */}



<div>


<h3 className="
text-xl
font-bold
mb-6
">

Quick Links

</h3>



<ul className="
space-y-3
text-gray-400
">


{

links.map((item,index)=>(


<li

key={index}

className="
hover:text-[#D4AF37]
cursor-pointer
transition
"

>

{item}

</li>


))


}



</ul>



</div>









{/* SERVICES */}



<div>


<h3 className="
text-xl
font-bold
mb-6
">

Our Services

</h3>




<ul className="
space-y-3
text-gray-400
">


{

services.map((item,index)=>(


<li

key={index}

className="
hover:text-[#D4AF37]
transition
"

>

{item}

</li>


))


}



</ul>



</div>









{/* CONTACT */}



<div>


<h3 className="
text-xl
font-bold
mb-6
">

Contact

</h3>





<div className="
space-y-4
text-gray-400
">


<p className="
flex
gap-3
items-center
">

<Phone size={18}
className="text-[#D4AF37]"
/>

+91 XXXXX XXXXX

</p>





<p className="
flex
gap-3
items-center
">

<Mail size={18}
className="text-[#D4AF37]"
/>

indiaenterprise@gmail.com

</p>





<p className="
flex
gap-3
items-center
">

<MapPin size={18}
className="text-[#D4AF37]"
/>

Delhi, India

</p>



</div>







<a

href="#"

className="
mt-6
inline-flex
items-center
gap-2
bg-green-600
px-6
py-3
rounded-full
font-bold
hover:bg-green-700
transition
"

>

<MessageCircle size={18}/>

WhatsApp

</a>



</div>






</div>









<hr className="
border-white/10
my-10
"/>








<div className="
flex
flex-col
md:flex-row
justify-between
gap-4
text-gray-500
text-sm
">


<p>

© {new Date().getFullYear()} INDIA ENTERPRISE.
All Rights Reserved.

</p>



<p>

Premium Printing Solutions | Delhi

</p>



</div>






</div>



</footer>


)

}


export default Footer;