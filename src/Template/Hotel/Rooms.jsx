import { motion } from "framer-motion";

import {
  BedDouble,
  Users,
  Maximize,
  Sparkles,
  ArrowRight
} from "lucide-react";





const rooms=[


{
image:
"https://images.unsplash.com/photo-1618773928121-c32242e63f39",

badge:"Most Popular",

name:"Royal Deluxe Room",

price:"₹8,999",

size:"450 sq ft",

guests:"2 Guests",

features:[
"King Bed",
"Free Breakfast",
"City View"
]

},



{
image:
"https://images.unsplash.com/photo-1590490360182-c33d57733427",

badge:"Luxury Choice",

name:"Premium Suite",

price:"₹15,999",

size:"700 sq ft",

guests:"4 Guests",

features:[
"Living Area",
"Mini Bar",
"Spa Access"
]

},




{
image:
"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",

badge:"Exclusive",

name:"Presidential Villa",

price:"₹29,999",

size:"1200 sq ft",

guests:"6 Guests",

features:[
"Private Pool",
"Luxury Dining",
"VIP Service"
]

}



];








function Rooms(){


return(


<section

id="rooms"

className="
py-28
px-5
sm:px-8
bg-[#080808]
"

>


<div

className="
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


<p className="
text-yellow-400
font-semibold
tracking-[4px]
">

ROOMS & SUITES

</p>



<h2 className="
text-5xl
sm:text-6xl
font-black
mt-4
">

Stay In

<span className="
text-yellow-400
">

Luxury

</span>

</h2>



<p className="
text-gray-400
mt-5
max-w-xl
mx-auto
">

Elegant rooms designed with comfort, style and premium hospitality.

</p>



</motion.div>










<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
"

>


{

rooms.map((room,index)=>(


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
y:-15
}}



className="
group
rounded-[35px]
overflow-hidden
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
"

>







{/* IMAGE */}


<div

className="
relative
h-80
overflow-hidden
"

>


<img

src={room.image}

alt={room.name}

className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"

/>





<div

className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/20
to-transparent
"

/>





<div

className="
absolute
top-5
left-5
px-4
py-2
rounded-full
bg-yellow-400
text-black
font-bold
text-sm
"

>

{room.badge}

</div>



</div>










{/* CONTENT */}


<div

className="
p-7
"

>



<div

className="
flex
justify-between
items-start
gap-3
"

>


<h3 className="
text-2xl
font-black
">

{room.name}

</h3>


<div>

<p className="
text-yellow-400
text-2xl
font-black
">

{room.price}

</p>


<p className="
text-gray-500
text-xs
">

per night

</p>


</div>



</div>










{/* INFO */}


<div

className="
flex
gap-4
mt-6
text-sm
text-gray-300
"

>


<div className="
flex
items-center
gap-2
">

<Maximize size={16}
className="text-yellow-400"
/>

{room.size}

</div>



<div className="
flex
items-center
gap-2
">

<Users size={16}
className="text-yellow-400"
/>

{room.guests}

</div>


</div>








{/* FEATURES */}



<div

className="
flex
flex-wrap
gap-2
mt-6
"

>


{

room.features.map((feature,i)=>(


<span

key={i}

className="
px-3
py-2
rounded-full
bg-white/10
text-xs
text-gray-300
"

>

{feature}

</span>


))


}



</div>








<button

className="
mt-8
w-full
flex
justify-center
items-center
gap-2
py-4
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


<BedDouble size={18}/>


Reserve Room


<ArrowRight size={16}/>


</button>






</div>





</motion.div>


))


}


</div>





</div>


</section>


)

}


export default Rooms;