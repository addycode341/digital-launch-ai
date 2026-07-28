import { motion } from "framer-motion";

import {
  Flame,
  Gift,
  Crown,
  Sparkles,
  Clock,
  ArrowRight
} from "lucide-react";





const offers=[


{
icon:<Crown size={28}/>,
title:"Royal Bridal Package",
discount:"30% OFF",
price:"$299",
oldPrice:"$429",
desc:"Complete bridal makeup, hairstyle and premium beauty treatment.",
tag:"Most Popular"
},




{
icon:<Sparkles size={28}/>,
title:"Glow Beauty Ritual",
discount:"25% OFF",
price:"$149",
oldPrice:"$199",
desc:"Luxury facial, skin treatment and relaxation therapy.",
tag:"Limited Offer"
},




{
icon:<Gift size={28}/>,
title:"Couple Beauty Deal",
discount:"40% OFF",
price:"$199",
oldPrice:"$339",
desc:"Special package for couples with premium salon services.",
tag:"Weekend Special"
}



];








function Offers(){


return(


<section

id="offers"

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
max-w-7xl
mx-auto
"

>









{/* HEADER */}



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
bg-red-500/10
border
border-red-400/20
text-red-400
font-semibold
"

>


<Flame size={18}/>


Limited Time Offers


</div>







<h2

className="
text-5xl
sm:text-6xl
font-black
mt-6
"

>


Exclusive

<span

className="
text-yellow-400
"

>

Beauty Deals

</span>


</h2>






<p

className="
text-gray-400
mt-5
max-w-xl
mx-auto
"

>


Enjoy premium salon experiences with
special seasonal discounts.

</p>





</motion.div>









{/* OFFER CARDS */}





<div

className="
grid
lg:grid-cols-3
gap-8
"

>







{

offers.map((item,index)=>(



<motion.div


key={index}



initial={{

opacity:0,

scale:.9

}}



whileInView={{

opacity:1,

scale:1

}}



viewport={{

once:true

}}



transition={{

delay:index*.15

}}



whileHover={{

y:-12

}}



className="
relative
rounded-[40px]
p-8
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
overflow-hidden
group
"

>








{/* TAG */}



<div

className="
absolute
top-5
right-5
px-4
py-2
rounded-full
bg-yellow-400
text-black
text-xs
font-black
"

>

{item.tag}

</div>









{/* ICON */}



<div

className="
w-16
h-16
rounded-2xl
bg-gradient-to-br
from-yellow-400/20
to-pink-500/20
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
mt-3
leading-relaxed
"

>

{item.desc}

</p>









{/* PRICE */}



<div

className="
flex
items-center
gap-4
mt-6
"

>


<span

className="
text-4xl
font-black
text-yellow-400
"

>

{item.price}

</span>




<span

className="
text-gray-500
line-through
"

>

{item.oldPrice}

</span>



</div>









{/* TIMER */}



<div

className="
flex
items-center
gap-2
mt-6
text-sm
text-pink-400
"

>


<Clock size={17}/>


Offer ends soon


</div>









<button

className="
mt-8
w-full
flex
items-center
justify-center
gap-2
py-4
rounded-full
bg-gradient-to-r
from-yellow-400
to-pink-500
text-black
font-black
hover:scale-105
transition
"

>


Book Deal


<ArrowRight size={18}/>


</button>









{/* Hover Glow */}



<div

className="
absolute
inset-0
bg-gradient-to-br
from-yellow-400/10
to-pink-500/10
opacity-0
group-hover:opacity-100
transition
pointer-events-none
"

/>






</motion.div>



))


}





</div>







</div>






</section>


)

}



export default Offers;