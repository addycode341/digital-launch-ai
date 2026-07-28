import { motion } from "framer-motion";
import {
  Award,
  ChefHat,
  Star,
  Crown
} from "lucide-react";



const skills=[

"French Cuisine",

"Italian Specialities",

"Modern Plating",

"Signature Recipes"

];





function ChefSection(){


return(


<section

className="
relative
py-28
px-5
sm:px-8
bg-black
overflow-hidden
"

>


{/* Glow */}

<div

className="
absolute
right-0
top-20
w-[500px]
h-[500px]
bg-yellow-500/10
blur-[150px]
rounded-full
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






{/* CHEF IMAGE */}



<motion.div


initial={{

opacity:0,

scale:.9

}}



whileInView={{

opacity:1,

scale:1

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
h-[520px]
rounded-[45px]
overflow-hidden
border
border-white/10
"

>


<img


src="
https://images.unsplash.com/photo-1577219491135-ce391730fb2c
"


alt="Professional Chef"


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
from-black
via-transparent
to-transparent
"

/>


</div>






{/* Award Badge */}



<motion.div


animate={{

y:[0,-12,0]

}}


transition={{

duration:4,

repeat:Infinity

}}



className="
absolute
top-8
right-8
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-5
"

>


<Crown

className="
text-yellow-400
"

/>


<p className="
font-bold
mt-2
">

Master Chef

</p>


<p className="
text-sm
text-gray-400
">

Award Winner

</p>



</motion.div>






{/* Experience */}



<div

className="
absolute
bottom-8
left-8
bg-black/80
backdrop-blur-xl
border
border-white/10
rounded-3xl
px-6
py-4
"

>


<p className="
text-yellow-400
font-black
text-3xl
">

15+

</p>


<p className="
text-gray-400
text-sm
">

Years Experience

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



<div

className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
bg-yellow-400/10
border
border-yellow-400/20
text-yellow-400
"

>

<ChefHat size={18}/>

Meet Our Chef

</div>







<h2

className="
text-5xl
sm:text-6xl
font-black
mt-6
leading-tight
"

>


Chef

<span className="
text-yellow-400
">

Alexander

</span>


</h2>





<p

className="
text-xl
text-gray-300
mt-4
"

>

Executive Chef & Culinary Artist

</p>






<div

className="
flex
gap-1
mt-5
text-yellow-400
"

>


{

[1,2,3,4,5].map((i)=>(

<Star

key={i}

fill="currentColor"

/>

))

}


</div>







<p

className="
text-gray-400
leading-relaxed
mt-8
text-lg
"

>


"Cooking is not just about ingredients,
it's about creating emotions and memories.
Every plate tells a story."


</p>








<div

className="
grid
sm:grid-cols-2
gap-4
mt-8
"

>


{

skills.map((skill,index)=>(


<motion.div


key={index}


whileHover={{

x:8

}}


className="
flex
items-center
gap-3
p-4
rounded-2xl
bg-white/[0.06]
border
border-white/10
"

>


<Award

size={20}

className="
text-yellow-400
"

/>


<span>

{skill}

</span>



</motion.div>


))


}


</div>







<button

className="
mt-10
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

View Chef Specials

</button>





</motion.div>





</div>


</section>


)

}


export default ChefSection;