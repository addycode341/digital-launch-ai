import { motion } from "framer-motion";
import {
ArrowRight,
Sparkles,
MessageCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";


function Hero(){

const navigate = useNavigate();


return(

<section

id="home"

className="
relative
min-h-screen
bg-black
text-white
flex
items-center
overflow-hidden
pt-28
pb-16
"


>


{/* Animated Glow */}

<motion.div

animate={{
scale:[1,1.2,1],
opacity:[0.3,0.5,0.3]
}}

transition={{
duration:6,
repeat:Infinity
}}

className="
absolute
right-[-100px]
top-20
w-[350px]
h-[350px]
md:w-[500px]
md:h-[500px]
bg-yellow-500/20
blur-[120px]
rounded-full
"

/>





<div

className="
max-w-7xl
mx-auto
px-6
grid
lg:grid-cols-2
gap-12
items-center
"


>



{/* LEFT CONTENT */}


<motion.div


initial={{
opacity:0,
x:-60
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:0.8
}}

>


<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:0.2
}}

className="
flex
items-center
gap-2
text-yellow-500
font-semibold
mb-5
text-sm
md:text-base
"

>


<Sparkles size={20}/>

Premium Business Solutions


</motion.div>






<h1

className="
text-4xl
sm:text-5xl
md:text-6xl
font-bold
leading-tight
"

>


Complete Printing,

<br/>


<span className="
text-yellow-500
">

Stationery & Leather

</span>


<br/>

Solutions


</h1>






<p

className="
mt-6
text-gray-300
text-base
md:text-lg
max-w-xl
leading-relaxed
"

>


Indian Enterprises provides premium printing services,
office stationery, school supplies and leather & rexine
products with modern technology and quality finishing.


</p>







<div

className="
mt-8
flex
flex-col
sm:flex-row
gap-4
"

>



<button


onClick={()=>navigate("/indian-enterprises/printing")}


className="
bg-yellow-500
text-black
px-7
py-3
rounded-full
font-semibold
flex
justify-center
items-center
gap-2
hover:scale-105
transition
shadow-lg
"

>


Explore Services

<ArrowRight size={18}/>


</button>






<a


href="https://wa.me/919999999999"


target="_blank"


className="
border
border-yellow-500
text-yellow-500
px-7
py-3
rounded-full
font-semibold
flex
justify-center
items-center
gap-2
hover:bg-yellow-500
hover:text-black
transition
"

>


<MessageCircle size={18}/>

Contact Us


</a>





</div>



</motion.div>









{/* IMAGE SECTION */}



<motion.div


initial={{

opacity:0,
scale:0.8

}}


animate={{

opacity:1,
scale:1

}}


transition={{

duration:0.9

}}



className="
relative
"


>


<motion.div


animate={{

y:[0,-15,0]

}}


transition={{

duration:5,
repeat:Infinity

}}



className="
rounded-3xl
overflow-hidden
border
border-white/10
shadow-2xl
"


>



<img


src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c"


alt="Printing Business"


className="
w-full
h-[300px]
sm:h-[380px]
md:h-[450px]
object-cover
"


/>



</motion.div>









{/* EXPERIENCE CARD */}



<motion.div


initial={{

opacity:0,
x:-30

}}


animate={{

opacity:1,
x:0

}}


transition={{

delay:1

}}


className="
absolute
bottom-5
left-3
md:left-5
bg-black/80
backdrop-blur-xl
border
border-white/10
rounded-xl
px-4
py-3
"


>


<p className="
text-yellow-500
font-bold
text-xl
">

10+

</p>


<p className="
text-xs
text-gray-300
">

Years Experience

</p>


</motion.div>









{/* QUALITY CARD */}



<motion.div


initial={{

opacity:0,
x:30

}}


animate={{

opacity:1,
x:0

}}


transition={{

delay:1.2

}}



className="
absolute
top-5
right-3
md:right-5
bg-black/80
backdrop-blur-xl
border
border-white/10
rounded-xl
px-4
py-3
"



>


<p className="
text-yellow-500
font-bold
">

Premium

</p>


<p className="
text-xs
text-gray-300
">

Quality Printing

</p>


</motion.div>





</motion.div>





</div>


</section>


)

}


export default Hero;