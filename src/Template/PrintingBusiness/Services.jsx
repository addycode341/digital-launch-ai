import React from "react";
import { motion } from "framer-motion";
import {
  Printer,
  Sparkles,
  CreditCard,
  Package,
  Scissors,
  Layers,
  Palette,
  ArrowRight
} from "lucide-react";


function Services(){


const services=[


{
icon:<Printer size={30}/>,
title:"Premium Printing",
text:"High quality printing solutions with sharp colors, premium papers and professional finishing."
},



{
icon:<Sparkles size={30}/>,
title:"UV Printing & 3D Effects",
text:"Advanced UV printing technology with luxury textures, raised effects and attractive finishes."
},



{
icon:<CreditCard size={30}/>,
title:"Visiting Cards",
text:"Luxury business cards designed to create a powerful first impression for your brand."
},



{
icon:<Package size={30}/>,
title:"Custom Packaging",
text:"Creative packaging solutions with premium printing and customized branding."
},



{
icon:<Layers size={30}/>,
title:"Corporate Stationery",
text:"Complete office branding including letterheads, brochures, folders and business materials."
},



{
icon:<Scissors size={30}/>,
title:"Custom Shape Cutting",
text:"Unique designs with modern cutting technology for creative printing solutions."
},



{
icon:<Palette size={30}/>,
title:"Brand Identity Solutions",
text:"Complete printing support to build a strong and professional business identity."
},



{
icon:<Sparkles size={30}/>,
title:"Leather Products",
text:"Premium customized leather products with professional branding."
}


];





return(


<section

id="services"

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



<div className="
absolute
left-0
top-20
w-96
h-96
bg-[#D4AF37]/10
blur-[120px]
rounded-full
"/>






<div className="
max-w-7xl
mx-auto
relative
z-10
">





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

OUR SERVICES

</p>



<h2 className="
mt-5
text-4xl
md:text-5xl
font-black
">


Complete Printing Solutions


</h2>



<p className="
mt-5
text-gray-400
text-lg
">


From premium visiting cards to advanced
UV printing, we provide complete solutions
for your business branding.


</p>



</motion.div>










{/* SERVICE CARDS */}



<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
mt-14
">


{

services.map((service,index)=>(



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
delay:index*.08
}}


whileHover={{
y:-10
}}



className="
group
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
group-hover:scale-110
transition
">


{service.icon}


</div>







<h3 className="
text-xl
font-bold
">

{service.title}

</h3>





<p className="
mt-4
text-gray-400
leading-relaxed
text-sm
">


{service.text}


</p>








<button className="
mt-6
flex
items-center
gap-2
text-[#D4AF37]
font-semibold
text-sm
group-hover:gap-3
transition-all
">


Know More

<ArrowRight size={16}/>


</button>







</motion.div>



))


}



</div>







{/* CTA */}



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
bg-gradient-to-r
from-[#D4AF37]/10
to-orange-500/10
border
border-[#D4AF37]/20
rounded-3xl
p-8
text-center
"


>


<h3 className="
text-2xl
md:text-3xl
font-black
">

Need Custom Printing For Your Business?


</h3>


<p className="
text-gray-400
mt-3
">

Let's create premium designs that represent your brand.


</p>



<button className="
mt-6
bg-gradient-to-r
from-[#D4AF37]
to-orange-500
text-black
font-bold
px-8
py-4
rounded-full
">

Get Free Quote

</button>



</motion.div>






</div>


</section>


)

}


export default Services;