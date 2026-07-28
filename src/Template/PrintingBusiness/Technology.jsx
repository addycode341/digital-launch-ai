import React from "react";
import { motion } from "framer-motion";

import {
  Sparkles,
  Printer,
  Layers,
  Zap,
  ShieldCheck
} from "lucide-react";



function Technology(){



const technologies=[


{
icon:<Printer size={30}/>,
title:"Advanced UV Printing",

text:
"High precision UV printing technology delivering sharp colors, premium textures and long-lasting finishes."
},



{
icon:<Sparkles size={30}/>,
title:"3D Effect Finishing",

text:
"Create premium raised effects and luxury designs that make your products stand out."
},



{
icon:<Layers size={30}/>,
title:"Multi Layer Printing",

text:
"Professional layering techniques for unique designs and high quality output."
},



{
icon:<Zap size={30}/>,
title:"Fast Production",

text:
"Modern workflow and advanced equipment for quick turnaround time."
},



{
icon:<ShieldCheck size={30}/>,
title:"Quality Control",

text:
"Every product goes through quality checks to maintain premium standards."
}


];






return(


<section


className="
bg-[#0a0a0a]
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
left-0
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


<p

className="
text-[#D4AF37]
uppercase
tracking-[4px]
font-bold
text-sm
"

>

OUR TECHNOLOGY

</p>





<h2

className="
mt-5
text-4xl
md:text-5xl
font-black
"

>

Modern Printing Technology
For Premium Results

</h2>





<p

className="
mt-5
text-gray-400
text-lg
"

>

We combine advanced machines,
creative techniques and quality materials
to deliver exceptional printing experiences.

</p>



</motion.div>









{/* TECHNOLOGY GRID */}



<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
mt-14
"

>



{

technologies.map((item,index)=>(



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
delay:index*.1

}}



whileHover={{

y:-10

}}



className="
bg-[#111111]
border
border-white/10
rounded-3xl
p-7
hover:border-[#D4AF37]/50
transition
"

>





<div

className="
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
mt-4
text-gray-400
leading-relaxed
text-sm
"

>

{item.text}

</p>






</motion.div>



))


}



</div>









{/* FEATURE BANNER */}



<motion.div


initial={{

opacity:0,
scale:.95

}}


whileInView={{

opacity:1,
scale:1

}}


viewport={{

once:true

}}



className="
mt-16
rounded-3xl
border
border-[#D4AF37]/20
bg-gradient-to-r
from-[#D4AF37]/10
to-orange-500/10
p-8
md:p-10
"

>



<div className="
grid
md:grid-cols-2
gap-8
items-center
">


<div>


<h3

className="
text-3xl
font-black
"

>

Technology That Creates Premium Brands

</h3>



<p

className="
mt-4
text-gray-400
leading-relaxed
"

>

From luxury visiting cards to customized
packaging, our advanced printing solutions
help businesses create a powerful identity.

</p>



</div>







<div className="
space-y-3
text-gray-200
">


<div className="
flex
items-center
gap-3
">

<span className="
w-2
h-2
bg-[#D4AF37]
rounded-full
"/>

High Resolution Printing

</div>


<div className="
flex
items-center
gap-3
">

<span className="
w-2
h-2
bg-[#D4AF37]
rounded-full
"/>

Premium Finishing Options

</div>



<div className="
flex
items-center
gap-3
">

<span className="
w-2
h-2
bg-[#D4AF37]
rounded-full
"/>

Customized Business Solutions

</div>



</div>




</div>



</motion.div>







</div>


</section>


)

}


export default Technology;