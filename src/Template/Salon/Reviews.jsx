import { motion } from "framer-motion";

import {
  Star,
  BadgeCheck,
  Users,
  Heart,
  Award
} from "lucide-react";





const reviews=[


{
name:"Priya Sharma",
image:
"https://images.unsplash.com/photo-1494790108377-be9c29b29330",
review:
"Amazing salon experience. The bridal makeup was perfect and the team was extremely professional.",
rating:"5.0"
},



{
name:"Neha Kapoor",
image:
"https://images.unsplash.com/photo-1544005313-94ddf0286df2",
review:
"Best beauty salon in the city. My hair transformation was exactly what I wanted.",
rating:"4.9"
},




{
name:"Ananya Singh",
image:
"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
review:
"Premium service, beautiful ambience and very talented artists.",
rating:"5.0"
}



];







const trust=[


{
icon:<Users size={28}/>,
number:"5000+",
text:"Happy Clients"
},



{
icon:<Award size={28}/>,
number:"10+",
text:"Years Experience"
},



{
icon:<Heart size={28}/>,
number:"98%",
text:"Client Satisfaction"
}



];









function Reviews(){


return(


<section

id="reviews"

className="
relative
py-28
px-5
sm:px-8
bg-black
overflow-hidden
"

>





<div

className="
absolute
w-[500px]
h-[500px]
bg-pink-500/10
blur-[150px]
rounded-full
left-0
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









{/* HEADER */}



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



<p

className="
text-yellow-400
font-semibold
tracking-widest
"

>

CLIENT LOVE

</p>







<h2

className="
text-5xl
sm:text-6xl
font-black
mt-5
"

>


Loved By

<span

className="
text-pink-400
"

>

Thousands

</span>


</h2>







<p

className="
text-gray-400
mt-5
"

>

Real experiences from our beautiful clients.

</p>







</motion.div>









{/* GOOGLE RATING */}



<motion.div


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
max-w-xl
mx-auto
mb-14
p-8
rounded-[35px]
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
text-center
"

>





<h3

className="
text-6xl
font-black
text-yellow-400
"

>

4.9

</h3>





<div

className="
flex
justify-center
gap-1
mt-3
"

>


{

[1,2,3,4,5].map((i)=>(

<Star

key={i}

size={25}

fill="currentColor"

className="
text-yellow-400
"

/>

))

}


</div>







<div

className="
flex
items-center
justify-center
gap-2
mt-4
text-gray-300
"

>


<BadgeCheck

className="
text-blue-400
"

/>


Verified Google Reviews


</div>





</motion.div>









{/* REVIEWS */}



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

delay:index*.15

}}



whileHover={{

y:-10

}}



className="
rounded-[35px]
p-7
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
font-bold
"

>

{item.name}

</h3>


<div

className="
flex
items-center
gap-1
text-yellow-400
"

>


<Star

size={15}

fill="currentColor"

/>


<span className="
text-white
text-sm
">

{item.rating}

</span>


</div>



</div>




</div>







<p

className="
text-gray-300
mt-6
leading-relaxed
"

>

"{item.review}"

</p>






<div

className="
mt-5
text-green-400
text-sm
font-semibold
flex
items-center
gap-2
"

>


<BadgeCheck size={16}/>


Verified Customer


</div>







</motion.div>



))


}




</div>









{/* TRUST CARDS */}



<div

className="
grid
sm:grid-cols-3
gap-6
mt-14
"

>


{

trust.map((item,index)=>(


<motion.div


key={index}


whileHover={{

scale:1.05

}}


className="
p-6
rounded-3xl
bg-gradient-to-br
from-white/[0.08]
to-white/[0.02]
border
border-white/10
text-center
"

>


<div

className="
w-14
h-14
mx-auto
rounded-2xl
bg-yellow-400/20
text-yellow-400
flex
items-center
justify-center
"

>

{item.icon}

</div>



<h3

className="
text-3xl
font-black
mt-4
"

>

{item.number}

</h3>



<p

className="
text-gray-400
mt-2
"

>

{item.text}

</p>



</motion.div>


))


}



</div>









</div>






</section>


)

}



export default Reviews;