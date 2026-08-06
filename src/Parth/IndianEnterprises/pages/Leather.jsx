import { motion } from "framer-motion";
import ProductCard from "../components/products/ProductCard";


import {
Briefcase,
ShieldCheck,
Sparkles,
Truck,
MessageCircle
} from "lucide-react";


function Leather(){


const products=[

{
id:"leather-office-files",
name:"Leather Office Files",
image:"/images/Leather files .jpeg",
desc:"Premium leather files designed for corporate offices and professional presentations."
},


{
id:"executive-leather-bags",
name:"Executive Leather Bags",
image:"/images/Leather Bag.jpeg",
desc:"Stylish executive bags with premium finishing and durable material."
},


{
id:"rexine-products",
name:"Rexine Products",
image:"/images/rexine1.jpeg",
desc:"High quality rexine products with customized solutions."
},


{
id:"customized-leather-items",
name:"Customized Leather Items",
image:"/images/leather.jpg",
desc:"Custom designed leather and rexine products according to your needs."
}


];





const features=[

{
icon:<Briefcase/>,
title:"Premium Material",
desc:"High quality leather and rexine products."
},


{
icon:<ShieldCheck/>,
title:"Quality Finish",
desc:"Professional finishing with attention to detail."
},


{
icon:<Sparkles/>,
title:"Custom Designs",
desc:"Customized products as per requirement."
},


{
icon:<Truck/>,
title:"Bulk Delivery",
desc:"Reliable delivery for business orders."
}


];





return(


<section

className="
bg-black
min-h-screen
text-white
pt-32
pb-24
overflow-hidden
"

>


<div

className="
max-w-7xl
mx-auto
px-6
"

>




{/* HERO */}


<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.7
}}

className="
text-center
mb-20
"

>


<p

className="
text-yellow-500
uppercase
tracking-[5px]
font-semibold
"

>

Premium Collection

</p>



<h1

className="
text-4xl
md:text-6xl
font-bold
mt-5
"

>

Leather & Rexine


<span className="
text-yellow-500
">

 Products

</span>


</h1>




<p

className="
text-gray-400
max-w-3xl
mx-auto
mt-6
text-lg
"

>

Premium leather and rexine solutions including
corporate accessories, office products, bags and
customized items crafted with quality finishing.

</p>




<a

href="https://wa.me/919999999999"

target="_blank"

rel="noreferrer"

className="
inline-flex
items-center
gap-3
bg-yellow-500
text-black
px-8
py-3
rounded-full
font-bold
mt-8
hover:scale-105
transition
"

>


<MessageCircle size={20}/>

Get Custom Quote


</a>



</motion.div>








{/* FEATURES */}



<div

className="
grid
grid-cols-2
md:grid-cols-4
gap-5
mb-20
"

>


{

features.map((item,index)=>(


<motion.div

key={index}

whileHover={{
y:-8
}}

className="
bg-white/5
border
border-white/10
rounded-2xl
p-5
text-center
"

>


<div

className="
text-yellow-500
flex
justify-center
mb-3
"

>

{item.icon}

</div>



<h3

className="
font-bold
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

{item.desc}

</p>


</motion.div>


))


}


</div>








{/* PRODUCTS TITLE */}



<div

className="
text-center
mb-12
"

>


<h2

className="
text-3xl
md:text-5xl
font-bold
"

>

Our Leather


<span className="
text-yellow-500
">

 Collection

</span>


</h2>



<p

className="
text-gray-400
mt-4
"

>

Explore our premium range of leather and rexine products.

</p>


</div>









{/* PRODUCTS */}



<div

className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-8
"

>


{

products.map((product,index)=>(


<motion.div

key={product.id}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

viewport={{
once:true
}}

>


<ProductCard

product={product}

/>


</motion.div>


))


}


</div>







</div>


</section>


)

}


export default Leather;