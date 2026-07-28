import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";



const reasons=[


{
icon:"🚀",
title:"Professional Website",
desc:"Modern business websites designed to build trust and convert visitors into customers."
},


{
icon:"💰",
title:"Affordable Pricing",
desc:"Premium website solutions without expensive agency costs."
},


{
icon:"📱",
title:"Mobile First Design",
desc:"Fast responsive websites that work perfectly on every device."
},


{
icon:"📈",
title:"Business Growth",
desc:"Help customers discover your business online and generate more enquiries."
},


{
icon:"⚡",
title:"Fast Delivery",
desc:"Get your professional website ready quickly with a smooth process."
},


{
icon:"🛡️",
title:"Long Term Support",
desc:"Maintenance, updates and support whenever your business needs."
}


];








function WhyChooseUs(){



return(



<section


className="
relative

py-20
sm:py-28

px-5
sm:px-6

overflow-hidden

"

>





{/* BACKGROUND GLOW */}




<motion.div


animate={{

x:[0,80,0],

y:[0,40,0],

scale:[1,1.15,1]

}}


transition={{

duration:12,

repeat:Infinity

}}


className="
absolute

w-[350px]
sm:w-[600px]

h-[350px]
sm:h-[600px]

bg-purple-600/25

blur-[140px]

rounded-full

left-1/2

-translate-x-1/2

"

 />







<motion.div


animate={{

x:[0,-60,0]

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

blur-[120px]

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








{/* HEADING */}





<motion.div


initial={{

opacity:0,

y:40

}}


whileInView={{


opacity:1,

y:0


}}


viewport={{once:true}}



className="
text-center

"


>



<span


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


✨ Why Choose Us


</span>








<h2


className="
mt-6

text-3xl

sm:text-4xl

lg:text-6xl

font-black

leading-tight

"

>


Why Businesses Choose



<span


className="
bg-gradient-to-r

from-purple-400

via-pink-400

to-purple-500

bg-clip-text

text-transparent

"

>


DigitalLaunch AI


</span>



🚀



</h2>







<p


className="
text-gray-400

text-base

sm:text-lg

mt-5

max-w-2xl

mx-auto

"

>


Everything you need to build your digital presence and grow online.


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


reasons.map((item,index)=>(





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



viewport={{once:true}}



transition={{


delay:index*.1


}}



whileHover={{


y:-12,

scale:1.02


}}



className="
group

relative

p-6

sm:p-8

rounded-[30px]

bg-white/[0.06]

border

border-white/10

backdrop-blur-xl

overflow-hidden

hover:border-purple-400/40

transition

"

>







{/* CARD GLOW */}



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









<div


className="
relative

z-10

"

>







<div


className="
w-20

h-20

rounded-3xl

bg-gradient-to-br

from-purple-500/30

to-pink-500/30

flex

items-center

justify-center

text-5xl

shadow-xl

group-hover:scale-110

transition

"

>


{item.icon}


</div>









<h3


className="
text-xl

sm:text-2xl

font-bold

mt-6

group-hover:text-pink-400

transition

"

>


{item.title}


</h3>







<p


className="
text-gray-400

mt-4

leading-relaxed

"


>


{item.desc}


</p>







<div


className="
flex

items-center

gap-2

mt-6

text-pink-400

text-sm

font-semibold

"

>


<CheckCircle size={18}/>


Trusted Digital Solution


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



export default WhyChooseUs;