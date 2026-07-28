import { motion } from "framer-motion";

import {
  MessageCircle
} from "lucide-react";




function WhatsAppButton(){


return(


<motion.a


href="https://wa.me/919876543210"

target="_blank"

initial={{

scale:0

}}


animate={{

scale:1

}}



whileHover={{

scale:1.1

}}



className="
fixed
bottom-6
right-6
z-50
w-16
h-16
rounded-full
bg-green-500
text-white
flex
items-center
justify-center
shadow-2xl
"

>


<MessageCircle size={32}/>



<div

className="
absolute
inset-0
rounded-full
bg-green-400
animate-ping
opacity-30
"

/>


</motion.a>


)

}


export default WhatsAppButton;