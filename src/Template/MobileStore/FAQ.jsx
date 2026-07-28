import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ChevronDown,
  HelpCircle
} from "lucide-react";





const faqs=[


{
question:"Are all smartphones original?",
answer:
"Yes, we provide 100% genuine smartphones with official warranty and verified billing."
},


{
question:"Do you provide exchange offers?",
answer:
"Yes, you can exchange your old smartphone and get the best possible value."
},


{
question:"Is EMI available?",
answer:
"Yes, we provide easy EMI options with selected bank and payment partners."
},


{
question:"Do you provide repair services?",
answer:
"Yes, our expert technicians handle display, battery, software and hardware repairs."
},


{
question:"How much warranty do I get?",
answer:
"Warranty depends on brand policy. We provide proper invoice and warranty support."
},


{
question:"Can I order online?",
answer:
"Yes, contact our store team and we will help you with booking and delivery."
}


];







function FAQ(){


const [open,setOpen]=useState(null);



return(


<section

id="faq"

className="
py-20
sm:py-28
px-4
sm:px-8
bg-[#050505]
"

>


<div

className="
max-w-5xl
mx-auto
"

>







{/* HEADER */}



<div

className="
text-center
mb-12
sm:mb-16
"

>


<p

className="
text-blue-400
tracking-[3px]
text-sm
font-semibold
"

>

FAQ

</p>





<h2

className="
text-4xl
sm:text-5xl
lg:text-6xl
font-black
mt-4
leading-tight
"

>

Everything

<span

className="
text-purple-500
block
sm:inline
"

>

 You Need To Know

</span>


</h2>





<p

className="
text-gray-400
mt-4
text-sm
sm:text-base
"

>

Find answers about products, warranty, EMI and services.

</p>



</div>









{/* FAQ LIST */}



<div

className="
space-y-4
"

>


{


faqs.map((faq,index)=>(



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


transition={{

duration:.4

}}



className="
rounded-3xl
bg-white/[0.06]
border
border-white/10
overflow-hidden
"

>








<button


onClick={()=>setOpen(open===index ? null : index)}


className="
w-full
p-4
sm:p-6
flex
items-center
justify-between
gap-4
text-left
"

>







<div

className="
flex
items-center
gap-3
"

>



<div

className="
w-10
h-10
sm:w-12
sm:h-12
shrink-0
rounded-xl
bg-blue-500/10
text-blue-400
flex
items-center
justify-center
"

>

<HelpCircle size={22}/>

</div>








<h3

className="
font-bold
text-sm
sm:text-lg
leading-snug
"

>

{faq.question}

</h3>




</div>








<motion.div

animate={{

rotate:open===index ? 180 : 0

}}


transition={{

duration:.25

}}

className="shrink-0"

>

<ChevronDown size={20}/>

</motion.div>





</button>









<AnimatePresence>


{


open===index &&



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

duration:.25

}}



className="
px-5
sm:px-6
pb-5
sm:pb-6
text-gray-400
text-sm
sm:text-base
leading-relaxed
"

>

{faq.answer}



</motion.div>


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