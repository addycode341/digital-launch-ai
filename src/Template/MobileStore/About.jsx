import { motion } from "framer-motion";

import {
  ShieldCheck,
  Award,
  Truck,
  Headphones,
  Smartphone
} from "lucide-react";





const highlights=[

{
icon:<ShieldCheck size={26}/>,
title:"100% Genuine Products",
text:"Original smartphones with official brand warranty."
},

{
icon:<Award size={26}/>,
title:"Trusted Experience",
text:"Thousands of customers trust our service."
},

{
icon:<Truck size={26}/>,
title:"Fast Delivery",
text:"Quick and secure delivery across the city."
},

{
icon:<Headphones size={26}/>,
title:"Expert Support",
text:"Professional guidance before and after purchase."
}

];








function About({data}){


return(


<section

id="about"

className="
py-28
px-5
sm:px-8
bg-[#050505]
overflow-hidden
"

>


<div

className="
max-w-7xl
mx-auto
grid
lg:grid-cols-2
gap-14
items-center
"

>









{/* IMAGE */}



<motion.div


initial={{

opacity:0,

x:-50

}}


whileInView={{

opacity:1,

x:0

}}


viewport={{

once:true

}}



className="
relative
"

>



<img


src="
https://images.unsplash.com/photo-1441986300917-64674bd600d8
"


alt="Mobile Store"

className="
w-full
h-[520px]
object-cover
rounded-[45px]
border
border-white/10
"

/>







<div

className="
absolute
bottom-8
left-8
right-8
p-6
rounded-3xl
bg-black/70
backdrop-blur-xl
border
border-white/10
"

>


<div className="
flex
items-center
gap-3
"

>


<Smartphone

className="
text-blue-400
"

/>


<h3 className="
text-2xl
font-black
">

Premium Mobile Experience

</h3>


</div>




<p className="
text-gray-400
mt-3
"

>

Latest technology with trusted service.

</p>


</div>





</motion.div>









{/* CONTENT */}



<motion.div


initial={{

opacity:0,

x:50

}}


whileInView={{

opacity:1,

x:0

}}


viewport={{

once:true

}}

>




<p className="
text-blue-400
tracking-[5px]
font-semibold
">

ABOUT OUR STORE

</p>







<h2 className="
text-5xl
sm:text-6xl
font-black
leading-tight
mt-5
">


Your Trusted

<span

className="
block
bg-gradient-to-r
from-blue-400
to-purple-500
bg-clip-text
text-transparent
"

>

Smartphone Partner

</span>


</h2>








<p className="
text-gray-400
text-lg
leading-relaxed
mt-6
"

>


{

data?.description ||

"We provide premium smartphones, accessories and complete mobile solutions. From flagship devices to expert support, we deliver a world-class buying experience."

}


</p>








<div

className="
grid
sm:grid-cols-2
gap-5
mt-10
"

>


{

highlights.map((item,index)=>(



<motion.div


key={index}


whileHover={{

y:-8

}}



className="
p-6
rounded-3xl
bg-white/[0.06]
border
border-white/10
"

>



<div

className="
w-14
h-14
rounded-2xl
bg-blue-500/10
text-blue-400
flex
items-center
justify-center
"

>

{item.icon}

</div>






<h3 className="
font-black
text-lg
mt-5
">

{item.title}

</h3>





<p className="
text-gray-400
text-sm
mt-2
leading-relaxed
">

{item.text}

</p>






</motion.div>


))


}


</div>






</motion.div>








</div>


</section>


)

}


export default About;