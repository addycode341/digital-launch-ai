import React from "react";
import { motion } from "framer-motion";

import {
  Cake,
  Cookie,
  Sandwich,
  Gift
} from "lucide-react";

import bakeryData from "../../data/bakeryDemo";



function Categories(){



const icons=[

<Cake size={32}/>,

<Sandwich size={32}/>,

<Cookie size={32}/>,

<Gift size={32}/>

];





return(


<section

id="categories"

className="
py-28

px-6

md:px-12

bg-white

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

bg-[#FFF3E6]

text-[#8B5E3C]

font-semibold

"

>

🍰 Explore Categories

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

Our Bakery Collection

</h2>








<p

className="
mt-5

text-[#6B5140]

text-lg

max-w-2xl

mx-auto

"

>

Choose from our fresh cakes,
snacks and celebration products.

</p>



</div>









{/* CATEGORY CARDS */}




<div

className="
grid

sm:grid-cols-2

lg:grid-cols-4

gap-8

"

>



{


bakeryData.categories.map((category,index)=>(


<motion.div


key={category.name}


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
bg-[#FFF9F3]

rounded-[35px]

p-8

border

border-[#E8D3B5]

hover:shadow-xl

transition

"

>





<div

className="
w-16

h-16

rounded-2xl

bg-white

text-[#8B5E3C]

flex

items-center

justify-center

shadow-sm

"

>


{icons[index]}


</div>







<h3

className="
mt-6

text-2xl

font-black

text-[#4A2518]

"

>

{category.name}

</h3>







<ul

className="
mt-5

space-y-2

text-[#6B5140]

"

>


{

category.items.map((item,i)=>(


<li

key={i}

className="
text-sm

"

>

• {item}

</li>


))


}



</ul>






</motion.div>



))


}




</div>






</div>



</section>


)

}



export default Categories;