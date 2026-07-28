import { motion } from "framer-motion";
import {
  Camera,
  Sparkles
} from "lucide-react";



const images=[

{
img:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
title:"Luxury Interior"
},


{
img:"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
title:"Signature Dishes"
},


{
img:"https://images.unsplash.com/photo-1552566626-52f8b828add9",
title:"Premium Dining"
},


{
img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
title:"Chef Specials"
},


{
img:"https://images.unsplash.com/photo-1513104890138-7c749659a591",
title:"Italian Collection"
},


{
img:"https://images.unsplash.com/photo-1547592180-85f173990554",
title:"Fresh Ingredients"
}


];






function Gallery(){


return(


<section

id="gallery"

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
w-[450px]
h-[450px]
bg-yellow-500/10
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
"

>






{/* Heading */}



<motion.div


initial={{

opacity:0,

y:40

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
mb-16
"

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


<Camera size={18}/>

Our Gallery


</div>





<h2

className="
text-5xl
sm:text-6xl
font-black
mt-6
"

>


Moments

<span className="
text-yellow-400
">

&
Flavours

</span>


</h2>





<p

className="
text-gray-400
mt-5
text-lg
max-w-2xl
mx-auto
"

>

A visual journey of our restaurant,
signature dishes and unforgettable dining experiences.

</p>



</motion.div>









{/* Gallery Grid */}



<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-7
"

>


{

images.map((item,index)=>(


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

delay:index*.12

}}



whileHover={{

y:-10

}}




className="
group
relative
h-80
rounded-[35px]
overflow-hidden
border
border-white/10
"

>



<img


src={item.img}

alt={item.title}


className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"


/>






{/* Overlay */}


<div

className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/20
to-transparent
opacity-70
"

></div>







{/* Floating Label */}



<motion.div


initial={{

opacity:0,

y:20

}}


whileHover={{

opacity:1,

y:0

}}



className="
absolute
bottom-6
left-6
right-6
"

>


<div

className="
flex
items-center
gap-2
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-2xl
px-5
py-3
"

>


<Sparkles

size={18}

className="
text-yellow-400
"

/>


<span className="
font-semibold
">

{item.title}

</span>


</div>


</motion.div>







</motion.div>


))


}



</div>







</div>



</section>


)

}


export default Gallery;