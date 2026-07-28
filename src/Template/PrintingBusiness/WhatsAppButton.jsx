import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";


function WhatsAppButton(){


return(


<motion.a

href="#"

target="_blank"

initial={{
opacity:0,
scale:0.5
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:.5
}}


className="
fixed
bottom-6
right-6
z-50
"

>



{/* Pulse */}


<motion.div

animate={{

scale:[1,1.3,1],
opacity:[0.5,0,0.5]

}}

transition={{

duration:2,
repeat:Infinity

}}

className="
absolute
inset-0
bg-green-500
rounded-full
"

/>








<div

className="
relative
w-16
h-16
rounded-full
bg-green-500
text-white
flex
items-center
justify-center
shadow-2xl
hover:scale-110
transition
"

>


<MessageCircle size={32}/>


</div>







</motion.a>


)

}


export default WhatsAppButton;