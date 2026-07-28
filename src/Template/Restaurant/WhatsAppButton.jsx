import { motion } from "framer-motion";
import {
  MessageCircle
} from "lucide-react";



function WhatsAppButton(){


return(


<motion.a


href="https://wa.me/919876543210"

target="_blank"

rel="noreferrer"



animate={{

scale:[1,1.1,1]

}}


transition={{

duration:2,

repeat:Infinity

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
hover:scale-110
transition
"

>


<MessageCircle size={32}/>


</motion.a>


)

}


export default WhatsAppButton;