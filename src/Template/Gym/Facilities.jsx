import React from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  HeartPulse,
  Users,
  ShowerHead,
  Sparkles,
  Clock
} from "lucide-react";


function Facilities(){


const facilities=[

{
icon:<Dumbbell/>,
title:"Modern Equipment",
text:"Latest strength machines and premium workout equipment."
},


{
icon:<HeartPulse/>,
title:"Cardio Zone",
text:"Advanced cardio machines for endurance and fat loss."
},


{
icon:<Users/>,
title:"Personal Training",
text:"One-to-one coaching with certified fitness experts."
},


{
icon:<ShowerHead/>,
title:"Locker & Shower",
text:"Clean changing rooms with modern facilities."
},


{
icon:<Sparkles/>,
title:"Premium Environment",
text:"Motivating atmosphere designed for transformation."
},


{
icon:<Clock/>,
title:"24/7 Access",
text:"Workout anytime according to your schedule."
}

];



return(


<section

className="
py-24
px-6
md:px-12
bg-gray-950
"

>


<div className="
max-w-7xl
mx-auto
">






{/* Heading */}



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


<p className="
text-red-500
font-bold
tracking-[4px]
text-sm
">

OUR FACILITIES

</p>



<h2 className="
text-4xl
md:text-5xl
font-extrabold
text-white
mt-4
">

Everything You Need

<br/>

For Fitness

</h2>



<p className="
text-gray-400
mt-5
max-w-2xl
mx-auto
">

Experience world-class facilities designed
to make your fitness journey comfortable and effective.

</p>


</motion.div>









{/* Facility Cards */}



<div className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-6
">


{

facilities.map((item,index)=>(


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
delay:index*0.12
}}



whileHover={{
y:-10
}}



className="
bg-white/5
border
border-white/10
rounded-3xl
p-7
group
"


>





<div className="
w-16
h-16
rounded-2xl
bg-gradient-to-br
from-red-500
to-orange-500
flex
items-center
justify-center
text-white
mb-6
group-hover:scale-110
transition
">


{item.icon}


</div>






<h3 className="
text-xl
font-bold
text-white
">

{item.title}

</h3>




<p className="
text-gray-400
mt-3
leading-relaxed
">

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


export default Facilities;