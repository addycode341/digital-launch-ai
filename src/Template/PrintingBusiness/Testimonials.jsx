import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote
} from "lucide-react";



function Testimonials(){


const testimonials=[


{
name:"Rajesh Kumar",
company:"ABC Enterprises",
review:
"INDIA ENTERPRISE delivered amazing visiting cards with premium finishing. The quality and service were excellent.",
initial:"R"
},



{
name:"Priya Sharma",
company:"Creative Studio",
review:
"The UV printing quality is outstanding. They helped us create a professional brand identity.",
initial:"P"
},



{
name:"Amit Gupta",
company:"Gupta Traders",
review:
"Best printing partner for business requirements. Fast delivery and great finishing quality.",
initial:"A"
},



{
name:"Neha Verma",
company:"Fashion Brand",
review:
"Packaging quality and customized printing exceeded our expectations. Highly recommended.",
initial:"N"
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



<p className="
text-[#D4AF37]
uppercase
tracking-[4px]
font-bold
text-sm
">

CUSTOMER TESTIMONIALS

</p>




<h2 className="
mt-5
text-4xl
md:text-5xl
font-black
">

What Our Clients Say

</h2>




<p className="
mt-5
text-gray-400
text-lg
">

Trusted by businesses who choose
quality printing and professional service.

</p>



</motion.div>









{/* REVIEW CARDS */}



<div

className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
mt-14
"

>


{

testimonials.map((item,index)=>(



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
hover:border-[#D4AF37]/40
transition
"

>





<Quote

size={35}

className="
text-[#D4AF37]
opacity-70
mb-5
"

/>







<div className="
flex
gap-1
mb-5
">


{

[1,2,3,4,5].map((star)=>(


<Star

key={star}

size={17}

className="
text-[#D4AF37]
fill-[#D4AF37]
"

/>


))


}


</div>







<p className="
text-gray-300
text-sm
leading-relaxed
">

"{item.review}"

</p>








<div className="
mt-7
flex
items-center
gap-4
">


<div className="
w-12
h-12
rounded-full
bg-gradient-to-br
from-[#D4AF37]
to-orange-500
text-black
flex
items-center
justify-center
font-black
">

{item.initial}

</div>




<div>


<h3 className="
font-bold
text-white
">

{item.name}

</h3>



<p className="
text-gray-400
text-sm
">

{item.company}

</p>


</div>




</div>






</motion.div>



))


}



</div>








{/* TRUST MESSAGE */}




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
bg-gradient-to-r
from-[#D4AF37]/10
to-orange-500/10
border
border-[#D4AF37]/20
rounded-3xl
p-8
"

>


<h3 className="
text-2xl
md:text-3xl
font-black
">

Quality Printing Trusted By Businesses

</h3>



<p className="
mt-3
text-gray-400
">

Your brand deserves premium quality,
creative designs and reliable service.

</p>



</motion.div>







</div>


</section>


)

}


export default Testimonials;