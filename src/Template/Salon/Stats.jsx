import { motion } from "framer-motion";

import {
  Users,
  Award,
  Sparkles,
  CalendarCheck
} from "lucide-react";




const stats=[


{
icon:<Users size={30}/>,
number:"5000+",
title:"Happy Clients",
desc:"Beautiful transformations"
},



{
icon:<Award size={30}/>,
number:"10+",
title:"Years Experience",
desc:"Professional beauty care"
},



{
icon:<Sparkles size={30}/>,
number:"25+",
title:"Beauty Awards",
desc:"Premium salon excellence"
},



{
icon:<CalendarCheck size={30}/>,
number:"15K+",
title:"Appointments",
desc:"Trusted by customers"
}



];







function Stats(){


return(


<section

className="
relative
py-20
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
w-[400px]
h-[400px]
bg-pink-500/10
blur-[140px]
rounded-full
left-0
top-0
"

/>





<div

className="
relative
z-10
max-w-7xl
mx-auto
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
"

>





{

stats.map((item,index)=>(


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

y:-10,

scale:1.03

}}



className="
relative
p-7
rounded-[30px]
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
overflow-hidden
group
"

>





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
"

/>








<div

className="
relative
z-10
"

>





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
text-4xl
font-black
mt-6
bg-gradient-to-r
from-yellow-400
to-pink-400
bg-clip-text
text-transparent
"

>

{item.number}

</h3>






<h4

className="
text-xl
font-bold
mt-2
"

>

{item.title}

</h4>







<p

className="
text-gray-400
mt-2
text-sm
"

>

{item.desc}

</p>





</div>







</motion.div>



))


}





</div>





</section>


)

}



export default Stats;