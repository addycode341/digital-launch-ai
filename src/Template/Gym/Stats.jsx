import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";

import {
  Users,
  Dumbbell,
  Trophy,
  Clock
} from "lucide-react";



function Counter({value}){


const [count,setCount]=useState(0);



useEffect(()=>{


let start=0;


const timer=setInterval(()=>{


start += Math.ceil(value/40);



if(start >= value){

setCount(value);

clearInterval(timer);

}
else{

setCount(start);

}



},40);



return ()=>clearInterval(timer);



},[value]);



return count;


}






function Stats({data}){





const stats=[


{
number:data?.members || 1000,
title:"Happy Members",
icon:<Users size={28}/>
},



{
number:data?.trainers || 15,
title:"Expert Trainers",
icon:<Dumbbell size={28}/>
},



{
number:data?.experience || 10,
title:"Years Experience",
icon:<Trophy size={28}/>
},



{
number:data?.access || 24,
title:"Hour Access",
icon:<Clock size={28}/>
}


];







return(


<section

className="
relative
py-24
px-6
md:px-12
bg-black
overflow-hidden
"

>



{/* Glow */}


<div className="
absolute
top-10
left-10
w-72
h-72
bg-red-600/20
blur-3xl
rounded-full
">

</div>







<div className="
max-w-7xl
mx-auto
relative
">





{/* Heading */}



<motion.div

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
text-center
mb-14
"

>



<p className="
text-red-500
font-bold
tracking-widest
text-sm
">

OUR ACHIEVEMENTS

</p>




<h2 className="
text-4xl
md:text-5xl
font-extrabold
text-white
mt-3
">

Results That Speak For Us

</h2>




<p className="
text-gray-400
mt-5
max-w-2xl
mx-auto
">

Helping people transform their body and lifestyle with professional training.

</p>



</motion.div>









{/* Cards */}



<div className="
grid
grid-cols-2
md:grid-cols-4
gap-6
">



{


stats.map((item,index)=>(


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

duration:.6,
delay:index*.15

}}




whileHover={{

y:-10,
scale:1.04

}}



className="
relative
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
text-center
shadow-xl
"

>





{/* Icon */}



<div className="
w-16
h-16
mx-auto
rounded-2xl
bg-gradient-to-br
from-red-500
to-orange-500
flex
items-center
justify-center
text-white
mb-5
shadow-lg
shadow-red-500/30
">


{item.icon}


</div>







<h3 className="
text-4xl
font-extrabold
text-white
">


<Counter value={item.number}/>

<span>

+

</span>


</h3>







<p className="
mt-3
text-gray-400
font-medium
">

{item.title}

</p>





</motion.div>


))


}



</div>







</div>




</section>


)

}



export default Stats;