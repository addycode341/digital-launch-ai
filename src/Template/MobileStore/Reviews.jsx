import { motion } from "framer-motion";

import {
  Star,
  BadgeCheck,
  Users,
  ThumbsUp,
  ShieldCheck
} from "lucide-react";





const reviews=[


{
name:"Rahul Sharma",
role:"iPhone Customer",
image:"https://i.pravatar.cc/150?img=12",
review:
"Bought iPhone from this store. Amazing service, genuine product and helpful staff.",
rating:5
},


{
name:"Priya Verma",
role:"Samsung Customer",
image:"https://i.pravatar.cc/150?img=32",
review:
"Best mobile store experience. Got my Galaxy Ultra with excellent exchange value.",
rating:5
},


{
name:"Amit Singh",
role:"Regular Customer",
image:"https://i.pravatar.cc/150?img=15",
review:
"Fast delivery and great after sales support. Highly recommended.",
rating:5
}


];





const trust=[


{
icon:<Users size={26}/>,
number:"10K+",
text:"Happy Customers"
},


{
icon:<Star size={26}/>,
number:"4.9/5",
text:"Google Rating"
},


{
icon:<ShieldCheck size={26}/>,
number:"100%",
text:"Genuine Products"
},


{
icon:<ThumbsUp size={26}/>,
number:"98%",
text:"Satisfaction"
}


];








function Reviews(){


return(


<section

id="reviews"

className="
py-20
sm:py-28
px-4
sm:px-8
bg-black
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
mb-12
sm:mb-16
"

>


<p

className="
text-blue-400
tracking-[3px]
text-sm
font-semibold
"

>

CUSTOMER REVIEWS

</p>





<h2

className="
text-4xl
sm:text-5xl
lg:text-6xl
font-black
mt-4
"

>

Loved By

<span

className="
text-purple-500
"

>

 Thousands

</span>


</h2>





<p

className="
text-gray-400
mt-4
text-sm
sm:text-base
"

>

Real Google-style reviews from happy customers.

</p>


</div>









{/* TRUST */}



<div

className="
grid
grid-cols-2
sm:grid-cols-4
gap-4
mb-12
"

>


{


trust.map((item,index)=>(



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


className="
p-4
sm:p-6
rounded-3xl
bg-white/[0.06]
border
border-white/10
text-center
"

>


<div

className="
mx-auto
w-12
h-12
rounded-2xl
bg-blue-500/10
text-blue-400
flex
items-center
justify-center
"

>

{item.icon}

</div>





<h3

className="
text-2xl
sm:text-3xl
font-black
mt-3
"

>

{item.number}

</h3>




<p

className="
text-gray-400
text-xs
sm:text-sm
mt-1
"

>

{item.text}

</p>



</motion.div>



))


}



</div>









{/* REVIEW CARDS */}



<div

className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-5
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

duration:.5,
delay:index*.1

}}


className="
p-5
sm:p-7
rounded-[30px]
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
"

>







<div

className="
flex
items-center
gap-4
"

>


<img

src={item.image}

alt={item.name}

className="
w-14
h-14
rounded-full
object-cover
"

/>




<div>

<h3

className="
font-black
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

{item.role}

</p>


</div>


</div>







<div

className="
flex
gap-1
mt-5
"

>


{

Array.from({
length:item.rating
}).map((_,i)=>(


<Star

key={i}

size={17}

fill="currentColor"

className="
text-yellow-400
"

/>


))


}



</div>







<p

className="
text-gray-300
leading-relaxed
mt-4
text-sm
sm:text-base
"

>

"{item.review}"

</p>







<div

className="
flex
items-center
gap-2
mt-5
text-green-400
text-sm
font-bold
"

>


<BadgeCheck size={17}/>

Verified Purchase


</div>





</motion.div>



))


}



</div>






</div>


</section>


)

}



export default Reviews; 