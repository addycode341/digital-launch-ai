import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import gymData from "./gymData";


function WhatsAppButton(){


return(


<motion.a

href={`https://wa.me/${gymData.whatsapp}?text=Hi%20I%20want%20to%20join%20${gymData.businessName}`}

target="_blank"

rel="noopener noreferrer"


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
shadow-xl
shadow-green-500/30
"

>



<MessageCircle

size={32}

/>



</motion.a>


)

}


export default WhatsAppButton;