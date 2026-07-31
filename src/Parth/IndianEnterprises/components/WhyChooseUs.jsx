import { motion } from "framer-motion";
import {
Award,
Cpu,
ShieldCheck,
Truck,
Sparkles
} from "lucide-react";


function WhyChooseUs(){


const reasons=[

{
icon:<Award size={32}/>,
title:"Premium Quality",
desc:"We provide high quality printing, stationery and leather products with excellent finishing."
},

{
icon:<Cpu size={32}/>,
title:"Modern Technology",
desc:"Advanced UV printing, 3D effects and precision cutting technology."
},

{
icon:<ShieldCheck size={32}/>,
title:"Trusted Solutions",
desc:"Reliable products and services for offices, schools and businesses."
},

{
icon:<Truck size={32}/>,
title:"On Time Delivery",
desc:"Fast processing and smooth delivery experience."
},

{
icon:<Sparkles size={32}/>,
title:"Customized Products",
desc:"Custom designs and personalized solutions according to customer needs."
}

];



return(

<section

className="
bg-black
text-white
py-24
"

>


<div

className="
max-w-7xl
mx-auto
px-6
"

>


<motion.div

initial={{
opacity:0,
y:30
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
mb-14
"

>


<p className="
text-yellow-500
uppercase
tracking-widest
font-semibold
">

Why Choose Us

</p>



<h2 className="
text-3xl
md:text-5xl
font-bold
mt-3
">

Why Indian

<span className="
text-yellow-500
">

 Enterprises?

</span>

</h2>



<p className="
text-gray-400
max-w-2xl
mx-auto
mt-4
">

Quality products, modern technology and professional service make us the right choice.

</p>



</motion.div>







<div

className="
grid
sm:grid-cols-2
lg:grid-cols-5
gap-6
"

>


{

reasons.map((item,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
delay:index*0.1
}}


viewport={{
once:true
}}



className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
hover:border-yellow-500
hover:-translate-y-3
transition
duration-300
"


>



<div

className="
w-14
h-14
rounded-2xl
bg-yellow-500
text-black
flex
items-center
justify-center
mb-5
"

>

{item.icon}

</div>




<h3 className="
text-xl
font-bold
mb-3
">

{item.title}

</h3>



<p className="
text-gray-400
text-sm
leading-relaxed
">

{item.desc}

</p>



</motion.div>


))

}


</div>


</div>


</section>


)

}


export default WhyChooseUs;