import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


function ProductCard({product}) {


return (

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
group
bg-white/5
border
border-white/10
rounded-3xl
overflow-hidden
hover:border-yellow-500/60
transition
duration-300
"

>


<div className="
h-64
overflow-hidden
relative
">


<img

src={product.image}

alt={product.name}

className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-500
"

/>


<div className="
absolute
top-4
right-4
bg-yellow-500
text-black
px-3
py-1
rounded-full
text-xs
font-bold
">

Premium

</div>


</div>



<div className="
p-6
">


<h3 className="
text-xl
font-bold
mb-3
">

{product.name}

</h3>



<p className="
text-gray-400
text-sm
mb-6
">

{product.description}

</p>




<div className="
flex
gap-3
">



<Link

to={`/indian-enterprises/product/${product.id.toLowerCase().replace(/\s+/g,"-")}`}

className="
flex-1
border
border-yellow-500
text-yellow-500
py-3
rounded-full
flex
items-center
justify-center
gap-2
text-sm
font-semibold
hover:bg-yellow-500
hover:text-black
transition
"

>

View

<ArrowRight size={16}/>

</Link>





<a

href="https://wa.me/919999999999"

target="_blank"

rel="noreferrer"

className="
flex-1
bg-yellow-500
text-black
py-3
rounded-full
flex
items-center
justify-center
gap-2
text-sm
font-semibold
hover:scale-105
transition
"

>


<MessageCircle size={16}/>

Enquiry


</a>



</div>



</div>


</motion.div>


)

}


export default ProductCard;