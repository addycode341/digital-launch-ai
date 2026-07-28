import React from "react";
import { motion } from "framer-motion";

import {
  Award,
  Printer,
  Layers,
  Zap,
  CheckCircle,
  ShieldCheck,
  Clock
} from "lucide-react";



function About(){


const trustCards=[


{
icon:<Award size={26}/>,
title:"Premium Quality",
text:"High quality printing with sharp colors and luxury finishing."
},


{
icon:<Printer size={26}/>,
title:"Advanced Technology",
text:"Modern UV printing, 3D effects and innovative solutions."
},


{
icon:<ShieldCheck size={26}/>,
title:"Reliable Service",
text:"Professional support with consistent quality."
},


{
icon:<Clock size={26}/>,
title:"Fast Delivery",
text:"On-time production and smooth delivery process."
}


];





const features=[

"Premium visiting cards & business stationery",

"UV printing with 3D effect finishing",

"Customized printing solutions",

"Quality materials with professional service"

];





const numbers=[

{
number:"10K+",
title:"Projects Completed"
},

{
number:"15+",
title:"Years Experience"
},

{
number:"100%",
title:"Quality Focus"
},

{
number:"24/7",
title:"Customer Support"
}

];






return(


<section

id="about"

className="
relative
bg-[#050505]
text-white
py-24
px-6
lg:px-8
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





<div

className="
grid
lg:grid-cols-2
gap-16
items-center
"

>







{/* LEFT CONTENT */}



<motion.div


initial={{
opacity:0,
x:-40
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


transition={{
duration:.7
}}

>



<p

className="
text-[#D4AF37]
tracking-[4px]
uppercase
font-bold
text-sm
"

>

ABOUT INDIA ENTERPRISE

</p>





<h2

className="
mt-5
text-4xl
md:text-5xl
font-black
leading-tight
"

>

Creating Premium Prints
That Build Strong Brands

</h2>






<p

className="
mt-6
text-gray-400
text-lg
leading-relaxed
"

>


INDIA ENTERPRISE is a professional printing
solutions company helping businesses create
a powerful identity through premium quality
printing and creative finishing.


</p>







<p

className="
mt-5
text-gray-400
leading-relaxed
"

>


From luxury visiting cards and UV printing
to packaging, stationery and customized
products, we combine modern technology
with creative designs to deliver printing
solutions that make brands stand out.


</p>







<div

className="
mt-8
space-y-4
"

>


{

features.map((item,index)=>(


<div

key={index}

className="
flex
items-center
gap-3
text-gray-200
"

>


<CheckCircle

size={20}

className="
text-[#D4AF37]
"

/>



{item}



</div>



))


}



</div>





</motion.div>













{/* RIGHT TRUST CARDS */}





<motion.div


initial={{

opacity:0,
scale:.9

}}


whileInView={{

opacity:1,
scale:1

}}


viewport={{

once:true

}}


transition={{

duration:.8

}}



className="
grid
sm:grid-cols-2
gap-5
"

>


{

trustCards.map((item,index)=>(



<motion.div


key={index}


whileHover={{

y:-8

}}


className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
hover:border-[#D4AF37]/40
transition
"

>



<div

className="
w-14
h-14
rounded-2xl
bg-gradient-to-br
from-[#D4AF37]
to-orange-500
text-black
flex
items-center
justify-center
mb-5
"

>

{item.icon}

</div>





<h3

className="
text-xl
font-bold
"

>

{item.title}

</h3>





<p

className="
mt-3
text-gray-400
text-sm
leading-relaxed
"

>

{item.text}

</p>




</motion.div>



))


}



</motion.div>






</div>









{/* NUMBERS */}





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
mt-20
grid
grid-cols-2
md:grid-cols-4
gap-5
"

>


{

numbers.map((item,index)=>(



<div

key={index}

className="
bg-[#111111]
border
border-white/10
rounded-3xl
p-6
text-center
"

>


<h3

className="
text-3xl
md:text-4xl
font-black
text-[#D4AF37]
"

>

{item.number}

</h3>




<p

className="
mt-2
text-gray-400
text-sm
"

>

{item.title}

</p>




</div>



))


}



</motion.div>







</div>



</section>


)

}


export default About;