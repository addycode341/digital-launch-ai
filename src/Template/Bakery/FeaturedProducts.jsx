import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

import bakeryData from "../../data/bakeryDemo";



function FeaturedProducts(){



return(


<section

id="products"

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





{/* Heading */}



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

🍰 Our Menu

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

Freshly Baked Favorites

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

From customised cakes to bakery snacks,
everything is prepared fresh for your special moments.

</p>



</div>









{/* PRODUCTS GRID */}




<div

className="
grid

sm:grid-cols-2

lg:grid-cols-3

gap-10

"

>



{


bakeryData.products.map((product,index)=>(



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
bg-[#FFF9F3]

rounded-[35px]

overflow-hidden

border

border-[#E8D3B5]

shadow-sm

hover:shadow-xl

transition

"

>






{/* IMAGE */}



<div

className="
relative

h-72

overflow-hidden

"

>


<img

src={product.image}

alt={product.name}

className="
w-full

h-full

object-cover

hover:scale-110

transition

duration-700

"

/>






<div

className="
absolute

top-5

left-5

bg-white

px-4

py-2

rounded-full

text-sm

font-bold

text-[#4A2518]

shadow

"

>

Fresh

</div>



</div>










{/* CONTENT */}



<div

className="
p-7

"

>


<h3

className="
text-2xl

font-black

text-[#4A2518]

"

>

{product.name}

</h3>






<div

className="
flex

items-center

gap-2

mt-3

"

>


<div

className="
flex

text-[#C89B5B]

"

>


{

[1,2,3,4,5].map((star)=>(


<Star

key={star}

size={16}

fill="currentColor"

/>


))

}


</div>


<span

className="
text-sm

text-gray-500

"

>

4.9

</span>



</div>







<p

className="
mt-4

text-[#6B5140]

leading-relaxed

"

>

Freshly prepared with quality ingredients
for delicious taste and beautiful presentation.

</p>







<div

className="
mt-6

flex

items-center

justify-between

"

>


<span

className="
font-black

text-[#8B5E3C]

"

>

{product.price}

</span>






<a

href={`https://wa.me/${bakeryData.whatsapp}`}

target="_blank"

rel="noreferrer"

className="
flex

items-center

gap-2

bg-[#4A2518]

text-white

px-5

py-3

rounded-full

font-bold

text-sm

"

>

Order

<ArrowRight size={16}/>

</a>



</div>






</div>







</motion.div>



))


}



</div>








</div>



</section>


)

}


export default FeaturedProducts;