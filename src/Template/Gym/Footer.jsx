import React from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Phone,
  MapPin,
  Clock
} from "lucide-react";

import gymData from "./gymData";


function Footer(){


const services = gymData.programs.map(
(item)=>item.title
);



return(


<footer

className="
bg-gray-950
text-white
py-16
px-6
md:px-12
"

>


<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-4
gap-10
">





{/* Brand */}



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
mb-5
">


<div className="
w-12
h-12
rounded-2xl
bg-gradient-to-br
from-red-500
to-orange-500
flex
items-center
justify-center
">

<Dumbbell/>

</div>



<h2 className="
text-2xl
font-extrabold
">

{gymData.businessName}

</h2>



</div>





<p className="
text-gray-400
leading-relaxed
">

{gymData.description}

</p>



</motion.div>









{/* Services */}



<div>


<h3 className="
text-lg
font-bold
mb-5
">

Programs

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
hover:text-red-500
transition
"

>

{item}

</li>


))


}


</ul>



</div>









{/* Contact */}



<div>


<h3 className="
text-lg
font-bold
mb-5
">

Contact

</h3>



<div className="
space-y-4
text-gray-400
">



<div className="
flex
gap-3
items-center
">

<Phone

size={18}

className="
text-red-500
"

/>

{gymData.phone}


</div>







<div className="
flex
gap-3
items-center
">


<MapPin

size={18}

className="
text-red-500
"

/>


{gymData.contact.address}


</div>








<div className="
flex
gap-3
items-center
">


<Clock

size={18}

className="
text-red-500
"

/>


{gymData.contact.timings}


</div>




</div>


</div>









{/* CTA */}



<div>


<h3 className="
text-lg
font-bold
mb-5
">

Join Today

</h3>



<p className="
text-gray-400
mb-5
">

Start your fitness journey with us.

</p>



<a

href={`https://wa.me/${gymData.whatsapp}`}

className="
inline-flex
px-6
py-3
rounded-full
bg-gradient-to-r
from-red-500
to-orange-500
font-bold
hover:scale-105
transition
"

>

Book Trial

</a>



</div>






</div>







<div className="
border-t
border-white/10
mt-12
pt-6
text-center
text-gray-500
text-sm
">


© 2026 {gymData.businessName}. All Rights Reserved.


</div>





</footer>


)

}


export default Footer;