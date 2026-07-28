import React from "react";
import { motion } from "framer-motion";


function Gallery(){


const images=[

{
title:"Customised Cakes",
image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=70"
},

{
title:"Fresh Pastries",
image:"https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=70"
},

{
title:"Birthday Celebrations",
image:"https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&q=70"
},

{
title:"Bakery Snacks",
image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=70"
},

{
title:"Biscuits & Rusk",
image:"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=70"
},

{
title:"Celebration Items",
image:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=70"
}

];




return(


<section

id="gallery"

className="
py-24
px-6
bg-[#FFF9F3]
scroll-mt-24
"

>


<div className="max-w-7xl mx-auto">



<div className="text-center mb-14">


<span
className="
inline-flex
px-5
py-2
rounded-full
bg-white
border
border-[#E8D3B5]
text-[#8B5E3C]
font-semibold
"
>

📸 Our Gallery

</span>




<h2

className="
mt-6
text-4xl
md:text-5xl
font-black
text-[#4A2518]
"

>

Sweet Moments

</h2>



<p

className="
mt-4
text-[#6B5140]
"

>

Fresh cakes, pastries and celebration moments.

</p>



</div>






<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
"

>


{

images.map((item,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
y:30
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true,
amount:0.2
}}


transition={{
duration:0.3
}}



className="
relative
h-[320px]
rounded-3xl
overflow-hidden
shadow-lg
group
"

>


<img

src={item.image}

loading="lazy"

alt={item.title}

className="
w-full
h-full
object-cover
transition
duration-300
group-hover:scale-105
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

></div>





<div

className="
absolute
bottom-6
left-6
text-white
"

>

<h3

className="
text-xl
font-bold
"

>

{item.title}

</h3>


<p className="text-sm">

Bake's N Bite's

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