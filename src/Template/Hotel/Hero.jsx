import { motion } from "framer-motion";

import {
  CalendarCheck,
  Star,
  ArrowRight,
  MapPin,
  Wifi,
  ShieldCheck
} from "lucide-react";





function Hero({data}){


return(


<section

className="
relative
min-h-screen
flex
items-center
overflow-hidden
"

>


{/* BACKGROUND */}


<div className="
absolute
inset-0
">


<img

src="
https://images.unsplash.com/photo-1566073771259-6a8506099945
"

alt="Luxury Hotel"

className="
w-full
h-full
object-cover
scale-105
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
to-black/20
"

/>



</div>








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
duration:.9
}}


className="
max-w-4xl
"

>





{/* BADGE */}


<div

className="
inline-flex
items-center
gap-3
px-5
py-3
rounded-full
bg-yellow-400/10
border
border-yellow-400/30
text-yellow-400
backdrop-blur-xl
"

>


<Star

size={18}

fill="currentColor"

/>


Luxury 5 Star Hospitality


</div>







<h1

className="
text-5xl
sm:text-7xl
lg:text-8xl
font-black
leading-[1.05]
mt-8
"

>


{

data?.businessName ||

"Royal Stay Hotel"

}



<span

className="
block
bg-gradient-to-r
from-yellow-400
via-orange-400
to-yellow-500
bg-clip-text
text-transparent
"

>

Experience Luxury Living

</span>



</h1>









<p

className="
mt-7
text-lg
sm:text-xl
text-gray-300
max-w-2xl
leading-relaxed
"

>


{

data?.description ||

"Discover elegant rooms, world-class dining and unforgettable hospitality crafted for luxury travelers."

}



</p>









<div

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
to-orange-500
text-black
font-bold
hover:scale-105
transition
"

>


<CalendarCheck size={20}/>


Book Your Stay


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
font-semibold
hover:bg-white/20
transition
"

>


Explore Rooms


<ArrowRight size={20}/>


</button>



</div>






{/* FEATURES */}


<div

className="
flex
flex-wrap
gap-5
mt-12
"

>


<div

className="
flex
items-center
gap-3
bg-white/10
border
border-white/10
backdrop-blur-xl
rounded-2xl
px-5
py-3
"

>


<MapPin

size={18}

className="text-yellow-400"

/>


Delhi, India


</div>






<div

className="
flex
items-center
gap-3
bg-white/10
border
border-white/10
backdrop-blur-xl
rounded-2xl
px-5
py-3
"

>


<Wifi

size={18}

className="text-yellow-400"

/>


Free WiFi


</div>







<div

className="
flex
items-center
gap-3
bg-white/10
border
border-white/10
backdrop-blur-xl
rounded-2xl
px-5
py-3
"

>


<ShieldCheck

size={18}

className="text-yellow-400"

/>


Secure Stay


</div>



</div>





</motion.div>










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
p-6
rounded-[30px]
bg-white/10
border
border-white/20
backdrop-blur-2xl
"

>


<div

className="
w-16
h-16
rounded-full
bg-yellow-400
flex
items-center
justify-center
text-black
"

>


<Star

fill="black"

/>


</div>




<div>


<h3 className="
text-3xl
font-black
">

4.9

</h3>


<p className="
text-gray-300
text-sm
">

Google Rating

</p>


</div>



</motion.div>









{/* AVAILABILITY CARD */}



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
lg:block
absolute
left-10
bottom-16
bg-black/50
border
border-white/10
backdrop-blur-xl
rounded-3xl
p-6
"

>


<p className="
text-yellow-400
font-bold
">

Rooms Available

</p>


<h3 className="
text-3xl
font-black
mt-2
">

120+

</h3>


<p className="
text-gray-400
text-sm
">

Luxury Rooms Ready

</p>


</motion.div>





</div>





</section>


)

}


export default Hero;