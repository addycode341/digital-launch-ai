import React from "react";
import { motion } from "framer-motion";

import {
  Palette,
  Printer,
  CheckCircle,
  Truck
} from "lucide-react";



function Process(){


const steps=[


{
number:"01",
icon:<Palette size={30}/>,
title:"Design & Planning",
text:
"We understand your requirements and create professional designs that match your brand identity."
},



{
number:"02",
icon:<Printer size={30}/>,
title:"Premium Printing",
text:
"Using advanced printing technology, we produce high quality prints with perfect finishing."
},



{
number:"03",
icon:<CheckCircle size={30}/>,
title:"Quality Checking",
text:
"Every product goes through detailed quality checks to maintain premium standards."
},



{
number:"04",
icon:<Truck size={30}/>,
title:"Fast Delivery",
text:
"Safe packaging and timely delivery to complete your project smoothly."
}


];





return(


<section

className="
bg-[#050505]
text-white
py-24
px-6
lg:px-8
relative
overflow-hidden
"

>



<div

className="
absolute
right-0
top-20
w-96
h-96
bg-[#D4AF37]/10
blur-[120px]
rounded-full
"

/>






<div

className="
max-w-7xl
mx-auto
relative
z-10
"

>





{/* HEADER */}



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
max-w-3xl
mx-auto
"

>


<p className="
text-[#D4AF37]
uppercase
tracking-[4px]
font-bold
text-sm
">

OUR PROCESS

</p>




<h2 className="
mt-5
text-4xl
md:text-5xl
font-black
">

How We Deliver Premium Printing

</h2>




<p className="
mt-5
text-gray-400
text-lg
">

A simple and professional workflow
from concept to final delivery.

</p>



</motion.div>









{/* STEPS */}



<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
mt-14
">


{

steps.map((step,index)=>(


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

duration:.5,
delay:index*.15

}}



whileHover={{

y:-10

}}



className="
relative
bg-[#111111]
border
border-white/10
rounded-3xl
p-7
hover:border-[#D4AF37]/50
transition
"

>





<div className="
absolute
top-5
right-5
text-5xl
font-black
text-white/5
">

{step.number}

</div>







<div className="
w-16
h-16
rounded-2xl
bg-gradient-to-br
from-[#D4AF37]
to-orange-500
text-black
flex
items-center
justify-center
mb-6
">

{step.icon}

</div>





<h3 className="
text-xl
font-bold
">

{step.title}

</h3>





<p className="
mt-4
text-gray-400
text-sm
leading-relaxed
">

{step.text}

</p>







</motion.div>



))


}



</div>









{/* BOTTOM MESSAGE */}



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
mt-16
text-center
bg-white/5
border
border-white/10
rounded-3xl
p-8
"

>


<h3 className="
text-2xl
md:text-3xl
font-black
">

From Idea To Premium Product

</h3>



<p className="
mt-3
text-gray-400
">

We handle every step with creativity,
technology and attention to detail.

</p>



</motion.div>






</div>


</section>


)

}


export default Process;