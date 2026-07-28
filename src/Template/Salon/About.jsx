import { motion } from "framer-motion";

import {
  Scissors,
  Sparkles,
  Award,
  Heart
} from "lucide-react";





const highlights=[


{
icon:<Scissors size={25}/>,
title:"Expert Stylists",
text:"Professional artists creating luxury hair and beauty styles."
},



{
icon:<Sparkles size={25}/>,
title:"Premium Products",
text:"We use high-quality products for the best results."
},



{
icon:<Award size={25}/>,
title:"Award Winning",
text:"Recognized for excellence in beauty and customer care."
},



{
icon:<Heart size={25}/>,
title:"Personal Care",
text:"Every client receives a personalized beauty experience."
}



];







function About(){


return(


<section

id="about"

className="
relative
py-28
px-5
sm:px-8
bg-black
overflow-hidden
"

>


{/* Background Glow */}


<div

className="
absolute
w-[500px]
h-[500px]
bg-pink-500/10
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
grid
lg:grid-cols-2
gap-16
items-center
"

>







{/* IMAGE */}



<motion.div


initial={{

opacity:0,

x:-60

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





<div

className="
relative
rounded-[45px]
overflow-hidden
h-[520px]
border
border-white/10
"

>


<img


src="
https://images.unsplash.com/photo-1560066984-138dadb4c035
"


alt="Luxury Salon"


className="
w-full
h-full
object-cover
hover:scale-110
transition
duration-700
"

/>





<div

className="
absolute
inset-0
bg-gradient-to-t
from-black/70
to-transparent
"

/>



</div>








{/* Experience Card */}



<motion.div


animate={{

y:[0,-10,0]

}}



transition={{

duration:4,

repeat:Infinity

}}



className="
absolute
bottom-8
right-8
bg-black/80
backdrop-blur-xl
border
border-white/10
rounded-3xl
px-7
py-5
"

>


<h3

className="
text-4xl
font-black
text-yellow-400
"

>

10+

</h3>


<p

className="
text-gray-300
"

>

Years Experience

</p>


</motion.div>






</motion.div>













{/* CONTENT */}



<motion.div


initial={{

opacity:0,

x:60

}}



whileInView={{

opacity:1,

x:0

}}



viewport={{

once:true

}}

>





<p

className="
text-yellow-400
font-semibold
tracking-widest
"

>

ABOUT LUXE SALON

</p>








<h2

className="
text-5xl
sm:text-6xl
font-black
leading-tight
mt-5
"

>


Where Beauty

<span

className="
block
bg-gradient-to-r
from-yellow-400
to-pink-500
bg-clip-text
text-transparent
"

>

Meets Luxury

</span>


</h2>







<p

className="
text-gray-400
mt-6
text-lg
leading-relaxed
"

>


Luxe Salon provides premium beauty,
hair and skincare experiences designed
for modern clients. Our expert artists
combine creativity, technology and care
to deliver stunning transformations.

</p>








{/* Highlights */}



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
p-5
rounded-3xl
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
"

>





<div

className="
w-12
h-12
rounded-xl
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
font-bold
text-lg
mt-4
"

>

{item.title}

</h3>






<p

className="
text-sm
text-gray-400
mt-2
"

>

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