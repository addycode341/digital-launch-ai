import { motion } from "framer-motion";

import {
  Wrench,
  Smartphone,
  BatteryCharging,
  ShieldCheck,
  Cpu,
  Headphones,
  CheckCircle
} from "lucide-react";





const services=[


{
icon:<Smartphone size={30}/>,
title:"Display Replacement",
desc:"Premium quality screen replacement with careful installation.",
features:[
"Original quality display",
"Same day service",
"Warranty included"
]
},


{
icon:<BatteryCharging size={30}/>,
title:"Battery Replacement",
desc:"Restore your phone performance with professional battery service.",
features:[
"Battery health check",
"Safe replacement",
"Long lasting performance"
]
},


{
icon:<Cpu size={30}/>,
title:"Software Support",
desc:"Complete software solutions for your smartphone.",
features:[
"System updates",
"Performance optimization",
"Data setup"
]
},


{
icon:<Wrench size={30}/>,
title:"Advanced Repair",
desc:"Expert repair for motherboard and hardware issues.",
features:[
"Certified technicians",
"Diagnostic testing",
"Quality parts"
]
},


{
icon:<ShieldCheck size={30}/>,
title:"Device Protection",
desc:"Keep your smartphone protected and secure.",
features:[
"Screen protection",
"Accessories setup",
"Maintenance tips"
]
},


{
icon:<Headphones size={30}/>,
title:"Customer Support",
desc:"Complete assistance after your purchase.",
features:[
"Quick response",
"Buying guidance",
"After sales support"
]
}


];









function Services(){


return(


<section

id="services"

className="
py-20
sm:py-28
px-4
sm:px-8
bg-[#050505]
relative
overflow-hidden
"

>





<div

className="
absolute
right-0
top-20
w-[300px]
h-[300px]
bg-blue-600/20
blur-[120px]
rounded-full
"

></div>









<div

className="
relative
max-w-7xl
mx-auto
"

>








{/* HEADER */}



<div

className="
text-center
mb-12
sm:mb-16
"

>


<p

className="
text-blue-400
tracking-[4px]
text-sm
font-semibold
"

>

APPLE CARE STYLE SERVICE

</p>







<h2

className="
text-4xl
sm:text-5xl
lg:text-6xl
font-black
mt-5
leading-tight
"

>


Premium


<span

className="
block
mt-2
text-purple-500
"

>

Repair Center

</span>


</h2>








<p

className="
text-gray-400
mt-5
max-w-2xl
mx-auto
text-sm
sm:text-base
"

>

Professional smartphone care with expert technicians and premium service quality.

</p>



</div>













{/* CARDS */}



<div

className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-5
sm:gap-7
"

>


{

services.map((service,index)=>(



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

delay:index*0.1

}}



whileHover={{

y:-10

}}




className="
group
p-6
sm:p-8
rounded-[30px]
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
"

>









<div

className="
w-14
h-14
sm:w-16
sm:h-16
rounded-2xl
bg-gradient-to-br
from-blue-500/20
to-purple-500/20
text-blue-400
flex
items-center
justify-center
group-hover:scale-110
transition
"

>

{service.icon}

</div>









<h3

className="
text-xl
sm:text-2xl
font-black
mt-6
"

>

{service.title}

</h3>








<p

className="
text-gray-400
mt-3
text-sm
sm:text-base
leading-relaxed
"

>

{service.desc}

</p>








<div

className="
mt-6
space-y-3
"

>


{

service.features.map((feature,i)=>(



<div

key={i}

className="
flex
items-center
gap-3
text-sm
text-gray-300
"

>


<CheckCircle

size={16}

className="
text-green-400
"

/>


{feature}


</div>



))


}



</div>









<button

className="
mt-8
w-full
py-3.5
rounded-full
bg-gradient-to-r
from-blue-500
to-purple-600
font-bold
hover:scale-105
transition
"

>

Book Service

</button>







</motion.div>



))


}



</div>








</div>



</section>


)

}



export default Services;