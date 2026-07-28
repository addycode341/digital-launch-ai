import React, {useState} from "react";
import { motion } from "framer-motion";
import {
  ChevronDown
} from "lucide-react";


function FAQ(){


const [active,setActive]=useState(null);



const questions=[

{
q:"What are the gym timings?",
a:"PowerFit Gym is open 24/7, so you can workout according to your schedule."
},


{
q:"Do you provide personal trainers?",
a:"Yes, our certified trainers provide personalized workout plans and guidance."
},


{
q:"Is there a free trial available?",
a:"Yes, new members can join a trial session before selecting a membership plan."
},


{
q:"Do you provide diet plans?",
a:"Yes, we provide customized nutrition guidance according to your fitness goals."
},


{
q:"Can beginners join PowerFit?",
a:"Absolutely. Our trainers help beginners with proper exercises and techniques."
}

];



return(


<section

className="
py-24
px-6
md:px-12
bg-gray-950
"

>


<div className="
max-w-4xl
mx-auto
">






{/* Heading */}



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
text-red-500
font-bold
tracking-[4px]
text-sm
">

FAQ

</p>



<h2 className="
text-4xl
md:text-5xl
font-extrabold
text-white
mt-4
">

Frequently Asked Questions

</h2>



<p className="
text-gray-400
mt-5
">

Everything you need to know before joining PowerFit.

</p>


</motion.div>









{/* FAQ */}



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
bg-white/5
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
text-white
font-semibold
text-lg
">

{item.q}

</h3>



<ChevronDown

className={`
text-red-500
transition-transform
duration-300
${
active===index
?
"rotate-180"
:
""
}
`}

/>


</button>








{

active===index &&

<motion.div

initial={{
opacity:0,
height:0
}}

animate={{
opacity:1,
height:"auto"
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


}





</motion.div>


))


}



</div>








</div>


</section>


)

}


export default FAQ;