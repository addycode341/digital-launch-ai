import { motion } from "framer-motion";

import {
Wifi,
Utensils,
Dumbbell,
Waves,
Car,
Sparkles,
Coffee,
ShieldCheck
} from "lucide-react";





const amenities=[


{
icon:<Waves size={30}/>,
title:"Infinity Pool",
text:"Relax with breathtaking views and premium poolside experience."
},


{
icon:<Utensils size={30}/>,
title:"Fine Dining",
text:"Experience world-class cuisine prepared by expert chefs."
},


{
icon:<Sparkles size={30}/>,
title:"Luxury Spa",
text:"Rejuvenate your body with exclusive wellness treatments."
},


{
icon:<Dumbbell size={30}/>,
title:"Fitness Center",
text:"Modern equipment and personal wellness facilities."
},


{
icon:<Coffee size={30}/>,
title:"Breakfast Lounge",
text:"Premium breakfast experience every morning."
},


{
icon:<Wifi size={30}/>,
title:"High Speed WiFi",
text:"Stay connected with seamless internet access."
},


{
icon:<Car size={30}/>,
title:"Valet Parking",
text:"Safe and convenient premium parking service."
},


{
icon:<ShieldCheck size={30}/>,
title:"24/7 Security",
text:"Complete safety and comfort for every guest."
}



];







function Amenities(){


return(


<section

id="amenities"

className="
py-28
px-5
sm:px-8
bg-[#080808]
relative
overflow-hidden
"

>


<div className="
absolute
w-[400px]
h-[400px]
bg-yellow-400/10
blur-[120px]
rounded-full
top-20
right-0
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


<p className="
text-yellow-400
tracking-[5px]
font-semibold
">

HOTEL FACILITIES

</p>


<h2 className="
text-5xl
sm:text-6xl
font-black
mt-5
">

World Class

<span className="
text-yellow-400
">

Amenities

</span>

</h2>


<p className="
text-gray-400
mt-5
max-w-2xl
mx-auto
">

Everything designed to make your stay comfortable, relaxing and unforgettable.

</p>



</motion.div>








<div

className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
"

>


{

amenities.map((item,index)=>(



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
delay:index*.08
}}


whileHover={{
y:-10
}}



className="
group
p-7
rounded-[30px]
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
hover:border-yellow-400/40
transition
"

>



<div className="
w-16
h-16
rounded-2xl
bg-yellow-400/10
text-yellow-400
flex
items-center
justify-center
group-hover:bg-yellow-400
group-hover:text-black
transition
">

{item.icon}

</div>





<h3 className="
text-xl
font-bold
mt-6
">

{item.title}

</h3>



<p className="
text-gray-400
mt-3
text-sm
leading-relaxed
">

{item.text}

</p>



</motion.div>


))


}


</div>






</div>


</section>


)

}


export default Amenities;