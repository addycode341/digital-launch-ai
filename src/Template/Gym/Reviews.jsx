import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import gymData from "./gymData";


function Reviews(){


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

TESTIMONIALS

</p>



<h2 className="
text-4xl
md:text-5xl
font-extrabold
text-white
mt-4
">

What Our Members Say

</h2>



<p className="
text-gray-400
mt-5
">

Real transformations from our fitness community.

</p>



</motion.div>









{/* Reviews Cards */}



<div className="
grid
md:grid-cols-3
gap-8
">



{

gymData.reviews.map((item,index)=>(


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



className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
"

>



{/* Stars */}



<div className="
flex
gap-1
mb-5
">

{

Array.from({length:item.rating}).map((_,i)=>(


<Star

key={i}

size={18}

fill="currentColor"

className="
text-yellow-400
"

/>


))


}

</div>









<p className="
text-gray-300
leading-relaxed
">

"{item.review}"

</p>








<div className="
mt-6
pt-5
border-t
border-white/10
">


<h3 className="
text-white
font-bold
text-lg
">

{item.name}

</h3>



<p className="
text-red-400
text-sm
mt-1
">

{item.role}

</p>



</div>







</motion.div>


))


}



</div>







</div>


</section>


)

}


export default Reviews;