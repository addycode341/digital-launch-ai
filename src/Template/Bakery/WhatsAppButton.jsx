import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import bakeryData from "../../data/bakeryDemo";


function WhatsAppButton(){


return(


<motion.a

href={`https://wa.me/${bakeryData.whatsapp}`}

target="_blank"

rel="noreferrer"


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

bg-[#25D366]

text-white

flex

items-center

justify-center

shadow-2xl

"

>


<MessageCircle

size={32}

fill="white"

/>



</motion.a>


)

}


export default WhatsAppButton;