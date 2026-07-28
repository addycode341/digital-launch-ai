import React from "react";
import { motion } from "framer-motion";



function Gallery(){


const images=[


{
title:"Luxury Visiting Cards",
category:"UV Printing",
image:
"https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80"
},


{
title:"Premium Packaging",
category:"Custom Packaging",
image:
"https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?auto=format&fit=crop&w=900&q=80"
},


{
title:"Business Stationery",
category:"Corporate Printing",
image:
"https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80"
},


{
title:"Creative Brand Designs",
category:"Brand Identity",
image:
"https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80"
},


{
title:"Premium Print Finish",
category:"Luxury Printing",
image:
"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=900&q=80"
},


{
title:"Custom Products",
category:"Customized Solutions",
image:
"https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=900&q=80"
}



];






return(


<section

id="gallery"

className="
bg-[#050505]
py-24
px-6
lg:px-8
relative
overflow-hidden
"

>



<div

className="
absolute
right-0
top-20
w-96
h-96
bg-[#D4AF37]/10
blur-[120px]
rounded-full
"

/>







<div

className="
max-w-7xl
mx-auto
relative
z-10
"

>






{/* HEADER */}



<motion.div


initial={{

opacity:0,
y:30

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
max-w-3xl
mx-auto
"

>


<p

className="
text-[#D4AF37]
uppercase
tracking-[4px]
font-bold
text-sm
"

>

OUR PORTFOLIO

</p>





<h2

className="
mt-5
text-4xl
md:text-5xl
font-black
text-white
"

>

Our Premium Printing Work

</h2>





<p

className="
mt-5
text-gray-400
text-lg
"

>

Explore our latest printing projects,
creative designs and premium finishing work.

</p>




</motion.div>









{/* GALLERY GRID */}





<div

className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-6
mt-14
"

>




{

images.map((item,index)=>(


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

duration:.5,
delay:index*.1

}}



whileHover={{

y:-10

}}



className="
group
relative
h-[350px]
rounded-3xl
overflow-hidden
border
border-white/10
"

>




<img

src={item.image}

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
"

>

</div>







<div

className="
absolute
bottom-0
left-0
right-0
p-6
"

>


<p

className="
text-[#D4AF37]
text-sm
font-semibold
"

>

{item.category}

</p>




<h3

className="
text-white
text-xl
font-bold
mt-2
"

>

{item.title}

</h3>



<p

className="
text-gray-400
text-sm
mt-2
"

>

INDIA ENTERPRISE

</p>



</div>







</motion.div>



))


}



</div>









{/* CTA */}



<motion.div


initial={{

opacity:0,
y:30

}}


whileInView={{

opacity:1,
y:0

}}


viewport={{

once:true

}}



className="
mt-16
text-center
bg-white/5
border
border-white/10
rounded-3xl
p-8
"

>



<h3

className="
text-2xl
md:text-3xl
font-black
text-white
"

>

Want Similar Premium Printing?

</h3>



<p

className="
mt-3
text-gray-400
"

>

Let's create professional products
for your business brand.

</p>




<button

className="
mt-6
px-8
py-3
rounded-full
bg-gradient-to-r
from-[#D4AF37]
to-orange-500
text-black
font-bold
"

>

Get Quote

</button>




</motion.div>







</div>



</section>


)

}


export default Gallery;