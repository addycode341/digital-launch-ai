import { motion } from "framer-motion";
import {
Award,
ShieldCheck,
Truck,
Settings
} from "lucide-react";


function About(){


const highlights=[

{
icon:<Award size={30}/>,
title:"Premium Quality",
desc:"High quality printing, stationery and leather products with professional finishing."
},

{
icon:<Settings size={30}/>,
title:"Modern Technology",
desc:"Advanced UV printing, 3D effects and customized cutting technology."
},

{
icon:<ShieldCheck size={30}/>,
title:"Trusted Service",
desc:"Reliable solutions for offices, schools, businesses and personal requirements."
},

{
icon:<Truck size={30}/>,
title:"Fast Delivery",
desc:"Quick processing and smooth delivery support for every order."
}

];



return(


<section

id="about"

className="
relative
bg-black
text-white
py-24
overflow-hidden
"

>


{/* Glow */}


<div

className="
absolute
left-0
top-20
w-80
h-80
bg-yellow-500/10
blur-[120px]
rounded-full
"

></div>





<div

className="
max-w-7xl
mx-auto
px-6
"

>


{/* Heading */}


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.7
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
text-yellow-500
uppercase
tracking-widest
font-semibold
"

>

About Indian Enterprises

</p>



<h2

className="
text-3xl
md:text-5xl
font-bold
mt-4
leading-tight
"

>

Complete Business Solutions

<span className="
text-yellow-500
">

 Under One Roof

</span>


</h2>


<p

className="
text-gray-400
max-w-2xl
mx-auto
mt-5
"

>

Professional printing, stationery and customized product solutions
with modern technology and premium quality.

</p>



</motion.div>







<div

className="
grid
md:grid-cols-2
gap-12
items-center
"

>





{/* LEFT */}



<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.7
}}

viewport={{
once:true
}}

>


<p

className="
text-gray-300
text-lg
leading-relaxed
"

>







Indian Enterprises provides premium printing services,
office stationery, school supplies, art & craft products,
and leather & rexine solutions.



</p>





<p

className="
text-gray-400
mt-5
leading-relaxed
"

>

We use modern printing solutions including UV printing,
3D effects and custom shape cutting technology to deliver
creative and reliable business solutions.


</p>





{/* Stats */}


<div

className="
mt-8
flex
flex-wrap
gap-5
"

>


<div

className="
bg-white/5
border
border-yellow-500/30
rounded-2xl
px-6
py-5
hover:-translate-y-2
transition
"

>

<h3

className="
text-3xl
font-bold
text-yellow-500
"

>

100+

</h3>


<p className="
text-gray-400
text-sm
">

Products Range

</p>


</div>




<div

className="
bg-white/5
border
border-yellow-500/30
rounded-2xl
px-6
py-5
hover:-translate-y-2
transition
"

>


<h3

className="
text-3xl
font-bold
text-yellow-500
"

>

Premium

</h3>


<p className="
text-gray-400
text-sm
">

Quality Finish

</p>


</div>



</div>


</motion.div>









{/* RIGHT CARDS */}



<motion.div

initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.7
}}

viewport={{
once:true
}}

className="
grid
sm:grid-cols-2
gap-5
"

>


{

highlights.map((item,index)=>(


<motion.div

key={index}

whileHover={{
y:-8
}}

className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
hover:border-yellow-500/50
transition
"

>


<div

className="
text-yellow-500
mb-5
"

>

{item.icon}

</div>



<h3

className="
text-xl
font-bold
mb-3
"

>

{item.title}

</h3>



<p

className="
text-gray-400
text-sm
leading-relaxed
"

>

{item.desc}

</p>



</motion.div>


))

}


</motion.div>




</div>



</div>


</section>


)

}


export default About;