import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

import gymData from "./gymData";


function Trainers(){


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

OUR TRAINERS

</p>



<h2 className="
text-4xl
md:text-5xl
font-extrabold
text-white
mt-4
">

Meet Our Experts

</h2>



<p className="
text-gray-400
mt-5
max-w-2xl
mx-auto
">

Certified trainers helping you achieve
your fitness goals.

</p>



</motion.div>








{/* Trainer Cards */}



<div className="
grid
md:grid-cols-3
gap-8
">



{

gymData.trainers.map((trainer,index)=>(


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
overflow-hidden
group
"

>



{/* Image */}



<div className="
h-80
overflow-hidden
">


<img

src={trainer.image}

alt={trainer.name}

className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-500
"

/>


</div>









{/* Content */}



<div className="
p-7
">


<div className="
flex
items-center
gap-2
text-red-500
mb-3
">


<Award size={20}/>


<span className="
text-sm
font-semibold
">

{trainer.role}

</span>


</div>







<h3 className="
text-2xl
font-bold
text-white
">

{trainer.name}

</h3>







<p className="
text-gray-400
mt-3
">

{trainer.experience}

</p>






<p className="
text-gray-300
mt-3
text-sm
">

Speciality:

<span className="
text-red-400
">

 {trainer.speciality}

</span>


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


export default Trainers;