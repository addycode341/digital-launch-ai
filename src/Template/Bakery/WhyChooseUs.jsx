import React from "react";
import { motion } from "framer-motion";

import {
  Heart,
  Cake,
  Sparkles,
  Gift
} from "lucide-react";



function WhyChooseUs(){



const features=[


{
icon:<Cake size={30}/>,
title:"Freshly Baked",

text:
"Fresh cakes, pastries and bakery items prepared with quality ingredients."
},



{
icon:<Sparkles size={30}/>,
title:"Custom Designs",

text:
"Beautiful customised cakes designed specially for your celebrations."
},




{
icon:<Heart size={30}/>,
title:"Quality Taste",

text:
"Delicious flavours with perfect taste that makes every moment special."
},





{
icon:<Gift size={30}/>,
title:"Celebration Support",

text:
"Birthday decoration items and bakery products for every occasion."
}


];







return(


<section


className="
py-28

px-6

md:px-12

bg-[#FFF9F3]

"


>


<div

className="
max-w-7xl

mx-auto

"

>






{/* HEADER */}



<div

className="
text-center

mb-16

"

>


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

✨ Why Choose Us

</span>







<h2

className="
mt-6

text-4xl

md:text-6xl

font-black

text-[#4A2518]

"

>

Made With Love & Care

</h2>







<p

className="
mt-5

text-[#6B5140]

max-w-2xl

mx-auto

text-lg

"

>

At Bake's N Bite's, we create delicious
bakery experiences for every celebration.

</p>



</div>









{/* CARDS */}




<div

className="
grid

sm:grid-cols-2

lg:grid-cols-4

gap-8

"

>


{


features.map((item,index)=>(


<motion.div


key={index}


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



transition={{

duration:.5,

delay:index*0.1

}}



whileHover={{

y:-10

}}



className="
bg-white

rounded-[35px]

p-8

border

border-[#E8D3B5]

shadow-sm

hover:shadow-xl

transition

"

>





<div

className="
w-16

h-16

rounded-2xl

bg-[#FFF3E6]

text-[#8B5E3C]

flex

items-center

justify-center

"

>

{item.icon}

</div>








<h3

className="
mt-6

text-xl

font-black

text-[#4A2518]

"

>

{item.title}

</h3>








<p

className="
mt-3

text-[#6B5140]

leading-relaxed

"

>

{item.text}

</p>






</motion.div>


))


}



</div>







</div>


</section>


)

}



export default WhyChooseUs;