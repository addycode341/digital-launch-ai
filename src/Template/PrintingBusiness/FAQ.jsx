import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";



function FAQ(){


const [active,setActive]=useState(null);



const questions=[


{
q:"What printing services do you provide?",
a:
"We provide premium visiting cards, UV printing, 3D effect printing, brochures, stationery, packaging and customized printing solutions."
},



{
q:"Do you provide customized designs?",
a:
"Yes, our team helps create unique designs according to your brand identity and business requirements."
},



{
q:"What is the delivery time?",
a:
"Delivery time depends on the project size and requirement. We focus on fast production with quality finishing."
},



{
q:"Can I order bulk printing for my business?",
a:
"Yes, we provide bulk printing solutions for companies, startups, shops and corporate clients."
},



{
q:"What makes your printing quality different?",
a:
"We use modern printing technology, premium materials and strict quality checks to deliver professional results."
},



{
q:"Do you provide UV and 3D finishing?",
a:
"Yes, we specialize in UV printing, 3D effects and premium finishing techniques."
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
max-w-5xl
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
mb-14
"

>


<p className="
text-[#D4AF37]
uppercase
tracking-[4px]
font-bold
text-sm
">

FAQ

</p>




<h2 className="
mt-5
text-4xl
md:text-5xl
font-black
">

Frequently Asked Questions

</h2>




<p className="
mt-5
text-gray-400
text-lg
">

Everything you need to know about our
premium printing services.

</p>



</motion.div>









{/* FAQ ITEMS */}



<div className="
space-y-5
">


{

questions.map((item,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
y:20
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}



className="
bg-[#111111]
border
border-white/10
rounded-2xl
overflow-hidden
"

>


<button

onClick={()=>setActive(
active===index ? null : index
)}

className="
w-full
flex
items-center
justify-between
p-6
text-left
"

>


<h3 className="
font-bold
text-lg
md:text-xl
">

{item.q}

</h3>



{

active===index ?

<Minus
className="text-[#D4AF37]"
/>

:

<Plus
className="text-[#D4AF37]"
/>

}



</button>







{

active===index && (


<motion.div


initial={{
height:0,
opacity:0
}}


animate={{
height:"auto",
opacity:1
}}


className="
px-6
pb-6
text-gray-400
leading-relaxed
"

>


{item.a}


</motion.div>


)


}



</motion.div>



))


}



</div>









{/* CTA */}



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
mt-14
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
font-black
">

Still Have Questions?

</h3>



<p className="
mt-3
text-gray-400
">

Contact INDIA ENTERPRISE for
custom printing solutions.

</p>



<button className="
mt-6
px-8
py-3
rounded-full
bg-gradient-to-r
from-[#D4AF37]
to-orange-500
text-black
font-bold
">

Get Quote

</button>



</motion.div>







</div>


</section>


)

}


export default FAQ;