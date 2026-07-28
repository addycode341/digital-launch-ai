import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight
} from "lucide-react";



const transformations=[


{
before:
"https://images.unsplash.com/photo-1595152772835-219674b2a8a6",

after:
"https://images.unsplash.com/photo-1487412947147-5cebf100ffc2",

title:"Hair Transformation"

},



{
before:
"https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43",

after:
"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",

title:"Bridal Makeover"

},



{
before:
"https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",

after:
"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",

title:"Glow Treatment"

}



];





function Transformation(){


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
mb-16
"

>



<div

className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
bg-yellow-400/10
border
border-yellow-400/20
text-yellow-400
"

>


<Sparkles size={18}/>

Beauty Transformations


</div>







<h2

className="
text-5xl
sm:text-6xl
font-black
mt-6
"

>


See The

<span

className="
text-pink-400
"

>

Difference

</span>


</h2>







<p

className="
text-gray-400
mt-5
"

>

Real transformations created by our expert beauty artists.

</p>






</motion.div>









<div

className="
grid
lg:grid-cols-3
gap-8
"

>





{

transformations.map((item,index)=>(



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
grid
grid-cols-2
h-72
"

>


<div

className="
relative
overflow-hidden
"

>


<img

src={item.before}

alt="Before"

className="
w-full
h-full
object-cover
hover:scale-110
transition
duration-700
"

/>



<span

className="
absolute
bottom-4
left-4
px-4
py-1
rounded-full
bg-black/70
text-white
text-sm
"

>

Before

</span>



</div>









<div

className="
relative
overflow-hidden
"

>


<img

src={item.after}

alt="After"

className="
w-full
h-full
object-cover
hover:scale-110
transition
duration-700
"

/>



<span

className="
absolute
bottom-4
left-4
px-4
py-1
rounded-full
bg-yellow-400
text-black
text-sm
font-bold
"

>

After

</span>



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

{item.title}

</h3>





<p

className="
text-gray-400
mt-3
"

>

Premium makeover designed by our experts.

</p>






<button

className="
mt-6
flex
items-center
gap-2
text-yellow-400
font-bold
"

>

View Story

<ArrowRight size={18}/>

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



export default Transformation;