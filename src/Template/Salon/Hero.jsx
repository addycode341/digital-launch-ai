import { motion } from "framer-motion";

import {
  Star,
  CalendarCheck,
  ArrowRight,
  Sparkles,
  Clock
} from "lucide-react";





function Hero(){


return(


<section

id="home"

className="
relative
min-h-screen
flex
items-center
overflow-hidden
"

>







{/* BACKGROUND */}



<div

className="
absolute
inset-0
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
"

 />





<div

className="
absolute
inset-0
bg-black/70
"

/>





<div

className="
absolute
inset-0
bg-gradient-to-r
from-black
via-black/70
to-transparent
"

/>





</div>









{/* MOVING GLOW */}



<motion.div


animate={{

x:[0,80,0],

y:[0,50,0]

}}


transition={{

duration:12,

repeat:Infinity

}}


className="
absolute
w-[450px]
h-[450px]
bg-pink-500/20
blur-[140px]
rounded-full
top-20
right-0
"

/>








<motion.div


animate={{

x:[0,-50,0],

y:[0,40,0]

}}


transition={{

duration:10,

repeat:Infinity

}}


className="
absolute
w-[350px]
h-[350px]
bg-yellow-400/20
blur-[120px]
rounded-full
bottom-10
left-10
"

/>














{/* CONTENT */}



<div

className="
relative
z-10
max-w-7xl
mx-auto
px-5
sm:px-8
w-full
"

>


<div

className="
max-w-3xl
"

>







<motion.div


initial={{

opacity:0,

y:-30

}}



animate={{

opacity:1,

y:0

}}



transition={{

duration:.8

}}



className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
bg-yellow-400/10
border
border-yellow-400/30
text-yellow-400
font-semibold
"

>


<Sparkles size={18}/>


Premium Beauty Experience


</motion.div>









<motion.h1


initial={{

opacity:0,

y:40

}}


animate={{

opacity:1,

y:0

}}


transition={{

delay:.2,

duration:.8

}}



className="
text-5xl
sm:text-6xl
lg:text-8xl
font-black
leading-tight
mt-7
"

>


Your Beauty,

<span

className="
block
bg-gradient-to-r
from-yellow-400
via-pink-400
to-yellow-500
bg-clip-text
text-transparent
"

>

Our Passion

</span>



</motion.h1>









<motion.p


initial={{

opacity:0,

y:40

}}


animate={{

opacity:1,

y:0

}}



transition={{

delay:.4

}}



className="
mt-6
text-lg
sm:text-xl
text-gray-300
max-w-xl
leading-relaxed
"

>


Experience luxury hair styling,
bridal makeup and premium skincare
services by expert beauty artists.

</motion.p>











{/* BUTTONS */}



<motion.div


initial={{

opacity:0,

y:30

}}


animate={{

opacity:1,

y:0

}}


transition={{

delay:.6

}}



className="
flex
flex-wrap
gap-5
mt-10
"

>


<button

className="
flex
items-center
gap-3
px-8
py-4
rounded-full
bg-gradient-to-r
from-yellow-400
to-pink-500
text-black
font-black
hover:scale-105
transition
"

>


<CalendarCheck size={20}/>


Book Appointment


</button>







<button

className="
flex
items-center
gap-3
px-8
py-4
rounded-full
bg-white/10
border
border-white/20
backdrop-blur-xl
font-bold
hover:bg-white/20
transition
"

>


Explore Services


<ArrowRight size={20}/>


</button>






</motion.div>









</div>










{/* RATING CARD */}



<motion.div


initial={{

opacity:0,

x:100

}}


animate={{

opacity:1,

x:0

}}



transition={{

delay:1

}}



className="
hidden
lg:flex
absolute
right-10
bottom-36
items-center
gap-4
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
px-6
py-5
"

>





<div

className="
w-14
h-14
rounded-full
bg-yellow-400
flex
items-center
justify-center
"

>


<Star

size={26}

fill="black"

className="
text-black
"

/>


</div>






<div>


<h3

className="
text-2xl
font-black
"

>


4.9/5


</h3>



<p

className="
text-gray-300
text-sm
"

>

5000+ Happy Clients

</p>


</div>




</motion.div>









{/* OPEN HOURS */}



<motion.div


initial={{

opacity:0,

y:50

}}



animate={{

opacity:1,

y:0

}}



transition={{

delay:1.2

}}



className="
hidden
lg:flex
absolute
left-10
bottom-20
items-center
gap-4
bg-black/50
backdrop-blur-xl
border
border-white/10
rounded-3xl
px-6
py-4
"

>


<Clock

className="
text-yellow-400
"

/>


<div>


<p className="
text-gray-400
text-sm
">

Open Today

</p>


<p className="
font-bold
">

10 AM - 9 PM

</p>


</div>


</motion.div>









</div>







</section>


)

}



export default Hero;