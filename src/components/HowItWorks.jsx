import { motion } from "framer-motion";


const steps = [

{
number:"01",
icon:"📞",
title:"Discuss Your Business",
desc:"Share your business details, services, goals and website requirements with our team."
},

{
number:"02",
icon:"🎨",
title:"We Build Your Website",
desc:"Our team creates a professional, mobile-friendly website designed for your customers."
},

{
number:"03",
icon:"🚀",
title:"Launch & Grow",
desc:"Get your website live with hosting, WhatsApp integration and digital growth support."
}

];





function HowItWorks(){


return(


<section

className="
relative
py-20
sm:py-28
px-5
sm:px-6
overflow-hidden
"

>


{/* BACKGROUND GLOW */}


<motion.div

animate={{

x:[0,80,0],
y:[0,50,0],
scale:[1,1.15,1]

}}

transition={{

duration:14,
repeat:Infinity,
ease:"easeInOut"

}}

className="
absolute
w-[350px]
sm:w-[600px]

h-[350px]
sm:h-[600px]

bg-purple-600/30
blur-[140px]
rounded-full

left-1/2
-translate-x-1/2
top-10

"

/>






<motion.div


animate={{

x:[0,-60,0],
y:[0,40,0]

}}


transition={{

duration:12,
repeat:Infinity

}}



className="
absolute

w-[250px]
sm:w-[400px]

h-[250px]
sm:h-[400px]

bg-pink-500/20

blur-[120px]

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
"

>


<span

className="
inline-flex
px-4
py-2

rounded-full

bg-purple-500/10

border
border-purple-400/30

text-purple-300

text-xs
sm:text-sm

font-semibold

"

>

✨ Simple Process

</span>






<h2

className="
mt-6

text-3xl
sm:text-4xl
lg:text-6xl

font-black

leading-tight

"

>


How DigitalLaunch AI Works



<span

className="
block
sm:inline

bg-gradient-to-r

from-purple-400

via-pink-400

to-purple-400

bg-clip-text

text-transparent

"

>

 🚀

</span>


</h2>






<p

className="
mt-5

max-w-2xl

mx-auto

text-gray-400

text-base
sm:text-lg

leading-relaxed

"

>


From idea to professional website in simple steps.


</p>



</motion.div>













{/* PROCESS CARDS */}



<div


className="
relative

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

gap-6

sm:gap-8

mt-12

sm:mt-16

"

>




{/* DESKTOP LINE */}


<div


className="
hidden
lg:block

absolute

top-28

left-[18%]

right-[18%]

h-[2px]

bg-gradient-to-r

from-purple-500

via-pink-500

to-purple-500

opacity-40

"

/>







{

steps.map((step,index)=>(




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

once:true,
amount:0.2

}}



transition={{

duration:.6,
delay:index*.15

}}



whileHover={{

y:-12

}}



className="
group

relative

p-6
sm:p-8

rounded-[30px]

bg-white/[0.06]

border

border-white/10

backdrop-blur-xl

overflow-hidden

hover:border-pink-400/50

transition-all

duration-300

"

>







{/* HOVER EFFECT */}



<div


className="
absolute
inset-0

bg-gradient-to-br

from-purple-500/20

to-pink-500/20

opacity-0

group-hover:opacity-100

transition

"

/>








<div

className="
absolute

top-5
right-5

text-7xl

font-black

text-white/5

"

>

{step.number}

</div>








<div

className="
relative
z-10

"

>






{/* ICON */}



<div

className="
w-20
h-20

sm:w-24
sm:h-24

rounded-3xl

bg-gradient-to-br

from-purple-500/20

to-pink-500/20

border

border-white/10

flex

items-center

justify-center

text-5xl

sm:text-6xl

group-hover:scale-110

transition

"

>

{step.icon}

</div>









<h3


className="
mt-7

text-xl

sm:text-2xl

font-bold

group-hover:text-pink-400

transition

"

>


{step.title}


</h3>







<p


className="
mt-4

text-sm

sm:text-base

text-gray-400

leading-relaxed

"

>


{step.desc}


</p>







<div


className="
mt-7

h-1

w-16

rounded-full

bg-gradient-to-r

from-purple-500

to-pink-500

group-hover:w-32

transition-all

duration-500

"

/>






</div>






</motion.div>



))

}



</div>






</div>



</section>


)

}


export default HowItWorks;