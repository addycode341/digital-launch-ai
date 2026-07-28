import React from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Flame,
  Zap,
  HeartPulse,
  ArrowRight
} from "lucide-react";

import gymData from "./gymData";


function Programs(){


const icons=[

<Dumbbell size={30}/>,

<Flame size={30}/>,

<Zap size={30}/>,

<HeartPulse size={30}/>

];



return(


<section

className="
py-24
px-6
md:px-12
bg-black
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

OUR PROGRAMS

</p>





<h2 className="
text-4xl
md:text-5xl
font-extrabold
text-white
mt-4
">

Training Programs

<br/>

For Every Goal

</h2>





<p className="
text-gray-400
mt-5
max-w-2xl
mx-auto
">

Choose the perfect workout program designed
for your fitness transformation.

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

gymData.programs.map((item,index)=>(


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
y:-12
}}



className="
relative
bg-white/5
border
border-white/10
rounded-3xl
p-7
overflow-hidden
group
"

>




{/* Glow */}


<div className="
absolute
top-0
right-0
w-32
h-32
bg-red-500/20
blur-3xl
rounded-full
group-hover:bg-red-500/40
transition
">

</div>








{/* Icon */}



<div className="
relative
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
shadow-lg
shadow-red-500/30
">


{icons[index % icons.length]}


</div>









{/* Level Badge */}



<span className="
inline-block
px-4
py-1
rounded-full
bg-red-500/10
text-red-400
text-xs
font-bold
mb-4
">

{item.level}


</span>









<h3 className="
text-xl
font-bold
text-white
">

{item.title}


</h3>








<p className="
text-gray-400
text-sm
mt-4
leading-relaxed
">

{item.description}


</p>









<div className="
flex
justify-between
items-center
mt-6
pt-5
border-t
border-white/10
">


<p className="
text-gray-400
text-sm
">

⏱ {item.duration}

</p>





<button

className="
text-red-500
flex
items-center
gap-1
font-semibold
text-sm
"

>


Join

<ArrowRight size={15}/>


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


export default Programs;