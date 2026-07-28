import { motion } from "framer-motion";


function AnimatedBackground(){


const particles = Array.from({length:12});


return(

<div

className="
absolute
inset-0
overflow-hidden
-z-10
pointer-events-none
"

>


{/* DARK BASE */}

<div

className="
absolute
inset-0
bg-gradient-to-br
from-slate-950
via-[#0b0714]
to-slate-950
"

/>





{/* PURPLE MAIN GLOW */}


<motion.div


animate={{

x:[0,120,0],

y:[0,80,0],

scale:[1,1.25,1]

}}


transition={{

duration:18,

repeat:Infinity,

ease:"easeInOut"

}}



className="
absolute
-top-20
-left-20
w-[450px]
sm:w-[650px]
h-[450px]
sm:h-[650px]
bg-purple-600/30
rounded-full
blur-[160px]
"

/>









{/* PINK GLOW */}



<motion.div


animate={{


x:[0,-100,0],

y:[0,120,0],

scale:[1,1.3,1]


}}



transition={{


duration:16,

repeat:Infinity,

ease:"easeInOut"


}}



className="
absolute
right-0
top-1/3
w-[400px]
sm:w-[550px]
h-[400px]
sm:h-[550px]
bg-pink-500/25
rounded-full
blur-[150px]
"

/>









{/* VIOLET BOTTOM */}



<motion.div


animate={{


x:[0,80,0],

y:[0,-70,0]


}}



transition={{


duration:14,

repeat:Infinity


}}



className="
absolute
bottom-0
left-1/3
w-[350px]
h-[350px]
bg-violet-600/30
rounded-full
blur-[130px]
"

/>









{/* GRID EFFECT */}



<div

className="
absolute
inset-0
opacity-[0.08]
bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
bg-[size:60px_60px]
"

/>









{/* FLOATING PARTICLES */}



{

particles.map((_,index)=>(


<motion.span


key={index}


animate={{


y:[0,-80,0],

x:[0,30,-20,0],

opacity:[0.1,0.8,0.1],

scale:[1,1.8,1]


}}



transition={{


duration:5+index,

repeat:Infinity,

ease:"easeInOut"


}}



className="
absolute
w-1.5
h-1.5
rounded-full
bg-gradient-to-r
from-purple-400
to-pink-400
"



style={{


left:`${Math.random()*100}%`,

top:`${Math.random()*100}%`


}}



/>


))


}





{/* CENTER LIGHT */}



<motion.div


animate={{

opacity:[0.2,0.5,0.2],

scale:[1,1.2,1]

}}



transition={{

duration:8,

repeat:Infinity

}}



className="
absolute
left-1/2
top-1/2
-translate-x-1/2
-translate-y-1/2
w-[300px]
h-[300px]
bg-pink-500/10
rounded-full
blur-[100px]
"

/>





</div>


)

}


export default AnimatedBackground;