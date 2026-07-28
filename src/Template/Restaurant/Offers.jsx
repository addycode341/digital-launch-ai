import { motion } from "framer-motion";
import {
  Flame,
  Gift,
  Clock,
  Sparkles,
  ArrowRight
} from "lucide-react";



const offers=[

{
icon:<Flame size={30}/>,
title:"Weekend Special",
desc:"Celebrate your weekend with chef special dishes and exclusive dining offers.",
discount:"20% OFF",
tag:"Most Popular"
},


{
icon:<Gift size={30}/>,
title:"Family Feast",
desc:"Enjoy premium family combos specially curated for memorable moments.",
discount:"30% OFF",
tag:"Family Favorite"
},


{
icon:<Clock size={30}/>,
title:"Happy Hours",
desc:"Relax after work with special menu prices from 4 PM to 7 PM.",
discount:"15% OFF",
tag:"Limited Time"
}


];





function Offers(){


return(


<section

className="
relative
py-28
px-5
sm:px-8
bg-[#080808]
overflow-hidden
"

>


{/* Glow */}


<div

className="
absolute
w-[500px]
h-[500px]
bg-yellow-500/10
blur-[160px]
rounded-full
top-0
left-1/2
-translate-x-1/2
"

/>






<div

className="
relative
z-10
max-w-7xl
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

Exclusive Offers

</div>





<h2

className="
text-5xl
sm:text-6xl
font-black
mt-6
"

>


Premium Deals

<span className="
text-yellow-400
">

Just For You

</span>


</h2>




<p

className="
text-gray-400
mt-5
text-lg
max-w-2xl
mx-auto
"

>

Enjoy unforgettable dining experiences with special
offers crafted for our guests.

</p>



</motion.div>









<div

className="
grid
md:grid-cols-3
gap-8
"

>


{

offers.map((item,index)=>(


<motion.div


key={index}



initial={{

opacity:0,

y:50

}}



whileInView={{

opacity:1,

y:0

}}


viewport={{

once:true

}}



transition={{

delay:index*.15

}}




whileHover={{

y:-15,

scale:1.02

}}




className="
group
relative
rounded-[40px]
p-8
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
overflow-hidden
"

>



{/* Shine */}


<div

className="
absolute
inset-0
bg-gradient-to-r
from-transparent
via-white/10
to-transparent
translate-x-[-100%]
group-hover:translate-x-[100%]
transition
duration-1000
"

/>






{/* Tag */}


<div

className="
absolute
top-6
left-6
px-4
py-2
rounded-full
bg-yellow-400/20
text-yellow-400
text-xs
font-bold
"

>

{item.tag}

</div>








{/* Discount */}


<motion.div

animate={{

scale:[1,1.08,1]

}}

transition={{

duration:2,

repeat:Infinity

}}



className="
absolute
top-6
right-6
w-20
h-20
rounded-full
bg-yellow-400
text-black
flex
items-center
justify-center
text-center
font-black
text-sm
"

>


{item.discount}


</motion.div>







<div

className="
mt-20
w-16
h-16
rounded-2xl
bg-yellow-400/20
text-yellow-400
flex
items-center
justify-center
"

>

{item.icon}

</div>








<h3

className="
text-2xl
font-black
mt-7
"

>

{item.title}

</h3>





<p

className="
text-gray-400
mt-4
leading-relaxed
"

>

{item.desc}

</p>







<button


className="
mt-8
flex
items-center
gap-2
px-7
py-3
rounded-full
bg-gradient-to-r
from-yellow-400
to-orange-500
text-black
font-bold
hover:scale-110
transition
"

>


Claim Offer

<ArrowRight size={18}/>


</button>







</motion.div>


))


}



</div>





</div>



</section>


)

}


export default Offers;