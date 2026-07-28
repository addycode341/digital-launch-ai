import {motion} from "framer-motion";

import {
Star,
Quote
} from "lucide-react";




const reviews=[


{
name:"Rahul Sharma",
location:"Delhi",
text:"Amazing luxury experience. Rooms were beautiful and the hospitality was outstanding."
},


{
name:"Priya Mehta",
location:"Mumbai",
text:"One of the best stays I have experienced. Food, service and ambience were perfect."
},


{
name:"Arjun Kapoor",
location:"Gurgaon",
text:"Premium rooms with excellent service. Highly recommended for family vacations."
}


];







function Reviews(){


return(


<section

className="
py-28
px-5
sm:px-8
bg-[#080808]
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
mb-16
">


<p className="
text-yellow-400
tracking-[5px]
font-semibold
">

GUEST LOVE

</p>


<h2 className="
text-5xl
sm:text-6xl
font-black
mt-5
">

What Guests

<span className="
text-yellow-400
">

Say

</span>

</h2>



</div>








{/* GOOGLE CARD */}


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
max-w-xl
mx-auto
mb-14
p-8
rounded-[35px]
bg-white/[0.06]
border
border-white/10
text-center
"


>


<div className="
flex
justify-center
gap-2
text-yellow-400
">

{

[1,2,3,4,5].map(i=>(

<Star

key={i}

fill="currentColor"

/>

))

}

</div>



<h3 className="
text-5xl
font-black
mt-5
">

4.9/5

</h3>


<p className="
text-gray-400
mt-2
">

Google Guest Rating

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


whileHover={{
y:-10
}}


className="
p-8
rounded-[35px]
bg-white/[0.06]
border
border-white/10
"

>


<Quote

className="
text-yellow-400
"

/>


<div className="
flex
gap-1
mt-5
text-yellow-400
">


{

[1,2,3,4,5].map(i=>(

<Star

key={i}

size={16}

fill="currentColor"

/>

))

}


</div>





<p className="
text-gray-300
mt-5
leading-relaxed
">

"{item.text}"

</p>




<h3 className="
font-bold
text-lg
mt-6
">

{item.name}

</h3>


<p className="
text-gray-500
text-sm
">

{item.location}

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