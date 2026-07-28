import {useState} from "react";
import {motion} from "framer-motion";

import {
ChevronDown
} from "lucide-react";




const faq=[


{
q:"What are check-in and check-out timings?",
a:"Check-in starts at 2 PM and check-out is available until 12 PM."
},


{
q:"Do rooms include breakfast?",
a:"Yes, selected packages include complimentary luxury breakfast."
},


{
q:"Do you provide airport transfers?",
a:"Yes, premium airport pickup and drop services are available."
},


{
q:"Can I modify my booking?",
a:"Yes, bookings can be modified according to availability."
}



];





function FAQ(){


const [open,setOpen]=useState(null);



return(


<section

className="
py-28
px-5
sm:px-8
bg-black
"

>


<div

className="
max-w-4xl
mx-auto
"

>


<div className="
text-center
mb-14
">


<p className="
text-yellow-400
tracking-[5px]
">

FAQ

</p>


<h2 className="
text-5xl
font-black
mt-5
">

Frequently Asked

<span className="
text-yellow-400
">

Questions

</span>

</h2>


</div>







<div className="
space-y-5
">


{

faq.map((item,index)=>(


<div

key={index}

className="
rounded-3xl
bg-white/[0.06]
border
border-white/10
overflow-hidden
"

>


<button

onClick={()=>setOpen(
open===index?null:index
)}

className="
w-full
flex
justify-between
items-center
p-6
text-left
"

>


<span className="
font-bold
text-lg
">

{item.q}

</span>



<ChevronDown

className={`
transition
${open===index?"rotate-180 text-yellow-400":""}
`}

/>


</button>





{

open===index &&

<motion.p

initial={{
opacity:0
}}

animate={{
opacity:1
}}

className="
px-6
pb-6
text-gray-400
"

>

{item.a}

</motion.p>

}



</div>


))


}


</div>


</div>


</section>


)

}


export default FAQ;