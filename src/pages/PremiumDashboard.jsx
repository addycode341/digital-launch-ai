import React from "react";

import {
Users,
Globe,
TrendingUp,
BarChart3,
Sparkles,
Crown,
Activity,
CheckCircle
} from "lucide-react";

import { motion } from "framer-motion";





function PremiumDashboard(){



const stats=[


{
title:"Website Visitors",
value:"12,540",
icon:<Users size={28}/>,
desc:"This month"
},


{
title:"Leads Generated",
value:"326",
icon:<TrendingUp size={28}/>,
desc:"Customer enquiries"
},


{
title:"Conversion Rate",
value:"8.4%",
icon:<BarChart3 size={28}/>,
desc:"Lead conversion"
},


{
title:"Website Status",
value:"Live",
icon:<Globe size={28}/>,
desc:"Running perfectly"
}



];








const tools=[


"Advanced Website Analytics",

"Customer Lead Management",

"SEO Performance Reports",

"AI Growth Suggestions",

"Monthly Business Reports",

"Priority Support"


];







return(


<div

className="
min-h-screen
bg-[#050816]
text-white
p-6
md:p-10
"

>






{/* HEADER */}



<motion.div


initial={{
opacity:0,
y:-30
}}


animate={{
opacity:1,
y:0
}}



className="
flex
flex-col
md:flex-row
justify-between
gap-5
"

>



<div>


<div

className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
bg-yellow-500/10
border
border-yellow-400/20
text-yellow-400
"

>


<Crown size={18}/>


Premium Dashboard


</div>




<h1

className="
text-4xl
font-black
mt-5
"

>


Business Growth Center 🚀


</h1>



<p

className="
text-gray-400
mt-3
"

>


Track your website performance and customer growth.


</p>



</div>





<div

className="
bg-white/10
rounded-2xl
px-6
py-4
border
border-white/10
"

>


<p className="text-gray-400">

Current Plan

</p>


<h2

className="
text-2xl
font-bold
text-yellow-400
"

>


Premium


</h2>


</div>





</motion.div>









{/* STATS */}





<div

className="
grid
sm:grid-cols-2
xl:grid-cols-4
gap-6
mt-10
"

>


{

stats.map((item,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
y:30
}}


animate={{
opacity:1,
y:0
}}


transition={{
delay:index*0.1
}}



className="
bg-white/[0.06]
border
border-white/10
rounded-3xl
p-6
backdrop-blur-xl
"

>


<div

className="
w-14
h-14
rounded-2xl
bg-purple-600/20
flex
items-center
justify-center
text-purple-400
"

>


{item.icon}


</div>




<h3

className="
mt-5
text-gray-400
"

>


{item.title}


</h3>




<h2

className="
text-3xl
font-black
mt-2
"

>


{item.value}


</h2>




<p

className="
text-sm
text-gray-500
mt-2
"

>


{item.desc}


</p>




</motion.div>


))


}



</div>









{/* ANALYTICS */}



<div

className="
mt-10
grid
lg:grid-cols-2
gap-8
"

>





<div

className="
bg-white/[0.06]
border
border-white/10
rounded-3xl
p-8
"

>


<div

className="
flex
items-center
gap-3
"

>


<Activity

className="text-green-400"

/>


<h2

className="
text-2xl
font-bold
"

>


Website Performance


</h2>


</div>





<div

className="
mt-8
space-y-5
"

>


<div>


<div className="flex justify-between">

<span>
Website Speed
</span>

<span>
98%
</span>

</div>


<div

className="
h-2
bg-white/10
rounded-full
mt-2
"

>


<div

className="
h-full
w-[98%]
bg-green-400
rounded-full
"

/>


</div>


</div>







<div>


<div className="flex justify-between">

<span>
SEO Score
</span>

<span>
92%
</span>

</div>


<div

className="
h-2
bg-white/10
rounded-full
mt-2
"

>


<div

className="
h-full
w-[92%]
bg-purple-500
rounded-full
"

/>


</div>


</div>





</div>



</div>









{/* PREMIUM TOOLS */}





<div

className="
bg-gradient-to-br
from-purple-600/20
to-pink-600/20
border
border-white/10
rounded-3xl
p-8
"

>


<div

className="
flex
items-center
gap-3
"

>


<Sparkles

className="text-pink-400"

/>


<h2

className="
text-2xl
font-bold
"

>

Premium Tools


</h2>


</div>






<div

className="
mt-6
space-y-4
"

>


{

tools.map((tool,index)=>(



<div

key={index}

className="
flex
items-center
gap-3
text-gray-300
"

>


<CheckCircle

size={20}

className="
text-green-400
"

/>


{tool}


</div>


))


}



</div>



</div>






</div>






</div>


)


}


export default PremiumDashboard;