import { motion } from "framer-motion";

import {
  Globe,
  Search,
  MapPin,
  MessageCircle,
  ShieldCheck,
  BarChart3,
  ArrowRight
} from "lucide-react";



const services=[

{
icon:<Globe size={32}/>,
number:"01",
title:"Business Website Creation",
desc:"Modern, responsive and premium websites designed to build trust and convert visitors into customers."
},


{
icon:<Search size={32}/>,
number:"02",
title:"SEO Growth Setup",
desc:"Improve your online visibility with SEO-friendly structure and strategies that help customers find you."
},


{
icon:<MapPin size={32}/>,
number:"03",
title:"Google Business Optimization",
desc:"Optimize your Google presence and attract more local customers searching for your services."
},


{
icon:<MessageCircle size={32}/>,
number:"04",
title:"WhatsApp Lead System",
desc:"Convert website visitors into real customers with direct WhatsApp enquiry integration."
},


{
icon:<ShieldCheck size={32}/>,
number:"05",
title:"Website Maintenance",
desc:"Regular updates, security checks and improvements to keep your website running smoothly."
},


{
icon:<BarChart3 size={32}/>,
number:"06",
title:"Business Analytics",
desc:"Track visitors, enquiries and understand how your business is growing online."
}

];







function Services(){


return(


<section

id="services"

className="
relative
py-20
sm:py-28
px-5
sm:px-6
overflow-hidden
scroll-mt-24
"

>



{/* BACKGROUND GLOW */}



<div

className="
absolute
w-[450px]
h-[450px]
bg-purple-600/25
blur-[150px]
rounded-full
right-0
top-10
"

/>



<div

className="
absolute
w-[350px]
h-[350px]
bg-pink-500/20
blur-[120px]
rounded-full
left-0
bottom-0
"

/>






<div

className="
relative
z-10
max-w-7xl
mx-auto
"

>





{/* HEADER */}



<motion.div


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


className="
text-center
"


>



<h2

className="
text-3xl
sm:text-4xl
lg:text-6xl
font-black
"

>

Our Digital Services


<span

className="
bg-gradient-to-r
from-purple-400
via-pink-400
to-orange-400
bg-clip-text
text-transparent
"

>

 🚀

</span>


</h2>




<p

className="
mt-5
text-gray-400
text-base
sm:text-lg
max-w-2xl
mx-auto
"

>

Everything your business needs to build a strong online presence.

</p>



</motion.div>









{/* CARDS */}



<div

className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-6
sm:gap-8
mt-12
sm:mt-16
"

>



{

services.map((service,index)=>(



<motion.div


key={index}



initial={{

opacity:0,
y:50

}}


whileInView={{

opacity:1,
y:0

}}


viewport={{

once:true

}}



transition={{

delay:index*.1

}}



whileHover={{

y:-12

}}



className="
group
relative
p-6
sm:p-8
rounded-[32px]
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
overflow-hidden
hover:border-pink-400/40
hover:shadow-xl
hover:shadow-purple-500/10
transition
"



>



{/* Hover Glow */}


<div

className="
absolute
inset-0
bg-gradient-to-br
from-purple-500/10
to-pink-500/10
opacity-0
group-hover:opacity-100
transition
"

/>






{/* Number */}



<div

className="
absolute
right-5
top-3
text-7xl
font-black
text-white/5
"

>

{service.number}

</div>








<div

className="
relative
z-10
"

>





{/* ICON */}



<motion.div


whileHover={{

scale:1.1,
rotate:5

}}



className="
w-16
h-16
rounded-2xl
bg-gradient-to-br
from-purple-500/30
to-pink-500/30
flex
items-center
justify-center
text-pink-400
"

>


{service.icon}


</motion.div>








<h3

className="
text-xl
sm:text-2xl
font-bold
mt-7
group-hover:text-pink-400
transition
"

>

{service.title}

</h3>







<p

className="
text-gray-400
mt-4
leading-relaxed
text-sm
sm:text-base
"

>

{service.desc}

</p>







<button


className="
mt-7
flex
items-center
gap-2
text-pink-400
font-semibold
group-hover:gap-4
transition-all
"

>


Learn More


<ArrowRight size={18}/>


</button>





</div>





</motion.div>



))


}



</div>





</div>



</section>


)

}


export default Services;