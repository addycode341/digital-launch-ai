import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Plus,
  Minus,
  Sparkles
} from "lucide-react";






const faqs=[


{
question:"Do I need to book an appointment before visiting?",
answer:
"Yes, we recommend booking an appointment to ensure our beauty experts can provide you with the best personalized experience."
},



{
question:"What beauty services do you provide?",
answer:
"We offer premium hair styling, bridal makeup, skincare treatments, spa therapies and complete beauty solutions."
},



{
question:"Do you use premium beauty products?",
answer:
"Yes, we use professional and high-quality beauty products for safe and long-lasting results."
},



{
question:"How long does a bridal makeup session take?",
answer:
"A complete bridal transformation usually takes 3 to 5 hours depending on the selected package and requirements."
},



{
question:"Can I customize my beauty package?",
answer:
"Absolutely. Our experts create customized packages according to your style, event and beauty goals."
}



];









function FAQ(){



const [open,setOpen]=useState(null);




return(


<section

id="faq"

className="
relative
py-28
px-5
sm:px-8
bg-[#080808]
overflow-hidden
"

>






<div

className="
absolute
w-[450px]
h-[450px]
bg-yellow-400/10
blur-[150px]
rounded-full
right-0
top-20
"

/>







<div

className="
relative
z-10
max-w-4xl
mx-auto
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



<div

className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
bg-yellow-400/10
border
border-yellow-400/20
text-yellow-400
"

>


<Sparkles size={18}/>


Beauty Guide


</div>








<h2

className="
text-5xl
sm:text-6xl
font-black
mt-6
"

>


Frequently Asked

<span

className="
block
text-yellow-400
"

>

Questions

</span>


</h2>






<p

className="
text-gray-400
mt-5
"

>

Everything you need to know before your luxury salon experience.

</p>






</motion.div>









{/* ACCORDION */}





<div

className="
space-y-5
"

>


{


faqs.map((item,index)=>(


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



viewport={{

once:true

}}



transition={{

delay:index*.1

}}



className="
rounded-3xl
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
overflow-hidden
"

>







<button


onClick={()=>setOpen(
open===index ? null : index
)}


className="
w-full
flex
justify-between
items-center
gap-5
p-6
text-left
"

>



<h3

className="
font-bold
text-lg
sm:text-xl
"

>

{item.question}

</h3>







<motion.div


animate={{

rotate:open===index ? 180 : 0

}}



className="
w-10
h-10
rounded-full
bg-yellow-400
text-black
flex
items-center
justify-center
flex-shrink-0
"

>

{


open===index

?

<Minus size={20}/>

:

<Plus size={20}/>

}


</motion.div>






</button>









<AnimatePresence>


{

open===index && (



<motion.div


initial={{

height:0,

opacity:0

}}



animate={{

height:"auto",

opacity:1

}}



exit={{

height:0,

opacity:0

}}



transition={{

duration:.35

}}



className="
overflow-hidden
"

>


<p

className="
px-6
pb-6
text-gray-400
leading-relaxed
"

>

{item.answer}

</p>



</motion.div>


)


}



</AnimatePresence>







</motion.div>



))


}



</div>








</div>






</section>


)

}



export default FAQ;