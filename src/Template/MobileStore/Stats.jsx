import { motion } from "framer-motion";

import {
  Users,
  Smartphone,
  ShieldCheck,
  Star
} from "lucide-react";



const stats=[

{
icon:<Users size={30}/>,
number:"10K+",
title:"Happy Customers"
},


{
icon:<Smartphone size={30}/>,
number:"500+",
title:"Smartphones Sold"
},


{
icon:<ShieldCheck size={30}/>,
number:"100%",
title:"Genuine Products"
},


{
icon:<Star size={30}/>,
number:"4.9/5",
title:"Customer Rating"
}


];





function Stats(){


return(


<section

className="
py-20
px-5
sm:px-8
bg-[#050505]
"

>


<div

className="
max-w-7xl
mx-auto
grid
grid-cols-2
lg:grid-cols-4
gap-5
"

>


{

stats.map((item,index)=>(


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
delay:index*.15
}}


whileHover={{
y:-10
}}



className="
p-6
rounded-[30px]
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
text-center
"

>


<div

className="
mx-auto
w-16
h-16
rounded-2xl
bg-gradient-to-br
from-blue-500/20
to-purple-500/20
text-blue-400
flex
items-center
justify-center
"

>

{item.icon}

</div>




<h3

className="
text-3xl
font-black
mt-5
"

>

{item.number}

</h3>



<p

className="
text-gray-400
mt-2
text-sm
"

>

{item.title}

</p>



</motion.div>


))


}


</div>


</section>


)

}


export default Stats;