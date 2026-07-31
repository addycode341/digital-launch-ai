import { motion } from "framer-motion";
import {
Printer,
FileText,
Palette,
Briefcase,
ArrowRight,
CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";


function Services(){


const services=[

{
icon:<Printer size={35}/>,
title:"Printing Services",
desc:"Premium printing solutions including UV printing, 3D effects, visiting cards, brochures and customized designs.",
features:[
"UV Printing",
"3D Effects",
"Custom Cutting",
"Business Printing"
],
path:"/indian-enterprises/printing"
},


{
icon:<FileText size={35}/>,
title:"Office Stationery",
desc:"Complete office stationery solutions for businesses, companies and professionals.",
features:[
"Files & Folders",
"Registers",
"Corporate Stationery",
"Custom Branding"
],
path:"/indian-enterprises/office-stationery"
},


{
icon:<Palette size={35}/>,
title:"School Stationery & Art Craft",
desc:"Creative school supplies and art materials for students and institutions.",
features:[
"School Items",
"Craft Materials",
"Drawing Supplies",
"Bulk Orders"
],
path:"/indian-enterprises/school-stationery"
},


{
icon:<Briefcase size={35}/>,
title:"Leather & Rexine Products",
desc:"Premium leather and rexine products with customized solutions.",
features:[
"Leather Items",
"Rexine Products",
"Custom Designs",
"Quality Finish"
],
path:"/indian-enterprises/leather"
}

];




return(


<section

id="services"

className="
bg-black
text-white
py-24
relative
overflow-hidden
"

>


{/* Glow */}

<div

className="
absolute
right-0
top-40
w-96
h-96
bg-yellow-500/10
blur-[120px]
rounded-full
"

></div>





<div

className="
max-w-7xl
mx-auto
px-6
"

>


{/* Heading */}


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



<h2

className="
text-3xl
md:text-5xl
font-bold
mt-4
"

>

Everything You Need

<span className="
text-yellow-500
">

 In One Place

</span>

</h2>



<p

className="
text-gray-400
max-w-2xl
mx-auto
mt-5
"

>

From printing to stationery and customized products,
we provide complete business solutions with premium quality.

</p>



</motion.div>









{/* Cards */}



<div

className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
"

>


{

services.map((service,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:50
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

className="
group
"

>


<div

className="
h-full
bg-white/5
border
border-white/10
rounded-3xl
p-7
hover:border-yellow-500
hover:-translate-y-3
transition
duration-300
"

>


{/* Icon */}

<div

className="
w-16
h-16
bg-yellow-500
text-black
rounded-2xl
flex
items-center
justify-center
mb-6
group-hover:rotate-6
transition
"

>

{service.icon}

</div>





<h3

className="
text-xl
font-bold
mb-3
"

>

{service.title}

</h3>




<p

className="
text-gray-400
text-sm
leading-relaxed
"

>

{service.desc}

</p>






<ul

className="
mt-6
space-y-3
"

>

{

service.features.map((feature,i)=>(


<li

key={i}

className="
flex
items-center
gap-2
text-sm
text-gray-300
"

>


<CheckCircle

size={16}

className="
text-yellow-500
"

/>


{feature}


</li>


))


}


</ul>







<Link

to={service.path}

className="
mt-7
inline-flex
items-center
gap-2
text-yellow-500
font-semibold
"

>

Explore

<ArrowRight size={18}/>

</Link>



</div>



</motion.div>


))


}



</div>








{/* Bottom CTA */}



<motion.div

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

className="
mt-20
bg-gradient-to-r
from-yellow-500/20
to-transparent
border
border-yellow-500/30
rounded-3xl
p-10
text-center
"

>


<h3

className="
text-3xl
font-bold
"

>

Need Custom Solution?

</h3>


<p

className="
text-gray-300
mt-3
"

>

Contact Indian Enterprises for customized printing
and product requirements.

</p>



<a

href="https://wa.me/919999999999"

className="
inline-flex
mt-6
bg-yellow-500
text-black
px-8
py-3
rounded-full
font-bold
hover:scale-105
transition
"

>

Contact On WhatsApp

</a>


</motion.div>




</div>


</section>


)

}


export default Services;