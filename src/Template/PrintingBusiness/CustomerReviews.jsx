import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";


function CustomerReviews(){


const reviews=[


{
name:"Rajesh Kumar",
business:"ABC Enterprises",
review:
"INDIA ENTERPRISE provided excellent printing quality. Visiting cards and brochures were delivered with premium finishing.",
initial:"R"
},


{
name:"Priya Sharma",
business:"Creative Studio",
review:
"Very professional service with amazing designs. Their UV printing quality and finishing is outstanding.",
initial:"P"
},


{
name:"Amit Gupta",
business:"Gupta Traders",
review:
"Best printing partner for business needs. Quality, support and delivery time were perfect.",
initial:"A"
},


];





return(



<section


className="
py-24
px-6
md:px-12
bg-[#050505]
relative
overflow-hidden
"



>



<div

className="
absolute
left-0
top-20
w-96
h-96
bg-yellow-500/10
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







{/* Heading */}



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
mb-16
"



>


<p

className="
text-yellow-400
font-bold
tracking-widest
text-sm
"

>

CUSTOMER REVIEWS

</p>




<h2

className="
mt-4
text-4xl
md:text-5xl
font-black
text-white
"

>

What Our Customers Say

</h2>




<p

className="
mt-5
text-gray-400
max-w-2xl
mx-auto
"

>

Trusted by businesses who choose
quality printing and professional service.

</p>




</motion.div>









{/* Cards */}




<div

className="
grid
md:grid-cols-3
gap-8
"

>




{


reviews.map((item,index)=>(



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
delay:index*0.15
}}



whileHover={{
y:-10
}}



className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
backdrop-blur-xl
hover:border-yellow-400/40
transition
"



>





{/* Stars */}



<div

className="
flex
gap-1
mb-5
"

>



{


[1,2,3,4,5].map((star)=>(


<Star

key={star}

size={18}

className="
fill-yellow-400
text-yellow-400
"

/>



))


}



</div>









{/* Review */}



<p

className="
text-gray-300
leading-relaxed
mb-8
"

>

"{item.review}"

</p>









{/* Customer */}




<div

className="
flex
items-center
gap-4
"

>



<div

className="
w-14
h-14
rounded-full
bg-gradient-to-br
from-yellow-400
to-orange-500
text-black
flex
items-center
justify-center
font-black
text-xl
"

>


{item.initial}


</div>







<div>



<h3

className="
font-bold
text-white
"

>

{item.name}

</h3>




<p

className="
text-sm
text-gray-400
"

>

{item.business}

</p>




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



export default CustomerReviews;