import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";



const templates = [


{
emoji:"🏠",
title:"Real Estate",
tag:"Property Website",
desc:"Property listings, enquiry system and modern business website.",
link:"/real-estate-demo"
},



{
emoji:"🏋️",
title:"Gym & Fitness",
tag:"Fitness Website",
desc:"Membership, trainers, programs and customer booking system.",
link:"/Gym-demo"
},



{
emoji:"🍔",
title:"Restaurant",
tag:"Food Business",
desc:"Digital menu, offers and customer ordering experience.",
link:"/restaurant-demo"
},



{
emoji:"📱",
title:"Mobile Store",
tag:"E-Commerce",
desc:"Product showcase with customer enquiry system.",
link:"/mobile-demo"
},



{
emoji:"💇",
title:"Salon",
tag:"Beauty Business",
desc:"Services, appointments and premium online presence.",
link:"/salon-demo"
},



{
emoji:"🏥",
title:"Clinic",
tag:"Healthcare",
desc:"Doctor profile, services and patient enquiry system.",
link:"/clinic-demo"
},



{
emoji:"🧁",
title:"Bakery",
tag:"Food Brand",
desc:"Cake ordering, products and premium bakery website.",
link:"/bakery-demo"
},



{
emoji:"🖨️",
title:"Printing",
tag:"Printing Business",
desc:"Business cards, banners, stationery and custom printing.",
link:"/printing-business"
}



];







function Templates(){


const navigate = useNavigate();



return(



<section


id="templates"


className="
relative

py-24

px-5
sm:px-6

overflow-hidden

scroll-mt-24

"


>








{/* PURPLE GLOW */}



<motion.div


animate={{


x:[0,80,0],

y:[0,40,0]


}}



transition={{


duration:12,

repeat:Infinity


}}



className="
absolute

w-[450px]

h-[450px]

bg-purple-600/25

blur-[150px]

rounded-full

left-0

top-20

"


/>









{/* PINK GLOW */}



<motion.div


animate={{


x:[0,-80,0],

y:[0,60,0]


}}



transition={{


duration:14,

repeat:Infinity


}}



className="
absolute

w-[450px]

h-[450px]

bg-pink-500/20

blur-[150px]

rounded-full

right-0

bottom-10

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









{/* HEADING */}




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

🚀 Ready Made Website Templates

</div>







<h2


className="
mt-6

text-4xl

sm:text-5xl

lg:text-6xl

font-black

"


>


Launch Your Business


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

Faster Online 🚀

</span>



</h2>






<p

className="
mt-5

text-gray-400

text-lg

max-w-2xl

mx-auto

"

>

Choose a professional design and launch your business faster.

</p>





</motion.div>














{/* TEMPLATE GRID */}




<div


className="
grid

sm:grid-cols-2

lg:grid-cols-3

gap-6

lg:gap-8

"


>





{


templates.map((item,index)=>(




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


delay:index*.08


}}



whileHover={{


y:-12,

scale:1.02


}}




className="
group

relative

rounded-[32px]

p-7

bg-white/[0.06]

border

border-white/10

backdrop-blur-xl

overflow-hidden

transition

hover:border-purple-400/40

"

>








{/* LIVE BADGE */}



<div

className="
absolute

top-5

right-5

px-3

py-1

rounded-full

bg-green-500/20

text-green-400

text-xs

font-semibold

"

>


● Live Demo


</div>









{/* ICON */}



<div

className="
w-20

h-20

rounded-3xl

bg-gradient-to-br

from-purple-500/30

to-pink-500/30

flex

items-center

justify-center

text-5xl

group-hover:scale-110

transition

"

>

{item.emoji}


</div>









<span


className="
inline-block

mt-6

px-4

py-1

rounded-full

bg-pink-500/10

text-pink-300

text-sm

"

>


{item.tag}


</span>









<h3

className="
text-2xl

font-bold

mt-5

group-hover:text-pink-400

transition

"

>

{item.title}


</h3>








<p

className="
text-gray-400

mt-3

leading-relaxed

"

>

{item.desc}


</p>









<button


onClick={()=>navigate(item.link)}



className="
mt-8

flex

items-center

gap-2

px-6

py-3

rounded-full

bg-gradient-to-r

from-purple-600

to-pink-500

font-semibold

shadow-lg

shadow-purple-500/20

hover:scale-105

transition

"

>


View Demo


<ExternalLink size={18}/>


</button>









{/* BOTTOM GLOW */}



<div


className="
absolute

bottom-0

left-0

h-1

w-0

bg-gradient-to-r

from-purple-500

to-pink-500

group-hover:w-full

transition-all

duration-500

"

/>







</motion.div>



))


}







</div>








</div>






</section>



)


}



export default Templates;