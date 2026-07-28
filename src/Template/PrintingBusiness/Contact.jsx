import React from "react";
import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  ShieldCheck,
  Printer
} from "lucide-react";



function Contact(){


const info=[

{
icon:<Phone/>,
title:"Call Us",
text:"+91 XXXXX XXXXX"
},


{
icon:<Mail/>,
title:"Email",
text:"indiaenterprise@gmail.com"
},


{
icon:<MapPin/>,
title:"Location",
text:"Delhi, India"
}

];





return(


<section

id="contact"

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

CONTACT US

</p>



<h2 className="
mt-5
text-4xl
md:text-5xl
font-black
">

Let's Create Premium Printing

</h2>



<p className="
mt-5
text-gray-400
text-lg
">

Share your requirement and get
professional printing solutions.

</p>


</motion.div>









<div className="
grid
lg:grid-cols-2
gap-10
"

>








{/* LEFT */}



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

className="
space-y-5
"

>


{

info.map((item,index)=>(


<div

key={index}

className="
bg-[#111111]
border
border-white/10
rounded-3xl
p-6
flex
items-center
gap-5
"

>


<div className="
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
">

{item.icon}

</div>



<div>

<h3 className="
font-bold
text-lg
">

{item.title}

</h3>


<p className="
text-gray-400
mt-1
">

{item.text}

</p>


</div>


</div>


))


}







<div className="
grid
grid-cols-3
gap-3
mt-8
">


<div className="
bg-white/5
rounded-2xl
p-4
text-center
">

<Printer className="
mx-auto
text-[#D4AF37]
"/>

<p className="
text-xs
mt-2
text-gray-400
">

Premium Print

</p>

</div>



<div className="
bg-white/5
rounded-2xl
p-4
text-center
">

<ShieldCheck className="
mx-auto
text-[#D4AF37]
"/>

<p className="
text-xs
mt-2
text-gray-400
">

Quality Check

</p>

</div>



<div className="
bg-white/5
rounded-2xl
p-4
text-center
">

<Clock className="
mx-auto
text-[#D4AF37]
"/>

<p className="
text-xs
mt-2
text-gray-400
">

Fast Delivery

</p>

</div>


</div>







<a

href="#"

className="
mt-8
inline-flex
items-center
gap-3
bg-green-600
hover:bg-green-700
px-8
py-4
rounded-full
font-bold
"

>

<MessageCircle/>

Chat On WhatsApp

</a>





</motion.div>









{/* FORM */}



<motion.div


initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
bg-[#111111]
border
border-white/10
rounded-3xl
p-8
"

>


<h3 className="
text-2xl
font-black
mb-6
">

Get Free Quote

</h3>





<div className="
space-y-5
">


<input

placeholder="Your Name"

className="
w-full
bg-black
border
border-white/10
rounded-xl
px-5
py-4
outline-none
"

/>



<input

placeholder="Phone Number"

className="
w-full
bg-black
border
border-white/10
rounded-xl
px-5
py-4
outline-none
"

/>



<input

placeholder="Printing Requirement"

className="
w-full
bg-black
border
border-white/10
rounded-xl
px-5
py-4
outline-none
"

/>



<textarea

rows="5"

placeholder="Tell us about your project"

className="
w-full
bg-black
border
border-white/10
rounded-xl
px-5
py-4
outline-none
"

/>





<button

className="
w-full
flex
justify-center
items-center
gap-2
bg-gradient-to-r
from-[#D4AF37]
to-orange-500
text-black
py-4
rounded-full
font-bold
"

>

Send Request

<Send size={18}/>

</button>



</div>



</motion.div>






</div>






</div>


</section>


)

}


export default Contact;