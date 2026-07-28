import { motion } from "framer-motion";
import {
  ShoppingBag,
  Star,
  ChefHat,
  Sparkles
} from "lucide-react";



const menuItems=[


{
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591",
name:"Truffle Cheese Pizza",
category:"Italian Signature",
price:"$18",
rating:"4.9",
desc:"Wood fired pizza topped with premium cheese, truffle oil and fresh herbs.",
chef:true
},


{
image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
name:"Creamy Alfredo Pasta",
category:"Chef Special",
price:"$15",
rating:"4.8",
desc:"Handmade pasta with creamy Alfredo sauce and authentic Italian flavours."
},


{
image:"https://images.unsplash.com/photo-1544025162-d76694265947",
name:"Royal Grilled Steak",
category:"Premium Grill",
price:"$25",
rating:"5.0",
desc:"Perfectly grilled steak prepared with our signature chef techniques.",
chef:true
},


{
image:"https://images.unsplash.com/photo-1551024506-0bccd828d307",
name:"Chocolate Symphony",
category:"Luxury Dessert",
price:"$10",
rating:"4.9",
desc:"Luxury chocolate dessert with premium toppings and rich flavours."
},


{
image:"https://images.unsplash.com/photo-1547592180-85f173990554",
name:"Garden Fresh Salad",
category:"Healthy Choice",
price:"$12",
rating:"4.7",
desc:"Fresh vegetables mixed with our signature restaurant dressing."
},


{
image:"https://images.unsplash.com/photo-1529042410759-befb1204b468",
name:"Royal Burger",
category:"Classic",
price:"$14",
rating:"4.8",
desc:"Juicy premium burger made with fresh ingredients."
}


];







function menu(){


return(


<section

id="menu"

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
bg-yellow-400/10
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
"

>






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

<Sparkles size={18}/>

Our Signature Menu

</div>




<h2

className="
text-5xl
sm:text-6xl
font-black
mt-6
"

>

Taste The

<span className="
text-yellow-400
">

Luxury

</span>

</h2>



<p

className="
text-gray-400
mt-5
text-lg
"

>

Handcrafted dishes created by our expert chefs.

</p>



</motion.div>









<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
"

>



{

menuItems.map((item,index)=>(


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
y:-15
}}



className="
group
relative
rounded-[40px]
overflow-hidden
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
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

src={item.image}

alt={item.name}

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
inset-0
bg-gradient-to-t
from-black
via-black/20
to-transparent
"

/>






<div

className="
absolute
top-5
left-5
px-4
py-2
rounded-full
bg-black/70
backdrop-blur-md
text-yellow-400
text-sm
font-semibold
"

>

{item.category}

</div>






{

item.chef &&


<motion.div

animate={{

scale:[1,1.1,1]

}}

transition={{

duration:2,

repeat:Infinity

}}


className="
absolute
top-5
right-5
px-4
py-2
rounded-full
bg-yellow-400
text-black
text-xs
font-black
"

>

👨‍🍳 Chef Choice

</motion.div>


}



</div>









{/* CONTENT */}



<div

className="
p-7
"

>


<div

className="
flex
justify-between
items-start
gap-3
"

>


<h3

className="
text-2xl
font-black
"

>

{item.name}

</h3>





<div

className="
px-4
py-2
rounded-full
bg-yellow-400/10
text-yellow-400
font-black
"

>

{item.price}

</div>



</div>






<p

className="
text-gray-400
mt-4
leading-relaxed
"

>

{item.desc}

</p>









<div

className="
flex
justify-between
items-center
mt-7
"

>


<div

className="
flex
items-center
gap-2
px-4
py-2
rounded-full
bg-white/10
"

>


<Star

size={18}

fill="currentColor"

className="text-yellow-400"

/>


<span>

{item.rating}

</span>


</div>







<button

className="
flex
items-center
gap-2
px-6
py-3
rounded-full
bg-gradient-to-r
from-yellow-400
to-orange-500
text-black
font-black
hover:scale-110
transition
"

>


<ShoppingBag size={18}/>

Order


</button>



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


export default menu;