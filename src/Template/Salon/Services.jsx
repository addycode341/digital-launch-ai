import { motion } from "framer-motion";

import {
  Award,
  Scissors,
  Star
} from "lucide-react";





const stylists=[


{
image:
"https://images.unsplash.com/photo-1560250097-0b93528c311a",

name:"Aarav Sharma",

role:"Master Hair Stylist",

experience:"12 Years Experience",

speciality:"Hair Styling",

rating:"4.9"

},





{
image:
"https://images.unsplash.com/photo-1580489944761-15a19d654956",

name:"Meera Kapoor",

role:"Bridal Makeup Artist",

experience:"8 Years Experience",

speciality:"Bridal Expert",

rating:"5.0"

},





{
image:
"https://images.unsplash.com/photo-1551836022-d5d88e9218df",

name:"Riya Malhotra",

role:"Beauty Specialist",

experience:"7 Years Experience",

speciality:"Skin Care",

rating:"4.8"

},





];








function Stylists(){


return(


<section

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
w-[450px]
h-[450px]
bg-pink-500/10
blur-[140px]
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







{/* Heading */}



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

OUR EXPERTS

</p>






<h2

className="
text-5xl
sm:text-6xl
font-black
mt-5
"

>


Meet Our

<span

className="
text-pink-400
"

>

Artists

</span>


</h2>






<p

className="
text-gray-400
mt-5
"

>

Professional beauty experts dedicated to creating your perfect look.

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


stylists.map((item,index)=>(



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
group
rounded-[35px]
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
h-96
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
via-transparent
"

 />





{/* Experience */}


<div

className="
absolute
bottom-5
left-5
px-4
py-2
rounded-full
bg-black/70
backdrop-blur-md
text-yellow-400
text-sm
font-bold
flex
items-center
gap-2
"

>


<Award size={16}/>

{item.experience}


</div>







</div>









{/* CONTENT */}



<div

className="
p-7
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






<p

className="
text-pink-400
font-semibold
mt-1
"

>

{item.role}

</p>







<div

className="
flex
justify-between
items-center
mt-6
"

>



<div

className="
flex
items-center
gap-2
text-yellow-400
"

>

<Star

size={18}

fill="currentColor"

/>


<span

className="
text-white
"

>

{item.rating}

</span>


</div>







<div

className="
flex
items-center
gap-2
text-gray-400
text-sm
"

>


<Scissors size={16}/>


{item.speciality}


</div>





</div>









<button

className="
mt-7
w-full
py-3
rounded-full
bg-gradient-to-r
from-yellow-400
to-pink-500
text-black
font-bold
hover:scale-105
transition
"

>


Book Appointment


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



export default Stylists;