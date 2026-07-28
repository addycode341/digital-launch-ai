import { motion } from "framer-motion";


function AnimationWrapper({

children,

delay=0,

direction="up",

duration=0.8,

once=true

}){



const animations={


up:{
opacity:0,
y:60,
scale:0.96,
filter:"blur(10px)"
},


down:{
opacity:0,
y:-60,
scale:0.96,
filter:"blur(10px)"
},


left:{
opacity:0,
x:-60,
scale:0.96,
filter:"blur(10px)"
},


right:{
opacity:0,
x:60,
scale:0.96,
filter:"blur(10px)"
},


zoom:{
opacity:0,
scale:0.85,
filter:"blur(12px)"
}


};





return(



<motion.div



initial={

animations[direction]

}



whileInView={{


opacity:1,

x:0,

y:0,

scale:1,

filter:"blur(0px)"


}}



transition={{


duration,

delay,


ease:[0.22,1,0.36,1]


}}



viewport={{

once,

amount:0.15

}}



>



{children}



</motion.div>



)



}



export default AnimationWrapper;