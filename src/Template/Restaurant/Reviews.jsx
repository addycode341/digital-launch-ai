import { motion } from "framer-motion";
import {
  Star,
  Quote
} from "lucide-react";




const reviews=[


{
name:"Rahul Sharma",
role:"Food Lover",
image:"https://randomuser.me/api/portraits/men/32.jpg",
text:"Amazing food quality and beautiful ambience. The chef special dishes were outstanding.",
rating:"5.0"
},



{
name:"Priya Verma",
role:"Regular Customer",
image:"https://randomuser.me/api/portraits/women/44.jpg",
text:"One of the best dining experiences. Staff is friendly and every dish feels premium.",
rating:"4.9"
},



{
name:"Arjun Mehta",
role:"Business Guest",
image:"https://randomuser.me/api/portraits/men/75.jpg",
text:"Perfect place for meetings and celebrations. Great service and delicious food.",
rating:"5.0"
}



];








function Reviews(){


return(


<section

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
w-[450px]
h-[450px]
bg-yellow-400/10
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

CUSTOMER LOVE

</p>




<h2

className="
text-5xl
sm:text-6xl
font-black
mt-4
"

>


What Our

<span className="
text-yellow-400
">

Guests Say

</span>


</h2>




<p

className="
text-gray-400
mt-5
"

>

Real experiences from our happy customers.

</p>




</motion.div>












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

y:-12

}}



className="
relative
rounded-[35px]
p-8
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
"

>







<div

className="
absolute
top-6
right-6
text-yellow-400/30
"

>

<Quote size={45}/>

</div>









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
w-16
h-16
rounded-full
object-cover
border-2
border-yellow-400
"

/>





<div>


<h3

className="
font-bold
text-lg
"

>

{item.name}

</h3>


<p

className="
text-gray-400
text-sm
"

>

{item.role}

</p>



</div>



</div>









<p

className="
text-gray-300
mt-6
leading-relaxed
"

>

"{item.text}"

</p>









<div

className="
flex
items-center
gap-1
mt-6
"

>


{

[1,2,3,4,5].map((star)=>(


<Star

key={star}

size={18}

fill="currentColor"

className="
text-yellow-400
"

/>


))


}



<span

className="
ml-2
font-bold
"

>

{item.rating}

</span>



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