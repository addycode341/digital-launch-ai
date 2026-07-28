import {motion} from "framer-motion";

import {
Sparkles,
Gift,
Crown
} from "lucide-react";





const offers=[


{
icon:<Crown size={30}/>,
title:"Royal Weekend Escape",
discount:"25% OFF",
text:"Luxury room stay with breakfast and premium services."
},


{
icon:<Gift size={30}/>,
title:"Couple Luxury Package",
discount:"30% OFF",
text:"Romantic stay with dinner and spa experience."
},


{
icon:<Sparkles size={30}/>,
title:"Grand Holiday Package",
discount:"40% OFF",
text:"Complete luxury experience for memorable vacations."
}



];







function Offers(){


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
max-w-7xl
mx-auto
"

>




<div className="
text-center
mb-16
">


<p className="
text-yellow-400
tracking-[5px]
font-semibold
">

SPECIAL OFFERS

</p>


<h2 className="
text-5xl
sm:text-6xl
font-black
mt-5
">

Luxury Deals

<span className="
text-yellow-400
">

For You

</span>

</h2>


</div>









<div

className="
grid
md:grid-cols-3
gap-8
"

>


{

offers.map((offer,index)=>(


<motion.div


key={index}


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
overflow-hidden
"

>





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
font-bold
"

>

{offer.discount}

</div>







<div

className="
w-16
h-16
rounded-2xl
bg-yellow-400/10
text-yellow-400
flex
items-center
justify-center
"

>

{offer.icon}

</div>







<h3 className="
text-2xl
font-black
mt-7
">

{offer.title}

</h3>




<p className="
text-gray-400
mt-4
leading-relaxed
">

{offer.text}

</p>






<button

className="
mt-8
px-7
py-3
rounded-full
bg-gradient-to-r
from-yellow-400
to-orange-500
text-black
font-bold
hover:scale-105
transition
"

>

Claim Offer

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