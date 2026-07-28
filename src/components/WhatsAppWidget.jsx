import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { X, Sparkles } from "lucide-react";



function WhatsAppWidget(){


const [open,setOpen]=useState(false);



const phone="919811970397";



const message =

`Hi DigitalLaunch AI 👋

I want a professional website for my business.

Business Name:
Business Category:
Location:

Please share details about your website package.`;





const whatsappURL =

`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;







return(


<>



<AnimatePresence>


{

open &&


<motion.div


initial={{

opacity:0,

y:60,

scale:.9

}}


animate={{

opacity:1,

y:0,

scale:1

}}



exit={{

opacity:0,

y:60,

scale:.9

}}



transition={{

duration:.35

}}



className="

fixed

bottom-24

right-5

w-[350px]

max-w-[90vw]

rounded-[30px]

overflow-hidden

bg-[#080b1c]

border

border-white/10

shadow-2xl

shadow-purple-500/20

z-50

"

>



{/* HEADER */}



<div


className="

p-5

bg-gradient-to-r

from-purple-600

to-pink-500

text-white

flex

justify-between

items-center

"

>


<div>


<div className="flex items-center gap-2">


<h2 className="font-black text-lg">

DigitalLaunch AI

</h2>


<Sparkles size={18}/>


</div>




<p className="text-sm opacity-90">

Online Support ⚡

</p>



</div>







<button


onClick={()=>setOpen(false)}


className="

w-9

h-9

rounded-full

bg-white/20

flex

items-center

justify-center

hover:rotate-90

transition

"


>


<X size={20}/>


</button>




</div>









{/* BODY */}



<div className="p-5 text-white">






<div


className="

bg-white/10

border

border-white/10

rounded-2xl

p-5

text-sm

leading-6

text-gray-300

"

>


<div className="text-xl mb-3">

👋

</div>



Need a professional website for your business?



<br/>
<br/>


Get:

<br/>

✅ Modern Website

<br/>

✅ WhatsApp Integration

<br/>

✅ SEO Setup

<br/>

✅ Business Growth Support 🚀



</div>









<a


href={whatsappURL}


target="_blank"


rel="noopener noreferrer"


>


<button


className="

mt-5

w-full

py-4

rounded-2xl

bg-green-500

hover:bg-green-400

font-bold

flex

items-center

justify-center

gap-3

transition

shadow-lg

shadow-green-500/20

"


>


<FaWhatsapp size={24}/>


Book Free Demo 🚀


</button>



</a>





</div>







</motion.div>



}


</AnimatePresence>











{/* FLOAT BUTTON */}



<motion.button



onClick={()=>setOpen(!open)}




animate={{


y:[0,-10,0]


}}



transition={{


duration:2,

repeat:Infinity


}}



whileHover={{


scale:1.1


}}



className="

fixed

bottom-6

right-6

z-50

w-16

h-16

rounded-full

bg-gradient-to-br

from-green-400

to-green-600

shadow-2xl

shadow-green-500/30

flex

items-center

justify-center

"


>



<FaWhatsapp

className="

text-white

text-4xl

"

/>



</motion.button>





</>


)


}



export default WhatsAppWidget;