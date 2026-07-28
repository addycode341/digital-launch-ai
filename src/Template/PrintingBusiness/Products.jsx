import React from "react";
import { motion } from "framer-motion";

import {
  CreditCard,
  FileText,
  Package,
  Briefcase,
  ShoppingBag,
  Sparkles,
  ArrowRight
} from "lucide-react";



function Products(){


const products=[


{
image:
"https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80",

icon:<CreditCard size={25}/>,

title:"Premium Visiting Cards",

text:
"Luxury visiting cards with UV printing, 3D effects and premium finishing."
},



{
image:
"https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=80",

icon:<FileText size={25}/>,

title:"Brochures & Flyers",

text:
"Professional marketing materials designed to showcase your business."
},



{
image:
"https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?auto=format&fit=crop&w=900&q=80",

icon:<Package size={25}/>,

title:"Custom Packaging",

text:
"Creative packaging solutions with attractive designs and premium printing."
},



{
image:
"https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80",

icon:<Briefcase size={25}/>,

title:"Corporate Stationery",

text:
"Complete office branding including folders, letterheads and envelopes."
},



{
image:
"https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=900&q=80",

icon:<ShoppingBag size={25}/>,

title:"Leather Products",

text:
"Premium leather products with customized business branding."
},



{
image:
"https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",

icon:<Sparkles size={25}/>,

title:"Customized Products",

text:
"Unique printing solutions according to your brand requirements."
}


];





return(


<section

id="products"

className="
bg-[#050505]
text-white
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
bg-orange-500/10
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

OUR PRODUCTS

</p>





<h2

className="
mt-5
text-4xl
md:text-5xl
font-black
"

>

Premium Printing Products

</h2>





<p

className="
mt-5
text-gray-400
text-lg
"

>

High quality printing products designed
to give your business a premium identity.

</p>



</motion.div>












{/* PRODUCTS GRID */}



<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-7
mt-14
"

>


{

products.map((product,index)=>(


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
delay:index*.1

}}



whileHover={{

y:-10

}}



className="
group
bg-[#111111]
border
border-white/10
rounded-3xl
overflow-hidden
hover:border-[#D4AF37]/50
transition
"

>



<div

className="
h-56
overflow-hidden
"

>


<img

src={product.image}

alt={product.title}

className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"

/>


</div>







<div

className="
p-7
"

>



<div

className="
w-14
h-14
rounded-2xl
bg-gradient-to-br
from-[#D4AF37]
to-orange-500
text-black
flex
items-center
justify-center
mb-5
"

>


{product.icon}


</div>







<h3

className="
text-xl
font-bold
"

>

{product.title}

</h3>







<p

className="
mt-4
text-gray-400
leading-relaxed
text-sm
"

>

{product.text}

</p>






<button

className="
mt-6
flex
items-center
gap-2
text-[#D4AF37]
font-semibold
text-sm
group-hover:gap-3
transition-all
"

>

View Details

<ArrowRight size={16}/>


</button>






</div>






</motion.div>


))


}



</div>






</div>


</section>


)

}


export default Products;