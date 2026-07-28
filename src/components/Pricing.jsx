import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
Check,
Rocket,
Building2,
Crown
} from "lucide-react";





const plans=[



{

name:"Starter",

price:999,

period:"/month",

icon:<Rocket size={28}/>,

desc:"Perfect for small businesses getting online",


featuresText:[

"Professional Business Website",
"Mobile Responsive Design",
"WhatsApp Integration",
"Basic SEO Setup",
"Hosting & Security",
"Small Website Updates"

]

},






{

name:"Business",

price:1999,

period:"/month",

popular:true,

icon:<Building2 size={28}/>,

desc:"For businesses ready to grow online",


featuresText:[

"Everything in Starter",
"Advanced Website Design",
"Product / Service Management",
"Lead Capture System",
"Google Business Setup",
"Analytics Dashboard"

]


},






{

name:"Growth",

price:4999,

period:"/month",

icon:<Crown size={28}/>,

desc:"Complete digital growth solution",


featuresText:[

"Everything in Business",
"Advanced SEO Support",
"Google Ranking Strategy",
"Monthly Reports",
"Content Updates",
"Priority Support"

]


}



];









function Pricing(){



const navigate=useNavigate();




const handlePlan=(plan)=>{


localStorage.setItem(

"selectedPlan",

JSON.stringify(plan)

);


navigate("/payment");


};






return(



<section


id="pricing"


className="
relative

py-24

px-5
sm:px-6

overflow-hidden

scroll-mt-24

"


>







{/* BACKGROUND GLOW */}



<motion.div


animate={{

scale:[1,1.2,1],

x:[0,50,0]

}}



transition={{

duration:12,

repeat:Infinity

}}



className="
absolute

w-[500px]

h-[500px]

bg-purple-600/25

blur-[160px]

rounded-full

left-1/2

-translate-x-1/2

top-10

"

/>









<motion.div


animate={{

x:[0,-80,0],

y:[0,40,0]

}}



transition={{

duration:10,

repeat:Infinity

}}



className="
absolute

w-[350px]

h-[350px]

bg-pink-500/20

blur-[140px]

rounded-full

right-0

bottom-0

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





<div

className="
text-center

"


>



<div

className="
inline-flex

px-5

py-2

rounded-full

bg-purple-500/10

border

border-purple-400/20

text-purple-300

text-sm

font-semibold

"

>


🚀 Simple Pricing Plans


</div>







<h2

className="
mt-6

text-4xl

sm:text-5xl

font-black

"

>


Choose Your


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


Growth Plan


</span>



</h2>






<p

className="
mt-5

text-gray-400

text-lg

"

>


Choose a plan and launch your professional website.


</p>



</div>














{/* PRICING CARDS */}





<div


className="
grid

lg:grid-cols-3

gap-8

mt-16

"

>





{


plans.map((plan,index)=>(





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



viewport={{once:true}}



transition={{


delay:index*0.15


}}



whileHover={{


y:-12


}}



className={`

relative

rounded-[35px]

p-8

border

backdrop-blur-xl


${

plan.popular

?

"bg-gradient-to-b from-purple-600/30 to-pink-600/20 border-purple-400 shadow-2xl shadow-purple-500/20"

:

"bg-white/[0.06] border-white/10"

}

`}



>









{

plan.popular &&

<div

className="
absolute

-top-5

left-1/2

-translate-x-1/2

px-5

py-2

rounded-full

bg-gradient-to-r

from-purple-600

to-pink-500

text-sm

font-semibold

"

>


⭐ Most Popular


</div>


}









<div

className="
w-14

h-14

rounded-2xl

bg-gradient-to-br

from-purple-500/30

to-pink-500/30

flex

items-center

justify-center

text-purple-300

"

>


{plan.icon}


</div>









<h3

className="
text-3xl

font-bold

mt-6

"

>


{plan.name}


</h3>







<p

className="
text-gray-400

mt-3

"

>


{plan.desc}


</p>









<div

className="
mt-7

"

>


<span

className="
text-5xl

font-black

"

>

₹{plan.price}


</span>


<span className="
text-gray-400

"

>

{plan.period}


</span>


</div>









<ul

className="
mt-8

space-y-4

"


>


{


plan.featuresText.map((feature,i)=>(



<li

key={i}

className="
flex

gap-3

items-center

text-gray-300

"


>


<Check

size={18}

className="
text-pink-400

"

/>


{feature}



</li>


))


}



</ul>









<button



onClick={()=>handlePlan(plan)}



className="
mt-10

w-full

py-4

rounded-2xl

bg-gradient-to-r

from-purple-600

to-pink-500

font-bold

shadow-lg

shadow-purple-500/20

hover:scale-105

transition

"

>


Start With {plan.name} 🚀


</button>









</motion.div>





))


}




</div>






</div>





</section>


)

}



export default Pricing;