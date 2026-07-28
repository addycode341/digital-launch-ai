import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle
} from "lucide-react";





const faqData=[


{
question:"Do I need to reserve a table before visiting?",
answer:"Reservations are recommended, especially during weekends and special occasions. You can easily book your table through our website."
},



{
question:"What type of cuisine do you serve?",
answer:"We serve premium Italian, continental and chef-special dishes prepared with fresh and high quality ingredients."
},



{
question:"Do you provide private dining for events?",
answer:"Yes, we provide private dining spaces for birthdays, corporate meetings, anniversaries and special celebrations."
},



{
question:"Do you offer vegetarian options?",
answer:"Yes, our menu includes a wide range of vegetarian and healthy food options prepared by our expert chefs."
},



{
question:"What are your opening hours?",
answer:"We are open daily from 12 PM to 11 PM. Weekend reservations are highly recommended."
}



];








function FAQ(){


const [active,setActive]=useState(null);



return(


<section

className="
relative
py-28
px-5
sm:px-8
bg-black
overflow-hidden
"

>





<div

className="
absolute
w-[500px]
h-[500px]
bg-yellow-500/10
blur-[160px]
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
mb-14
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

<HelpCircle size={18}/>

FAQ

</div>







<h2

className="
text-5xl
sm:text-6xl
font-black
mt-5
"

>


Frequently Asked

<span className="
text-yellow-400
">

Questions

</span>


</h2>




<p

className="
text-gray-400
mt-5
"

>

Everything you need to know before your dining experience.

</p>






</motion.div>











<div

className="
space-y-5
"

>


{


faqData.map((item,index)=>(



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


onClick={()=>setActive(

active===index ? null : index

)}


className="
w-full
flex
justify-between
items-center
text-left
p-6
sm:p-7
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

rotate:active===index ? 180 : 0

}}


>


<ChevronDown

className="
text-yellow-400
"

/>


</motion.div>



</button>







<AnimatePresence>



{


active===index &&


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

duration:.3

}}



className="
overflow-hidden
"

>


<p

className="
px-6
sm:px-7
pb-7
text-gray-400
leading-relaxed
"

>

{item.answer}

</p>


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