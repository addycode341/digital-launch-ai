import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  ShieldCheck,
  Trophy
} from "lucide-react";


function WhyChooseUs(){


const reasons=[

{
icon:<Award/>,
title:"Certified Trainers",
text:"Learn from experienced fitness professionals who guide you towards real results."
},


{
icon:<Users/>,
title:"Community Support",
text:"Train with motivated members and stay consistent with your fitness journey."
},


{
icon:<ShieldCheck/>,
title:"Safe Training",
text:"Professional guidance with proper techniques to avoid injuries."
},


{
icon:<Trophy/>,
title:"Proven Results",
text:"Thousands of members have achieved their transformation goals with us."
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

WHY CHOOSE US

</p>



<h2 className="
text-4xl
md:text-5xl
font-extrabold
text-white
mt-4
">

Why Thousands Choose

<br/>

PowerFit

</h2>



<p className="
text-gray-400
mt-5
max-w-2xl
mx-auto
">

We provide the perfect combination of expert
training, modern facilities and a motivating environment.

</p>



</motion.div>









{/* Cards */}



<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
">


{

reasons.map((item,index)=>(


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
delay:index*0.15
}}



whileHover={{
y:-10,
scale:1.03
}}



className="
bg-white/5
border
border-white/10
rounded-3xl
p-7
text-center
"


>


<div className="
w-16
h-16
mx-auto
rounded-2xl
bg-gradient-to-br
from-red-500
to-orange-500
flex
items-center
justify-center
text-white
mb-6
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
mt-4
text-sm
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


export default WhyChooseUs;