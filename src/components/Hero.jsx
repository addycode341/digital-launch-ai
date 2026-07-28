import { motion } from "framer-motion";

import {
  Rocket,
  CheckCircle,
  Globe,
  BarChart3,
  MessageCircle
} from "lucide-react";


function Hero({ onStart, onDemo }) {


return (

<section

id="home"

className="
relative
min-h-screen
flex
items-center
overflow-hidden
px-5
sm:px-8
lg:px-12
pt-24
lg:pt-32
pb-12
lg:pb-20
"


>


{/* BACKGROUND */}

<div

className="
absolute
inset-0
bg-gradient-to-br
from-[#050816]
via-[#14051f]
to-[#050816]
"

/>




{/* PURPLE GLOW */}

<motion.div

animate={{
x:[0,80,0],
y:[0,50,0]
}}

transition={{
duration:12,
repeat:Infinity
}}

className="
absolute
w-[280px]
h-[280px]
sm:w-[500px]
sm:h-[500px]
bg-purple-600/30
blur-[140px]
rounded-full
top-0
left-0
"

/>





{/* PINK GLOW */}

<motion.div

animate={{
x:[0,-80,0],
y:[0,-40,0]
}}

transition={{
duration:14,
repeat:Infinity
}}

className="
absolute
w-[220px]
h-[220px]
sm:w-[450px]
sm:h-[450px]
bg-pink-500/20
blur-[130px]
rounded-full
right-0
bottom-0
"

/>






<div

className="
relative
z-10
w-full
max-w-7xl
mx-auto
grid
lg:grid-cols-2
gap-8
lg:gap-10
items-center
"


>




{/* LEFT */}


<motion.div

initial={{
opacity:0,
x:-40
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

>



<div

className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
bg-purple-500/10
border
border-purple-400/20
text-purple-300
text-sm
"

>

<Rocket size={18}/>

Digital Solutions For Businesses

</div>







<h1

className="
mt-6
text-4xl
sm:text-5xl
lg:text-6xl
xl:text-7xl
font-black
leading-[1.1]
"

>

Build A Powerful


<span

className="
block
bg-gradient-to-r
from-purple-400
via-pink-400
to-purple-500
bg-clip-text
text-transparent
"

>

Online Presence

</span>


For Your Business


</h1>







<p

className="
mt-5
text-gray-400
text-base
sm:text-lg
lg:text-xl
leading-relaxed
max-w-xl
"

>

Professional websites for local businesses with
WhatsApp integration, SEO setup and digital growth support.

</p>







<div

className="
flex
flex-col
sm:flex-row
gap-4
mt-7
"

>


<button

onClick={onStart}

className="
px-8
py-4
rounded-2xl
bg-gradient-to-r
from-purple-600
to-pink-500
font-bold
shadow-xl
shadow-purple-500/30
hover:scale-105
transition
"

>

Get Free Demo 🚀

</button>




<button

onClick={onDemo}

className="
px-8
py-4
rounded-2xl
bg-white/10
border
border-white/10
hover:bg-white/20
transition
"

>

View Templates

</button>


</div>









{/* STATS */}


<div

className="
grid
grid-cols-3
gap-3
mt-8
"

>

{

[
["50+","Business"],
["10+","Demo"],
["24/7","Support"]

].map((item,index)=>(


<div

key={index}

className="
rounded-2xl
p-3
sm:p-4
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
"

>


<h3

className="
text-xl
sm:text-2xl
font-bold
"

>

{item[0]}

</h3>


<p

className="
text-xs
sm:text-sm
text-gray-400
"

>

{item[1]}

</p>


</div>


))


}


</div>



</motion.div>










{/* RIGHT CARD */}



<motion.div


initial={{
opacity:0,
scale:.85
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:.8
}}


className="
relative
mt-6
lg:mt-0
w-full
"

>




<motion.div

animate={{
y:[0,-15,0]
}}

transition={{
duration:3,
repeat:Infinity
}}

className="
absolute
hidden
sm:flex
top-[-25px]
right-0
items-center
gap-2
bg-green-500/20
border
border-green-400/30
px-5
py-3
rounded-2xl
backdrop-blur-xl
"

>


<MessageCircle
size={18}
className="text-green-400"
/>


WhatsApp Leads


</motion.div>








<div

className="
rounded-[32px]
bg-white/[0.07]
border
border-white/10
backdrop-blur-2xl
p-4
sm:p-5
shadow-2xl
"

>


<div className="flex gap-2 mb-5">

<span className="w-3 h-3 rounded-full bg-red-400"/>

<span className="w-3 h-3 rounded-full bg-yellow-400"/>

<span className="w-3 h-3 rounded-full bg-green-400"/>

</div>






<div

className="
bg-[#090b16]
rounded-3xl
p-4
sm:p-5
"

>



<div

className="
h-3
rounded-full
bg-gradient-to-r
from-purple-500
to-pink-500
"

/>







<div

className="
mt-5
h-36
sm:h-40
rounded-3xl
bg-gradient-to-br
from-purple-600
to-pink-500
flex
items-center
justify-center
"

>



<motion.div

animate={{
rotate:360
}}

transition={{
duration:10,
repeat:Infinity,
ease:"linear"
}}

>

<Globe size={65}/>

</motion.div>


</div>







<div

className="
grid
grid-cols-2
gap-3
mt-5
"

>


<div

className="
bg-white/10
rounded-2xl
p-3
"

>

<BarChart3 className="text-pink-400"/>


<h4 className="font-bold mt-2 text-sm">

SEO Growth

</h4>


</div>





<div

className="
bg-white/10
rounded-2xl
p-3
"

>


<CheckCircle className="text-green-400"/>


<h4 className="font-bold mt-2 text-sm">

Website Ready

</h4>


</div>



</div>



</div>


</div>








<motion.div

animate={{
y:[0,15,0]
}}

transition={{
duration:4,
repeat:Infinity
}}

className="
absolute
hidden
sm:block
bottom-[-30px]
left-[-25px]
bg-white/[0.08]
border
border-white/10
rounded-2xl
p-5
backdrop-blur-xl
"


>


<div className="font-bold">

🤖 AI Website Builder

</div>


<p className="text-sm text-gray-400 mt-1">

Design • SEO • Launch 🚀

</p>


</motion.div>





</motion.div>





</div>



</section>


)

}


export default Hero;