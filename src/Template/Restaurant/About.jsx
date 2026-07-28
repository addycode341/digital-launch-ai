import { motion } from "framer-motion";
import {
  ChefHat,
  Award,
  Users,
  Utensils,
  Sparkles
} from "lucide-react";



const highlights=[

{
icon:<ChefHat size={26}/>,
title:"Expert Chefs",
text:"Master chefs creating signature dishes with passion."
},


{
icon:<Award size={26}/>,
title:"Premium Quality",
text:"Fresh ingredients selected for exceptional taste."
},


{
icon:<Users size={26}/>,
title:"10K+ Guests",
text:"Loved by thousands of happy dining customers."
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
bg-[#080808]
overflow-hidden
"

>



{/* Background Glow */}

<div

className="
absolute
w-[500px]
h-[500px]
bg-yellow-500/10
blur-[160px]
rounded-full
left-0
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





{/* IMAGE SIDE */}



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
h-[520px]
rounded-[45px]
overflow-hidden
border
border-white/10
"

>


<img

src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"

alt="Restaurant Interior"

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
via-black/20
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


<h3 className="
text-4xl
font-black
text-yellow-400
">

10+

</h3>


<p className="
text-gray-300
text-sm
">

Years Experience

</p>


</motion.div>









{/* Rating Card */}



<div

className="
absolute
top-8
left-8
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-2xl
px-5
py-4
"

>


<div className="
flex
items-center
gap-2
text-yellow-400
"

>

⭐ 4.9

</div>


<p className="
text-xs
text-gray-300
mt-1
">

Customer Rating

</p>


</div>




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

<Sparkles size={18}/>

About Our Restaurant

</div>





<h2

className="
text-5xl
sm:text-6xl
font-black
leading-tight
mt-6
"

>


Creating

<span className="
block
text-yellow-400
">

Unforgettable Flavours

</span>


</h2>





<p

className="
text-gray-400
text-lg
leading-relaxed
mt-6
"

>


Royal Taste brings together traditional recipes and modern
culinary techniques to create a premium dining experience.
Every dish is prepared with passion, creativity and the finest
ingredients.

</p>







<div

className="
grid
sm:grid-cols-3
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
bg-yellow-400/20
text-yellow-400
flex
items-center
justify-center
mb-4
"

>

{item.icon}

</div>



<h3 className="
font-bold
"

>

{item.title}

</h3>



<p className="
text-gray-400
text-sm
mt-2
leading-relaxed
"

>

{item.text}

</p>



</motion.div>


))


}



</div>





<button

className="
mt-10
flex
items-center
gap-2
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


<Utensils size={20}/>

Explore Our Menu


</button>





</motion.div>





</div>



</section>


)

}


export default About;