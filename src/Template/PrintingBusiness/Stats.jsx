import React from "react";
import { motion } from "framer-motion";

import {
  Printer,
  Users,
  Award,
  Clock
} from "lucide-react";



function Stats(){


const stats=[


{
icon:<Printer size={30}/>,
number:"10K+",
title:"Projects Completed",
text:"Successful printing projects delivered"
},


{
icon:<Users size={30}/>,
number:"5K+",
title:"Happy Clients",
text:"Businesses trust our services"
},


{
icon:<Award size={30}/>,
number:"15+",
title:"Years Experience",
text:"Professional printing expertise"
},


{
icon:<Clock size={30}/>,
number:"24/7",
title:"Support",
text:"Always available for customers"
}


];






return(


<section

className="
bg-[#050505]
py-20
px-6
lg:px-8
relative
overflow-hidden
"

>


<div

className="
absolute
right-0
top-10
w-96
h-96
bg-[#D4AF37]/10
blur-[120px]
rounded-full
"

/>







<div

className="
max-w-7xl
mx-auto
relative
z-10
"

>




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


className="
text-center
mb-14
"

>


<p

className="
text-[#D4AF37]
uppercase
tracking-[4px]
font-bold
text-sm
"

>

OUR ACHIEVEMENTS

</p>



<h2

className="
mt-4
text-4xl
md:text-5xl
font-black
text-white
"

>

Numbers That Define Our Quality

</h2>



<p

className="
mt-4
text-gray-400
max-w-2xl
mx-auto
"

>

Delivering premium printing solutions with
quality, creativity and reliability.

</p>



</motion.div>









<div

className="
grid
grid-cols-2
lg:grid-cols-4
gap-5
"

>



{

stats.map((item,index)=>(



<motion.div


key={index}


initial={{

opacity:0,
y:40

}}


whileInView={{

opacity:1,
y:0

}}


viewport={{

once:true

}}



transition={{

duration:.5,
delay:index*.15

}}



whileHover={{

y:-8

}}



className="
bg-[#111111]
border
border-white/10
rounded-3xl
p-7
text-center
hover:border-[#D4AF37]/40
transition
"

>





<div

className="
mx-auto
w-16
h-16
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


{item.icon}


</div>






<h3

className="
mt-6
text-4xl
font-black
text-[#D4AF37]
"

>


{item.number}


</h3>





<h4

className="
mt-3
text-white
font-bold
text-lg
"

>

{item.title}

</h4>





<p

className="
mt-2
text-gray-400
text-sm
"

>

{item.text}

</p>







</motion.div>



))


}



</div>







</div>


</section>


)

}


export default Stats;