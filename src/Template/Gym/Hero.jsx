import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Dumbbell
} from "lucide-react";



function Hero({data}){


return(


<section

className="
relative
min-h-screen
flex
items-center
overflow-hidden
bg-black
px-6
md:px-12
pt-32
"


>



{/* Background Glow */}


<div className="
absolute
top-20
right-10
w-96
h-96
bg-red-600/20
blur-3xl
rounded-full
">

</div>





<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-10
items-center
relative
z-10
">







{/* LEFT CONTENT */}



<motion.div


initial={{
opacity:0,
x:-50
}}


animate={{
opacity:1,
x:0
}}


transition={{
duration:.8
}}


>





<p className="
text-red-500
uppercase
tracking-[5px]
font-bold
text-sm
">

Premium Fitness Club

</p>





<h1 className="
text-5xl
md:text-7xl
font-extrabold
text-white
leading-tight
mt-5
">

{data?.businessName || "Transform Your Body"}

<br/>


<span className="
text-transparent
bg-clip-text
bg-gradient-to-r
from-red-500
to-orange-500
">

Build Your Best Version

</span>


</h1>







<p className="
text-gray-400
text-lg
mt-6
max-w-xl
leading-relaxed
">

{

data?.description ||

"Join our premium fitness community and achieve your fitness goals with expert trainers."

}


</p>







<div className="
flex
flex-wrap
gap-5
mt-8
">





<a

href={`tel:${data?.phone || ""}`}

className="
flex
items-center
gap-2
px-7
py-4
rounded-full
bg-gradient-to-r
from-red-500
to-orange-500
text-white
font-bold
shadow-lg
shadow-red-500/30
hover:scale-105
transition
"

>


<Phone size={20}/>


Call Now


</a>







<a

href={`https://wa.me/${data?.whatsapp || ""}`}

target="_blank"

className="
flex
items-center
gap-2
px-7
py-4
rounded-full
border
border-white/20
text-white
font-bold
hover:bg-white/10
transition
"

>


<Dumbbell size={20}/>


Book Free Trial


<ArrowRight size={18}/>


</a>





</div>






<div className="
flex
gap-8
mt-10
text-white
">


<div>

<h3 className="
text-3xl
font-bold
">

1000+

</h3>

<p className="
text-gray-400
">

Members

</p>

</div>




<div>

<h3 className="
text-3xl
font-bold
">

10+

</h3>

<p className="
text-gray-400
">

Years

</p>

</div>





<div>

<h3 className="
text-3xl
font-bold
">

24/7

</h3>

<p className="
text-gray-400
">

Access

</p>

</div>


</div>




</motion.div>









{/* RIGHT IMAGE */}



<motion.div


initial={{
opacity:0,
scale:.8
}}


animate={{
opacity:1,
scale:1
}}


transition={{
duration:1
}}


className="
relative
"


>



<div className="
absolute
inset-0
bg-red-500/20
blur-3xl
rounded-full
">

</div>





<img

src={
data?.heroImage ||

"https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
}

alt="Gym"

className="
relative
z-10
w-full
h-[550px]
object-cover
rounded-[40px]
border
border-white/10
shadow-2xl
"

/>






</motion.div>







</div>



</section>


)

}


export default Hero;