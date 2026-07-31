import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
Printer,
FileText,
Palette,
Briefcase
} from "lucide-react";


function Services(){


const services=[

{
icon:<Printer size={40}/>,
title:"Printing Services",
desc:"Premium printing solutions including UV printing, 3D effects, visiting cards, brochures and customized printing.",
path:"/indian-enterprises/printing"
},

{
icon:<FileText size={40}/>,
title:"Office Stationery",
desc:"Complete office stationery solutions including files, folders, registers, diaries and corporate products.",
path:"/indian-enterprises/office-stationery"
},

{
icon:<Palette size={40}/>,
title:"School Stationery & Art Craft",
desc:"School notebooks, drawing materials, color products and complete art & craft solutions.",
path:"/indian-enterprises/school-stationery"
},

{
icon:<Briefcase size={40}/>,
title:"Leather & Rexine Products",
desc:"Premium leather bags, files, wallets and customized rexine products.",
path:"/indian-enterprises/leather"
}

];



return(

<section

className="
min-h-screen
bg-black
text-white
pt-32
pb-20
"


>


<div

className="
max-w-7xl
mx-auto
px-6
"

>



<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

className="
text-center
mb-16
"

>


<p

className="
text-yellow-500
uppercase
tracking-widest
font-semibold
"

>

Our Services

</p>


<h1

className="
text-4xl
md:text-6xl
font-bold
mt-3
"

>

Complete Business

<span className="
text-yellow-500
">

 Solutions

</span>

</h1>



<p

className="
text-gray-400
max-w-2xl
mx-auto
mt-5
"

>

Indian Enterprises provides complete printing,
stationery and customized product solutions under one roof.

</p>


</motion.div>







<div

className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
"

>


{

services.map((item,index)=>(


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

transition={{
delay:index*0.1
}}

viewport={{
once:true
}}

>


<Link to={item.path}>


<div

className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
h-full
hover:border-yellow-500
hover:-translate-y-2
transition
duration-300
"

>


<div

className="
w-16
h-16
rounded-2xl
bg-yellow-500
text-black
flex
items-center
justify-center
mb-6
"

>

{item.icon}

</div>



<h2

className="
text-xl
font-bold
mb-3
"

>

{item.title}

</h2>



<p

className="
text-gray-400
text-sm
leading-relaxed
"

>

{item.desc}

</p>



<div

className="
text-yellow-500
mt-5
font-semibold
"

>

Explore →

</div>



</div>


</Link>


</motion.div>


))

}


</div>



</div>


</section>

)

}


export default Services;