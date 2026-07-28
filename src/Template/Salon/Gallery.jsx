import { motion } from "framer-motion";

import {
  Sparkles
} from "lucide-react";





const galleryImages=[


{
image:
"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",

title:"Hair Styling"
},



{
image:
"https://images.unsplash.com/photo-1560066984-138dadb4c035",

title:"Luxury Interior"
},



{
image:
"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",

title:"Beauty Makeup"
},



{
image:
"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8",

title:"Skin Care"
},



{
image:
"https://images.unsplash.com/photo-1544161515-4ab6ce6db874",

title:"Spa Experience"
},



{
image:
"https://images.unsplash.com/photo-1562322140-8baeececf3df",

title:"Professional Styling"
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
bg-[#080808]
overflow-hidden
"

>






<div

className="
absolute
w-[500px]
h-[500px]
bg-pink-500/10
blur-[150px]
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
"

>









{/* HEADER */}




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
bg-pink-500/10
border
border-pink-400/20
text-pink-400
"

>


<Sparkles size={18}/>


Salon Moments


</div>







<h2

className="
text-5xl
sm:text-6xl
font-black
mt-6
"

>


Our Beauty


<span

className="
text-yellow-400
"

>

Gallery

</span>


</h2>







<p

className="
text-gray-400
mt-5
max-w-xl
mx-auto
"

>


A glimpse of luxury makeovers,
beautiful moments and premium experiences.

</p>





</motion.div>













{/* MASONRY GRID */}





<div

className="
columns-1
sm:columns-2
lg:columns-3
gap-6
space-y-6
"

>





{

galleryImages.map((item,index)=>(



<motion.div


key={index}



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



transition={{

delay:index*.12

}}



whileHover={{

y:-10

}}



className="
group
relative
break-inside-avoid
rounded-[35px]
overflow-hidden
border
border-white/10
bg-white/[0.06]
"

>






<img


src={item.image}

alt={item.title}

className="
w-full
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
opacity-0
group-hover:opacity-100
transition
duration-500
"

 />









<div

className="
absolute
bottom-5
left-5
right-5
opacity-0
group-hover:opacity-100
transition
duration-500
"

>


<div

className="
flex
items-center
gap-2
text-yellow-400
font-bold
"

>

<Sparkles size={18}/>

{item.title}

</div>


<p

className="
text-sm
text-gray-300
mt-1
"

>

Luxury Beauty Experience

</p>



</div>









</motion.div>




))


}





</div>









</div>





</section>


)

}



export default Gallery;