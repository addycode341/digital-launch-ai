import React from "react";
import { motion } from "framer-motion";

import gymData from "./gymData";


function Gallery(){


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

OUR GALLERY

</p>




<h2 className="
text-4xl
md:text-5xl
font-extrabold
text-white
mt-4
">

Inside PowerFit

</h2>



<p className="
text-gray-400
mt-5
max-w-2xl
mx-auto
">

Explore our premium gym environment,
modern equipment and energetic workout space.

</p>



</motion.div>









{/* Gallery Grid */}



<div className="
grid
grid-cols-2
md:grid-cols-3
gap-5
">



{

gymData.gallery.map((image,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
scale:0.9
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}


transition={{
delay:index*0.1
}}


whileHover={{
scale:1.05
}}



className="
relative
overflow-hidden
rounded-3xl
h-64
group
border
border-white/10
"

>



<img

src={image}

alt={`Gym Gallery ${index+1}`}

className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-500
"

/>





{/* Overlay */}


<div className="
absolute
inset-0
bg-gradient-to-t
from-black/70
via-transparent
to-transparent
opacity-0
group-hover:opacity-100
transition
">

</div>






</motion.div>


))


}



</div>







</div>


</section>


)

}


export default Gallery;