import { motion } from "framer-motion";

import {
  ShoppingCart,
  Star,
  Zap,
  CheckCircle
} from "lucide-react";



const products=[

{
brand:"Apple",
name:"iPhone 17 Pro Max",
image:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
price:"₹1,49,999",
storage:"256GB",
rating:"4.9",
stock:"In Stock",
color:"Titanium"
},


{
brand:"Samsung",
name:"Galaxy S26 Ultra",
image:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
price:"₹1,19,999",
storage:"512GB",
rating:"4.8",
stock:"In Stock",
color:"Black"
},


{
brand:"OnePlus",
name:"OnePlus 14 Pro",
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
price:"₹69,999",
storage:"256GB",
rating:"4.7",
stock:"Limited",
color:"Green"
},


{
brand:"Google",
name:"Pixel Pro",
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
price:"₹79,999",
storage:"256GB",
rating:"4.8",
stock:"In Stock",
color:"White"
}

];






function Products(){


return(

<section

id="products"

className="
w-full
py-20
sm:py-28
px-4
sm:px-8
bg-black
overflow-hidden
"

>


<div

className="
max-w-7xl
mx-auto
"

>





<div className="
text-center
mb-12
sm:mb-16
">


<p className="
text-blue-400
tracking-[4px]
text-xs
sm:text-sm
font-semibold
">

PREMIUM COLLECTION

</p>



<h2 className="
text-4xl
sm:text-5xl
lg:text-6xl
font-black
mt-5
leading-tight
">

Latest

<span className="
block
text-purple-500
mt-2
">

Smartphones

</span>

</h2>



<p className="
text-gray-400
mt-5
text-sm
sm:text-base
">

Experience flagship performance with premium devices.

</p>


</div>









<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
"

>


{

products.map((phone,index)=>(


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
delay:index*0.1
}}



className="
group
w-full
rounded-[30px]
overflow-hidden
bg-white/[0.06]
border
border-white/10
"

>



<div

className="
relative
h-64
overflow-hidden
"

>


<img

src={phone.image}

alt={phone.name}

className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"

/>



<div

className="
absolute
top-4
left-4
px-3
py-1
rounded-full
bg-blue-500
text-xs
font-bold
"

>

{phone.brand}

</div>



<div

className="
absolute
bottom-4
right-4
px-3
py-1
rounded-full
bg-black/70
text-xs
"

>

{phone.color}

</div>


</div>









<div className="
p-5
">


<div className="
flex
justify-between
items-center
gap-3
">


<div className="
flex
items-center
gap-1
text-yellow-400
text-sm
">

<Star size={15} fill="currentColor"/>

{phone.rating}

</div>



<div className="
text-green-400
text-xs
font-bold
">

✓ {phone.stock}

</div>


</div>






<h3 className="
text-lg
sm:text-xl
font-black
mt-5
break-words
">

{phone.name}

</h3>







<div className="
flex
flex-col
sm:flex-row
sm:items-center
sm:justify-between
gap-3
mt-5
">


<p className="
text-xl
sm:text-2xl
font-black
">

{phone.price}

</p>



<span className="
w-fit
px-3
py-2
rounded-full
bg-white/10
text-xs
">

{phone.storage}

</span>


</div>







<div className="
flex
items-center
gap-2
text-blue-400
text-xs
sm:text-sm
mt-4
">

<Zap size={15}/>

No Cost EMI Available

</div>







<button

className="
w-full
mt-6
py-3.5
rounded-full
bg-gradient-to-r
from-blue-500
to-purple-600
font-bold
flex
items-center
justify-center
gap-2
hover:scale-105
transition
"

>

<ShoppingCart size={17}/>

Buy Now

</button>







<div className="
flex
items-center
justify-center
gap-2
text-gray-400
text-xs
mt-4
">

<CheckCircle size={14}/>

Official Warranty Included

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



export default Products;