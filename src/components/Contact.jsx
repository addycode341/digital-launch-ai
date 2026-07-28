import { motion } from "framer-motion";
import { 
FaWhatsapp 
} from "react-icons/fa";

import {
Mail,
MapPin,
MessageCircle,
CheckCircle
} from "lucide-react";



function Contact(){


const phone="919811970397";


const message =
`Hi DigitalLaunch AI 👋

I want a professional website for my business.

Business Name:
Business Category:
Location:

Please guide me.`;



const whatsappURL =
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;



const cards=[

{
icon:<Mail/>,
title:"Email",
text:"hello@digitallaunch.ai"
},


{
icon:<MessageCircle/>,
title:"WhatsApp",
text:"+91 98119 70397"
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
relative
py-20
sm:py-28
px-5
sm:px-6
overflow-hidden
scroll-mt-24
"

>


{/* BACKGROUND */}


<div

className="
absolute
w-[450px]
h-[450px]
sm:w-[600px]
sm:h-[600px]
bg-purple-600/20
blur-[150px]
rounded-full
left-1/2
-translate-x-1/2
top-0
"

/>


<div

className="
absolute
w-[300px]
h-[300px]
bg-pink-500/20
blur-[120px]
rounded-full
right-0
bottom-0
"

/>





<div

className="
relative
z-10
max-w-6xl
mx-auto
text-center
"

>




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


>


<h2

className="
text-3xl
sm:text-4xl
lg:text-6xl
font-black
leading-tight
"

>


Ready To Take Your Business



<span

className="
block
bg-gradient-to-r
from-purple-400
via-pink-400
to-orange-400
bg-clip-text
text-transparent
"

>

Online? 🚀

</span>


</h2>




<p

className="
mt-6
max-w-3xl
mx-auto
text-gray-400
text-base
sm:text-lg
leading-relaxed
"

>

Get a professional business website with modern design,
WhatsApp integration, SEO setup and complete support to grow your business.

</p>


</motion.div>









{/* BUTTONS */}



<div

className="
mt-10
flex
flex-col
sm:flex-row
justify-center
gap-4
"

>



<motion.a

href={whatsappURL}

target="_blank"

rel="noopener noreferrer"


whileHover={{
scale:1.05
}}


className="
px-8
py-4
rounded-2xl
bg-gradient-to-r
from-green-500
to-emerald-600
font-bold
flex
items-center
justify-center
gap-3
shadow-xl
"

>


<FaWhatsapp size={25}/>

Book Free Demo


</motion.a>







<motion.a

href="#pricing"

whileHover={{
scale:1.05
}}


className="
px-8
py-4
rounded-2xl
bg-white/10
border
border-white/10
font-bold
backdrop-blur-xl
"

>


View Pricing


</motion.a>



</div>









{/* TRUST */}



<div

className="
mt-10
flex
justify-center
gap-5
sm:gap-8
flex-wrap
text-sm
text-gray-400
"

>



{

[
"Fast Delivery",
"Mobile Friendly",
"Business Support"
].map((item,index)=>(


<div

key={index}

className="
flex
items-center
gap-2
"

>


<CheckCircle

size={18}

className="
text-pink-400
"

/>


{item}


</div>


))


}



</div>









{/* CONTACT CARDS */}



<div

className="
mt-14
grid
sm:grid-cols-2
lg:grid-cols-3
gap-6
"

>



{

cards.map((item,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
y:30
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
delay:index*.15
}}



whileHover={{
y:-10
}}


className="
group
p-6
sm:p-7
rounded-3xl
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
text-left
hover:border-pink-400/40
hover:shadow-xl
hover:shadow-purple-500/10
transition
"

>



<div

className="
w-14
h-14
rounded-2xl
bg-gradient-to-br
from-purple-500/30
to-pink-500/30
flex
items-center
justify-center
text-pink-400
group-hover:scale-110
transition
"

>

{item.icon}

</div>






<h3

className="
text-xl
font-bold
mt-5
"

>

{item.title}

</h3>





<p

className="
text-gray-400
mt-2
"

>

{item.text}

</p>




</motion.div>


))


}



</div>





</div>



</section>


)

}


export default Contact;