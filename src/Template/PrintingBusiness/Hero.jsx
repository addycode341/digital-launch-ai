import React from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  CheckCircle,
  Printer
} from "lucide-react";



function Hero(){


return(


<section

id="home"

className="
relative
min-h-screen
bg-[#050505]
text-white
overflow-hidden
flex
items-center
pt-32
pb-20
"

>



<div

className="
max-w-7xl
mx-auto
px-6
lg:px-8
w-full
"

>



<div

className="
grid
lg:grid-cols-2
gap-14
items-center
"

>








{/* LEFT CONTENT */}



<motion.div


initial={{

opacity:0,
x:-50

}}


animate={{

opacity:1,
x:0

}}



transition={{

duration:.8

}}


>






<div

className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
bg-white/5
border
border-white/10
text-sm
text-gray-300
mb-6
"

>


<Sparkles size={16}/>


INDIA ENTERPRISE


</div>









<h1

className="
text-5xl
md:text-6xl
lg:text-7xl
font-black
leading-[1.05]
"

>


Premium Printing

<br/>


<span className="
text-[#D4AF37]
">

Solutions For

</span>


<br/>


Modern Businesses


</h1>







<p

className="
mt-6
text-gray-400
text-lg
max-w-xl
leading-relaxed
"

>


We create premium visiting cards,
packaging, stationery & UV printing
solutions that make your brand stand out.


</p>







<div

className="
flex
flex-wrap
gap-4
mt-8
"

>





<button

className="
flex
items-center
gap-2
bg-gradient-to-r
from-[#D4AF37]
to-orange-500
text-black
px-7
py-4
rounded-xl
font-bold
hover:scale-105
transition
"

>


Get Quote


<ArrowRight size={18}/>


</button>







<button

className="
flex
items-center
gap-2
border
border-white/20
px-7
py-4
rounded-xl
hover:bg-white/10
transition
"

>


<MessageCircle size={18}/>


WhatsApp


</button>




</div>








<div

className="
mt-10
flex
items-center
gap-3
text-gray-300
"

>


<CheckCircle

className="
text-[#D4AF37]
"

/>


Premium Quality • Fast Delivery • Trusted Service


</div>





</motion.div>









{/* RIGHT IMAGE */}




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

duration:1

}}



className="
relative
flex
justify-center
"

>




<motion.div


animate={{

y:[0,-15,0]

}}



transition={{

duration:4,
repeat:Infinity,
ease:"easeInOut"

}}



className="
relative
w-[320px]
md:w-[450px]
h-[430px]
rounded-[40px]
overflow-hidden
border
border-white/10
shadow-2xl
"

>




<img

src="
https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=900&q=80
"

alt="Premium Printing"


className="
w-full
h-full
object-cover
"

/>





<div

className="
absolute
inset-0
bg-gradient-to-t
from-black/70
via-transparent
to-transparent
"

/>



</motion.div>









{/* FLOAT CARD */}



<motion.div


animate={{

y:[0,10,0]

}}


transition={{

duration:3,
repeat:Infinity

}}



className="
absolute
bottom-8
left-0
md:-left-10
bg-white
text-black
rounded-3xl
p-5
shadow-2xl
"

>



<div

className="
flex
items-center
gap-3
font-bold
"

>


<div

className="
w-10
h-10
rounded-xl
bg-yellow-400
flex
items-center
justify-center
"

>


<Printer size={20}/>


</div>



Premium Card Printing



</div>





<p

className="
text-sm
text-gray-500
mt-3
"

>


UV + 3D Luxury Finish


</p>



</motion.div>







</motion.div>






</div>









{/* STATS */}



<div

className="
grid
grid-cols-3
gap-5
mt-20
border-t
border-white/10
pt-10
"

>



<div className="text-center">

<h3 className="
text-2xl
font-black
text-[#D4AF37]
">

10K+

</h3>

<p className="
text-gray-400
text-sm
">

Projects

</p>

</div>




<div className="
text-center
border-x
border-white/10
">

<h3 className="
text-2xl
font-black
text-[#D4AF37]
">

15+

</h3>

<p className="
text-gray-400
text-sm
">

Years Experience

</p>


</div>





<div className="text-center">

<h3 className="
text-2xl
font-black
text-[#D4AF37]
">

100%

</h3>

<p className="
text-gray-400
text-sm
">

Quality

</p>


</div>



</div>








</div>



</section>


)

}


export default Hero;