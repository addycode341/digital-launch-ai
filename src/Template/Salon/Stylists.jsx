import { motion } from "framer-motion";
import {
  Scissors,
  Award
} from "lucide-react";




const stylists=[


{
image:"https://images.unsplash.com/photo-1560250097-0b93528c311a",
name:"Aarav Kapoor",
role:"Creative Hair Stylist",
experience:"8 Years Experience",
speciality:"Hair Styling"
},



{
image:"https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
name:"Meera Sharma",
role:"Beauty Expert",
experience:"10 Years Experience",
speciality:"Bridal Makeup"
},



{
image:"https://images.unsplash.com/photo-1580489944761-15a19d654956",
name:"Ananya Verma",
role:"Skin Specialist",
experience:"6 Years Experience",
speciality:"Skin Care"
}



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
w-[500px]
h-[500px]
bg-pink-500/10
blur-[160px]
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

Stylists

</span>


</h2>






<p

className="
text-gray-400
mt-5
"

>

Our professional artists create styles
that match your personality.

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
to-transparent
"

/>






<div

className="
absolute
bottom-5
left-5
px-4
py-2
rounded-full
bg-yellow-400
text-black
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
text-yellow-400
mt-2
font-semibold
"

>

{item.role}

</p>






<div

className="
flex
items-center
gap-2
mt-5
text-gray-400
"

>

<Scissors size={18}/>

{item.speciality}

</div>







<button

className="
mt-6
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

Book With Me

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