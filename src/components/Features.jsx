import { motion } from "framer-motion";

import {
Globe,
MessageCircle,
Search,
BarChart3,
ShieldCheck,
Zap
} from "lucide-react";



const features=[


{
icon:<Globe/>,
title:"Professional Website",
desc:"Modern responsive websites designed to build trust, showcase your services and attract more customers."
},


{
icon:<MessageCircle/>,
title:"WhatsApp Lead System",
desc:"Turn website visitors into real enquiries with direct WhatsApp communication."
},


{
icon:<Search/>,
title:"SEO Ready Setup",
desc:"Built with SEO-friendly structure to improve your online visibility on Google."
},


{
icon:<BarChart3/>,
title:"Business Analytics",
desc:"Understand visitors, enquiries and website performance with simple insights."
},


{
icon:<ShieldCheck/>,
title:"Secure Hosting",
desc:"Fast and secure hosting with regular updates and reliable maintenance."
},


{
icon:<Zap/>,
title:"Fast Launch",
desc:"Get your professional business website ready quickly without delays."
}


];








function Features(){


return(


<section


id="features"


className="
relative

py-24

px-5
sm:px-6

overflow-hidden

scroll-mt-24

"

>





{/* PURPLE GLOW */}



<motion.div


animate={{

x:[0,80,0],
y:[0,50,0]

}}


transition={{

duration:12,

repeat:Infinity

}}


className="
absolute

w-[450px]

h-[450px]

sm:w-[650px]

sm:h-[650px]

bg-purple-600/25

blur-[150px]

rounded-full

left-1/2

-translate-x-1/2

top-10

"

/>








{/* PINK GLOW */}



<motion.div


animate={{

x:[0,-60,0],
y:[0,40,0]

}}


transition={{

duration:10,

repeat:Infinity

}}


className="
absolute

w-[300px]

h-[300px]

bg-pink-500/20

blur-[130px]

rounded-full

right-0

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






<div

className="
inline-flex

px-5

py-2

rounded-full

bg-purple-500/10

border

border-purple-400/20

text-purple-300

text-sm

font-semibold

"


>


🚀 Everything Your Business Needs


</div>







<h2


className="
mt-6

text-4xl

sm:text-5xl

lg:text-6xl

font-black

leading-tight

"


>


Build A Powerful


<span

className="
block

bg-gradient-to-r

from-purple-400

via-pink-400

to-purple-500

bg-clip-text

text-transparent

"


>


Digital Presence


</span>



For Your Business



</h2>








<p

className="
mt-5

max-w-2xl

mx-auto

text-gray-400

text-base

sm:text-lg

leading-relaxed

"


>


From website creation to customer enquiries,
we provide complete digital solutions to help your business grow online.


</p>





</motion.div>














{/* CARDS */}





<div


className="
grid

sm:grid-cols-2

lg:grid-cols-3

gap-6

lg:gap-8

mt-16

"

>


{


features.map((item,index)=>(



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

delay:index*0.1

}}



whileHover={{

y:-12,

scale:1.02

}}




className="
group

relative

rounded-[32px]

p-7

bg-white/[0.06]

border

border-white/10

backdrop-blur-xl

overflow-hidden

hover:border-purple-400/40

transition-all

duration-300

"

>






{/* CARD GLOW */}



<div


className="
absolute

inset-0

bg-gradient-to-br

from-purple-500/20

to-pink-500/20

opacity-0

group-hover:opacity-100

transition

"

/>








<div

className="
relative

z-10

"

>








{/* ICON */}



<motion.div


animate={{

y:[0,-6,0]

}}


transition={{

duration:3,

repeat:Infinity

}}



className="
relative

w-16

h-16

rounded-2xl

bg-gradient-to-br

from-purple-500/30

to-pink-500/30

flex

items-center

justify-center

text-purple-300

shadow-xl

"


>


{item.icon}



<div

className="
absolute

inset-0

rounded-2xl

bg-pink-500/20

blur-xl

opacity-0

group-hover:opacity-100

transition

"

/>


</motion.div>










<h3


className="
mt-7

text-xl

sm:text-2xl

font-bold

group-hover:text-pink-400

transition

"


>


{item.title}


</h3>









<p


className="
mt-4

text-gray-400

leading-relaxed

"

>


{item.desc}


</p>









<div


className="
mt-7

flex

items-center

gap-2

text-pink-400

text-sm

font-semibold

"

>


<span>✓</span>


Business Ready Solution


</div>







</div>










{/* BOTTOM LINE */}



<div


className="
absolute

bottom-0

left-0

h-1

w-0

bg-gradient-to-r

from-purple-500

to-pink-500

group-hover:w-full

transition-all

duration-500

"

/>







</motion.div>



))


}




</div>







</div>





</section>


)


}



export default Features;