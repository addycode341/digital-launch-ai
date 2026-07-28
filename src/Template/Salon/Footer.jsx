import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Sparkles
} from "lucide-react";





const links=[

"Home",
"About",
"Services",
"Gallery",
"Reviews",
"Contact"

];



const services=[

"Hair Styling",
"Bridal Makeup",
"Skin Treatment",
"Spa Therapy"

];







function Footer(){


return(


<footer

className="
relative
bg-[#050505]
border-t
border-white/10
py-16
px-5
sm:px-8
overflow-hidden
"

>





<div

className="
absolute
w-[400px]
h-[400px]
bg-pink-500/10
blur-[140px]
rounded-full
right-0
top-0
"

/>








<div

className="
relative
z-10
max-w-7xl
mx-auto
grid
md:grid-cols-4
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


Luxe

<span

className="
text-yellow-400
"

>

Salon

</span>


</h2>





<p

className="
text-gray-400
mt-5
leading-relaxed
"

>


Premium beauty salon creating
luxury transformations with expert artists.

</p>






<div

className="
flex
gap-4
mt-6
"

>


<button

className="
w-12
h-12
rounded-full
bg-white/10
border
border-white/10
flex
items-center
justify-center
text-yellow-400
hover:bg-yellow-400
hover:text-black
transition
"

>


<Sparkles size={22}/>


</button>



</div>





</motion.div>









{/* LINKS */}



<div>


<h3

className="
font-bold
text-xl
"

>

Quick Links

</h3>


<ul

className="
space-y-3
mt-5
"

>


{

links.map((item,index)=>(


<li

key={index}

className="
text-gray-400
hover:text-yellow-400
transition
cursor-pointer
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


<h3

className="
font-bold
text-xl
"

>

Services

</h3>



<ul

className="
space-y-3
mt-5
"

>


{

services.map((item,index)=>(


<li

key={index}

className="
text-gray-400
hover:text-pink-400
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


<h3

className="
font-bold
text-xl
"

>

Contact

</h3>





<div

className="
space-y-5
mt-5
"

>



<div

className="
flex
items-center
gap-3
text-gray-400
"

>

<Phone

size={20}

className="
text-yellow-400
"

/>

+91 98765 43210

</div>






<div

className="
flex
items-center
gap-3
text-gray-400
"

>

<Mail

size={20}

className="
text-yellow-400
"

/>

hello@luxesalon.com

</div>







<div

className="
flex
items-center
gap-3
text-gray-400
"

>

<MapPin

size={20}

className="
text-yellow-400
"

/>

New Delhi, India

</div>





</div>


</div>







</div>








<div

className="
relative
z-10
max-w-7xl
mx-auto
mt-14
pt-8
border-t
border-white/10
flex
flex-col
sm:flex-row
justify-between
gap-4
text-gray-500
text-sm
"

>


<p>

© 2026 Luxe Salon. All rights reserved.

</p>



<p

className="
flex
items-center
gap-2
"

>

Crafted with luxury

<ArrowUpRight size={15}/>

</p>



</div>







</footer>


)

}


export default Footer;