import React from "react";
import { motion } from "framer-motion";

import {
  Award,
  ShieldCheck,
  Clock,
  Palette,
  Users,
  Printer,
  CheckCircle
} from "lucide-react";



function WhyChooseUs(){



const reasons=[


{
icon:<Award size={30}/>,
title:"Premium Quality",
text:
"We use high quality materials and advanced printing techniques to deliver exceptional finishing."
},


{
icon:<Printer size={30}/>,
title:"Modern Printing Technology",
text:
"Advanced UV printing, 3D effects and latest machines for outstanding results."
},


{
icon:<ShieldCheck size={30}/>,
title:"Trusted Service",
text:
"Reliable printing partner trusted by businesses for professional solutions."
},


{
icon:<Clock size={30}/>,
title:"On Time Delivery",
text:
"Efficient production process ensuring fast and timely delivery."
},


{
icon:<Palette size={30}/>,
title:"Creative Designs",
text:
"Unique designs and finishing options that make your brand different."
},


{
icon:<Users size={30}/>,
title:"Customer Support",
text:
"Dedicated support from design to final product delivery."
}


];





const highlights=[

"Premium quality printing materials",

"Professional finishing standards",

"Customized business solutions",

"Affordable pricing with quality"

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

WHY CHOOSE US

</p>




<h2

className="
mt-5
text-4xl
md:text-5xl
font-black
"

>

Why Businesses Trust
INDIA ENTERPRISE

</h2>




<p

className="
mt-5
text-gray-400
text-lg
"

>

We combine creativity, technology and
quality craftsmanship to deliver printing
solutions that create a lasting impression.

</p>



</motion.div>









{/* CARDS */}



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









{/* BOTTOM TRUST AREA */}



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
mt-16
grid
lg:grid-cols-2
gap-10
items-center
bg-white/5
border
border-white/10
rounded-3xl
p-8
"

>






<div>


<h3

className="
text-3xl
font-black
"

>

Quality That Builds Brands

</h3>



<p

className="
mt-4
text-gray-400
leading-relaxed
"

>

From small businesses to corporate brands,
we provide complete printing solutions with
attention to every detail.

</p>


</div>








<div

className="
space-y-4
"

>


{

highlights.map((item,index)=>(


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






</div>



</section>


)

}


export default WhyChooseUs;