import { motion } from "framer-motion";

import {
  Star,
  Clock,
  ArrowRight,
  CalendarCheck,
  ChefHat,
  Users
} from "lucide-react";




function Hero(){


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



<div

className="
absolute
inset-0
"

>


<motion.img


initial={{
scale:1
}}


animate={{
scale:1.1
}}


transition={{
duration:15,
repeat:Infinity,
repeatType:"reverse"
}}



src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"

alt="Luxury Restaurant"

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
via-black/80
to-transparent
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

<ChefHat size={18}/>

Luxury Dining Experience


</motion.div>








<motion.h1


initial={{
opacity:0,
y:50
}}


animate={{
opacity:1,
y:0
}}



transition={{
delay:.2
}}



className="
text-5xl
sm:text-7xl
lg:text-8xl
font-black
leading-tight
mt-8
"

>


Where Every


<span

className="
block
text-yellow-400
"

>

Dish Tells A Story

</span>



</motion.h1>








<motion.p


initial={{
opacity:0,
y:30
}}


animate={{
opacity:1,
y:0
}}


transition={{
delay:.4
}}



className="
text-gray-300
text-lg
sm:text-xl
mt-6
max-w-xl
leading-relaxed
"

>


Experience chef-crafted cuisine,
premium ingredients and unforgettable
moments with your loved ones.

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
to-orange-500
text-black
font-black
hover:scale-110
transition
shadow-xl
"

>


<CalendarCheck size={20}/>

Reserve Table


</button>







<button

className="
flex
items-center
gap-3
px-8
py-4
rounded-full
border
border-white/20
bg-white/10
backdrop-blur-xl
font-bold
hover:bg-white/20
transition
"

>


View Menu

<ArrowRight size={20}/>


</button>




</motion.div>






</div>











{/* RATING CARD */}




<motion.div


initial={{
opacity:0,
x:80
}}


animate={{
opacity:1,
x:0
}}



transition={{
delay:1
}}



className="
absolute
right-10
top-32
hidden
lg:flex
items-center
gap-4
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-5
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

className="
fill-black
text-black
"

/>


</div>





<div>

<h3 className="
text-2xl
font-black
">

4.9

</h3>


<p className="
text-gray-300
text-sm
">

Customer Rating

</p>


</div>



</motion.div>









{/* STATS */}




<div

className="
absolute
bottom-20
right-10
hidden
lg:flex
gap-5
"

>



<div

className="
bg-black/50
backdrop-blur-xl
border
border-white/10
rounded-3xl
px-6
py-5
"

>


<div className="
flex
items-center
gap-3
"

>

<Users className="text-yellow-400"/>


<h3 className="
font-bold
text-xl
">

10K+

</h3>


</div>


<p className="
text-gray-400
text-sm
mt-2
">

Happy Guests

</p>


</div>








<div

className="
bg-black/50
backdrop-blur-xl
border
border-white/10
rounded-3xl
px-6
py-5
"

>


<div className="
flex
items-center
gap-3
"

>

<Clock className="text-yellow-400"/>


<h3 className="
font-bold
text-xl
">

12-11

</h3>


</div>


<p className="
text-gray-400
text-sm
mt-2
">

Open Daily

</p>


</div>



</div>






</div>






</section>


)

}


export default Hero;