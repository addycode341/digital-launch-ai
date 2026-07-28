import { motion } from "framer-motion";
import {
  Utensils,
  Pizza,
  Coffee,
  Cake,
  Salad,
  Wine
} from "lucide-react";



const categories=[


{
icon:<Utensils size={28}/>,
title:"Main Course",
desc:"Signature dishes prepared by expert chefs.",
image:"https://images.unsplash.com/photo-1547592180-85f173990554"
},



{
icon:<Pizza size={28}/>,
title:"Italian",
desc:"Authentic pizzas and handmade pasta.",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591"
},



{
icon:<Salad size={28}/>,
title:"Healthy Food",
desc:"Fresh ingredients with balanced flavours.",
image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
},



{
icon:<Cake size={28}/>,
title:"Desserts",
desc:"Luxury desserts and sweet creations.",
image:"https://images.unsplash.com/photo-1551024506-0bccd828d307"
},



{
icon:<Coffee size={28}/>,
title:"Beverages",
desc:"Premium coffee and refreshing drinks.",
image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93"
},



{
icon:<Wine size={28}/>,
title:"Fine Dining",
desc:"Elegant dining experience.",
image:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
}



];






function Categories(){


return(


<section

className="
relative
py-24
px-5
sm:px-8
bg-[#080808]
overflow-hidden
"

>




<div

className="
absolute
w-[450px]
h-[450px]
bg-yellow-500/10
blur-[150px]
rounded-full
right-0
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
mb-14
"

>



<p

className="
text-yellow-400
font-semibold
tracking-widest
"

>

EXPLORE MENU

</p>




<h2

className="
text-5xl
sm:text-6xl
font-black
mt-4
"

>


Our Food

<span className="
text-yellow-400
">

Categories

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

Discover our carefully crafted selection
of premium dishes.

</p>



</motion.div>









<div

className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-8
"

>


{

categories.map((item,index)=>(



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
delay:index*.1
}}



whileHover={{
y:-12
}}



className="
group
relative
h-[360px]
rounded-[35px]
overflow-hidden
border
border-white/10
"

>





<img

src={item.image}

alt={item.title}

className="
absolute
inset-0
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
via-black/40
to-transparent
"

/>









<div

className="
absolute
bottom-0
p-7
"

>



<div

className="
w-14
h-14
rounded-2xl
bg-yellow-400/20
backdrop-blur-xl
text-yellow-400
flex
items-center
justify-center
mb-5
"

>

{item.icon}

</div>







<h3

className="
text-3xl
font-black
"

>

{item.title}

</h3>






<p

className="
text-gray-300
mt-3
"

>

{item.desc}

</p>






<button

className="
mt-5
px-5
py-2
rounded-full
bg-yellow-400
text-black
font-bold
opacity-0
group-hover:opacity-100
transition
"

>

Explore

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



export default Categories;