import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Crown
} from "lucide-react";

import gymData from "./gymData";


function Membership(){



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

MEMBERSHIP PLANS

</p>




<h2 className="
text-4xl
md:text-5xl
font-extrabold
text-white
mt-4
">

Choose Your Fitness Plan

</h2>




<p className="
text-gray-400
mt-5
">

Flexible plans designed for every fitness goal.

</p>



</motion.div>









{/* Plans */}



<div className="
grid
md:grid-cols-3
gap-8
">



{

gymData.membership.map((plan,index)=>(


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
y:-10
}}



className={`
relative
rounded-3xl
p-8
border
border-white/10
bg-white/5
${index===1 ? "ring-2 ring-red-500" : ""}
`}


>





{

index===1 &&

<div className="
absolute
top-5
right-5
bg-red-500
text-white
px-3
py-1
rounded-full
text-xs
font-bold
">

POPULAR

</div>

}




<div className="
w-14
h-14
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

<Crown/>

</div>







<h3 className="
text-2xl
font-bold
text-white
">

{plan.name}

</h3>





<h4 className="
text-4xl
font-extrabold
text-white
mt-4
">

₹{plan.price}

</h4>







<div className="
mt-6
space-y-4
">

{

plan.features.map((feature,i)=>(


<div

key={i}

className="
flex
items-center
gap-3
text-gray-300
"

>


<Check

size={18}

className="
text-red-500
"

/>


{feature}


</div>


))


}


</div>









<button

className="
w-full
mt-8
py-4
rounded-full
bg-gradient-to-r
from-red-500
to-orange-500
text-white
font-bold
hover:scale-105
transition
"

>

Join Now

</button>







</motion.div>


))


}



</div>






</div>


</section>


)

}


export default Membership;