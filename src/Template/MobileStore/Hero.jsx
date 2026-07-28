import { motion } from "framer-motion";

import {
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  Zap
} from "lucide-react";





function Hero({data}){


return(


<section

id="home"

className="
relative
min-h-screen
flex
items-center
overflow-hidden
bg-black
px-4
sm:px-8
pt-28
pb-20
"

>





{/* GLOW */}


<div

className="
absolute
top-20
right-[-120px]
w-[280px]
h-[280px]
sm:w-[500px]
sm:h-[500px]
bg-blue-600/20
blur-[100px]
rounded-full
"

></div>




<div

className="
absolute
bottom-0
left-[-120px]
w-[250px]
h-[250px]
sm:w-[350px]
sm:h-[350px]
bg-purple-600/20
blur-[100px]
rounded-full
"

></div>









<div

className="
relative
max-w-7xl
mx-auto
grid
lg:grid-cols-2
gap-10
items-center
w-full
"

>










{/* CONTENT */}



<motion.div


initial={{
opacity:0,
x:-40
}}


animate={{
opacity:1,
x:0
}}


transition={{
duration:.7
}}

>



<p

className="
text-blue-400
tracking-[3px]
text-xs
sm:text-sm
font-semibold
"

>

PREMIUM MOBILE STORE

</p>






<h1

className="
mt-5
text-3xl
sm:text-5xl
lg:text-7xl
font-black
leading-tight
"

>

Your Next


<span

className="
block
bg-gradient-to-r
from-blue-400
via-purple-500
to-pink-500
bg-clip-text
text-transparent
"

>

Smartphone Experience

</span>


</h1>








<p

className="
mt-5
text-gray-400
text-sm
sm:text-lg
max-w-xl
leading-relaxed
"

>


{
data?.description ||

"Premium smartphone store offering latest iPhone, Samsung and Android devices with accessories, repair and customer support."
}



</p>









<div

className="
flex
flex-col
sm:flex-row
gap-4
mt-8
"

>


<button

className="
w-full
sm:w-auto
px-7
py-4
rounded-full
bg-gradient-to-r
from-blue-500
to-purple-600
font-bold
flex
justify-center
items-center
gap-3
"

>


<ShoppingBag size={20}/>

Shop Now


</button>





<button

className="
w-full
sm:w-auto
px-7
py-4
rounded-full
border
border-white/20
bg-white/5
font-bold
flex
justify-center
items-center
gap-3
"

>

Explore

<ArrowRight size={20}/>


</button>



</div>









{/* TRUST */}



<div

className="
grid
grid-cols-1
sm:grid-cols-2
gap-3
mt-8
max-w-md
"

>




<div

className="
p-4
rounded-2xl
bg-white/[0.06]
border
border-white/10
"

>


<ShieldCheck
className="text-green-400"
/>


<p

className="
font-bold
mt-2
"

>

100% Genuine

</p>


<p

className="
text-sm
text-gray-400
"

>

Products

</p>



</div>








<div

className="
p-4
rounded-2xl
bg-white/[0.06]
border
border-white/10
"

>


<Zap

className="text-yellow-400"

/>


<p

className="
font-bold
mt-2
"

>

Fast Delivery

</p>


<p

className="
text-sm
text-gray-400
"

>

Across City

</p>


</div>





</div>





</motion.div>













{/* PHONE */}



<motion.div


initial={{

opacity:0,
scale:.8

}}


animate={{

opacity:1,
scale:1

}}


transition={{

duration:.8

}}


className="
relative
flex
justify-center
items-center
"

>





<motion.img


src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab"


alt="Smartphone"


animate={{

y:[0,-12,0]

}}


transition={{

duration:4,
repeat:Infinity

}}



className="
w-[180px]
sm:w-[280px]
lg:w-[420px]
max-w-full
rounded-[35px]
drop-shadow-2xl
"

 />










{/* BADGE */}



<motion.div


animate={{

y:[0,-8,0]

}}


transition={{

duration:3,
repeat:Infinity

}}



className="
absolute
top-5
right-0
sm:right-5
p-3
sm:p-4
rounded-3xl
bg-white/10
border
border-white/20
backdrop-blur-xl
"

>



<p

className="
text-blue-400
font-black
text-base
sm:text-lg
"

>

NEW

</p>



<p

className="
text-xs
text-gray-300
"

>

Latest Launch

</p>



</motion.div>






</motion.div>







</div>




</section>


)

}


export default Hero;