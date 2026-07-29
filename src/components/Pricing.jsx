import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  Check,
  Rocket,
  Building2,
  Crown
} from "lucide-react";

import { useState } from "react";




const plans=[


{
name:"Starter",

monthly:999,

annual:9999,

icon:<Rocket size={28}/>,

desc:"Perfect for small businesses getting online",


featuresText:[

"Professional Business Website",
"Mobile Responsive Design",
"WhatsApp Integration",
"Hosting & SSL Security",
"Website Maintenance",
"Small Website Updates"

]

},





{
name:"Business",

monthly:1999,

annual:19999,

popular:true,

icon:<Building2 size={28}/>,

desc:"For businesses ready to grow online",


featuresText:[

"Everything in Starter",
"Premium Website Design",
"More Pages & Sections",
"Product / Service Showcase",
"Gallery & Testimonials",
"Analytics Dashboard",
"Priority Support"

]

},





{
name:"Premium",

monthly:4999,

annual:49999,

icon:<Crown size={28}/>,

desc:"For established businesses",


featuresText:[

"Everything in Business",
"Custom Advanced Website",
"Booking System",
"Customer Dashboard",
"Advanced Integrations",
"Priority Maintenance",
"Dedicated Support"

]

}


];







function Pricing(){


const navigate=useNavigate();


const [billing,setBilling]=useState("monthly");





const handlePlan=(plan)=>{


const selectedPlan={

...plan,

price:
billing==="monthly"
?
plan.monthly
:
plan.annual,


period:
billing==="monthly"
?
"/month"
:
"/year"

};



localStorage.setItem(

"selectedPlan",

JSON.stringify(selectedPlan)

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









{/* TOGGLE */}



<div

className="
mt-8
flex
justify-center
"

>


<div

className="
bg-white/10
border
border-white/10
p-2
rounded-2xl
"

>


<button

onClick={()=>setBilling("monthly")}


className={`
px-6
py-3
rounded-xl
font-semibold
transition

${
billing==="monthly"
?
"bg-purple-600"
:
""
}

`}

>

Monthly

</button>





<button

onClick={()=>setBilling("annual")}


className={`
px-6
py-3
rounded-xl
font-semibold
transition

${
billing==="annual"
?
"bg-purple-600"
:
""
}

`}

>

Annual

</button>


</div>


</div>



</div>













{/* CARDS */}



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

₹
{
billing==="monthly"
?
plan.monthly
:
plan.annual
}

</span>


<span

className="
text-gray-400
"

>

{
billing==="monthly"
?
"/month"
:
"/year"
}

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