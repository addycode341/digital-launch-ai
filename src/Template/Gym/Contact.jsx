import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle
} from "lucide-react";

import gymData from "./gymData";


function Contact(){


return(


<section

className="
py-24
px-6
md:px-12
bg-black
"

>


<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-10
items-center
">





{/* Left */}



<motion.div

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

>



<p className="
text-red-500
font-bold
tracking-[4px]
text-sm
">

CONTACT US

</p>




<h2 className="
text-4xl
md:text-5xl
font-extrabold
text-white
mt-4
">

Book Your Free Trial Today

</h2>





<p className="
text-gray-400
mt-5
leading-relaxed
">

Start your fitness journey with our expert trainers.
Contact us now and get your first trial session.

</p>









<div className="
mt-8
space-y-5
">



<div className="
flex
items-center
gap-4
text-gray-300
">


<div className="
w-12
h-12
rounded-xl
bg-red-500/10
flex
items-center
justify-center
text-red-500
">

<Phone/>

</div>


<div>

<p className="
text-sm
text-gray-500
">

Phone

</p>


<p className="
text-white
font-semibold
">

{gymData.phone}

</p>


</div>



</div>









<div className="
flex
items-center
gap-4
text-gray-300
">


<div className="
w-12
h-12
rounded-xl
bg-red-500/10
flex
items-center
justify-center
text-red-500
">

<MapPin/>

</div>



<div>

<p className="
text-sm
text-gray-500
">

Location

</p>


<p className="
text-white
font-semibold
">

{gymData.contact.address}

</p>


</div>



</div>









<div className="
flex
items-center
gap-4
text-gray-300
">


<div className="
w-12
h-12
rounded-xl
bg-red-500/10
flex
items-center
justify-center
text-red-500
">

<Clock/>

</div>



<div>

<p className="
text-sm
text-gray-500
">

Timing

</p>


<p className="
text-white
font-semibold
">

{gymData.contact.timings}

</p>


</div>



</div>






</div>



</motion.div>









{/* Right Booking Card */}



<motion.div

initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
backdrop-blur-xl
"

>


<h3 className="
text-2xl
font-bold
text-white
">

Start Free Trial

</h3>



<p className="
text-gray-400
mt-3
">

Get your first workout session with our trainers.

</p>






<input

placeholder="Your Name"

className="
w-full
mt-6
bg-black/40
border
border-white/10
rounded-xl
px-5
py-4
text-white
outline-none
"

/>





<input

placeholder="Phone Number"

className="
w-full
mt-4
bg-black/40
border
border-white/10
rounded-xl
px-5
py-4
text-white
outline-none
"

/>







<a

href={`https://wa.me/${gymData.whatsapp}`}

className="
mt-6
w-full
py-4
rounded-xl
bg-gradient-to-r
from-green-500
to-emerald-500
text-white
font-bold
flex
items-center
justify-center
gap-3
hover:scale-105
transition
"

>


<MessageCircle size={22}/>


Book Trial On WhatsApp


</a>





</motion.div>








</div>


</section>


)

}


export default Contact;