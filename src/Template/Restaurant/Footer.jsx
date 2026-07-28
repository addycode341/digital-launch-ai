import { motion } from "framer-motion";

import {
  MapPin,
  Phone,
  Mail
} from "lucide-react";





function Footer(){


return(


<footer

className="
relative
bg-[#050505]
border-t
border-white/10
pt-20
pb-8
px-5
sm:px-8
overflow-hidden
"

>


{/* Glow */}

<div

className="
absolute
w-[450px]
h-[450px]
bg-yellow-500/10
blur-[150px]
rounded-full
bottom-0
left-1/2
-translate-x-1/2
"

/>







<div

className="
relative
z-10
max-w-7xl
mx-auto
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



<h2

className="
text-3xl
font-black
"

>

Royal

<span className="
text-yellow-400
">

Taste

</span>


</h2>





<p

className="
text-gray-400
mt-5
leading-relaxed
"

>

Premium restaurant experience with
delicious food, luxury ambience and
unforgettable memories.

</p>







{/* SOCIAL BUTTONS */}



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
bg-white/10
flex
items-center
justify-center
hover:bg-yellow-400
hover:text-black
transition
"

>

<span className="font-bold">

IG

</span>


</a>






<a

href="#"

className="
w-11
h-11
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-yellow-400
hover:text-black
transition
"

>

<span className="font-bold">

f

</span>


</a>







<a

href="#"

className="
w-11
h-11
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-yellow-400
hover:text-black
transition
"

>

<span className="font-bold">

𝕏

</span>


</a>




</div>



</motion.div>










{/* QUICK LINKS */}



<div>


<h3

className="
text-lg
font-bold
mb-5
"

>

Quick Links

</h3>




<ul

className="
space-y-3
text-gray-400
"

>


<li className="
hover:text-yellow-400
cursor-pointer
transition
">

Home

</li>



<li className="
hover:text-yellow-400
cursor-pointer
transition
">

Menu

</li>




<li className="
hover:text-yellow-400
cursor-pointer
transition
">

About

</li>




<li className="
hover:text-yellow-400
cursor-pointer
transition
">

Gallery

</li>




<li className="
hover:text-yellow-400
cursor-pointer
transition
">

Contact

</li>



</ul>


</div>









{/* SERVICES */}



<div>


<h3

className="
text-lg
font-bold
mb-5
"

>

Services

</h3>





<ul

className="
space-y-3
text-gray-400
"

>


<li>

Fine Dining

</li>


<li>

Private Events

</li>


<li>

Birthday Parties

</li>


<li>

Wedding Catering

</li>


<li>

Table Booking

</li>



</ul>



</div>













{/* CONTACT */}



<div>


<h3

className="
text-lg
font-bold
mb-5
"

>

Contact

</h3>







<div

className="
space-y-5
text-gray-400
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

size={20}

className="
text-yellow-400
"

/>


Delhi, India


</p>







<p

className="
flex
items-center
gap-3
"

>


<Phone

size={20}

className="
text-yellow-400
"

/>


+91 98765 43210


</p>








<p

className="
flex
items-center
gap-3
"

>


<Mail

size={20}

className="
text-yellow-400
"

/>


info@royaltaste.com


</p>






</div>


</div>









</div>








{/* COPYRIGHT */}



<div

className="
relative
z-10
max-w-7xl
mx-auto
border-t
border-white/10
mt-16
pt-6
text-center
text-gray-500
text-sm
"

>


© 2026 Royal Taste. All Rights Reserved.


</div>







</footer>


)

}


export default Footer;