import { motion } from "framer-motion";
import {
  Users,
  Utensils,
  Award,
  Star
} from "lucide-react";


const stats=[

{
icon:<Users size={30}/>,
number:"5000+",
title:"Happy Customers"
},


{
icon:<Utensils size={30}/>,
number:"50+",
title:"Signature Dishes"
},


{
icon:<Award size={30}/>,
number:"10+",
title:"Years Experience"
},


{
icon:<Star size={30}/>,
number:"4.9",
title:"Google Rating"
}

];



function Stats(){


return(


<section

className="
py-20
px-5
bg-[#0b0b0b]
"

>


<div

className="
max-w-7xl
mx-auto
grid
grid-cols-2
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
delay:index*0.1
}}



whileHover={{
y:-8
}}



className="
rounded-3xl
p-7
text-center
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
"

>


<div

className="
w-14
h-14
mx-auto
rounded-2xl
bg-yellow-400/20
flex
items-center
justify-center
text-yellow-400
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