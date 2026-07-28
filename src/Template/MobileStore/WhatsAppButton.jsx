
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";


function WhatsAppButton({data}){


const phone =
data?.phone?.replace(/\D/g,"") ||
"919876543210";


const message =
encodeURIComponent(
`Hello ${data?.title || "Store"}, I want to know more about your products.`
);



return(


<motion.a

href={`https://wa.me/${phone}?text=${message}`}

target="_blank"

rel="noreferrer"


initial={{
scale:0,
opacity:0
}}


animate={{
scale:1,
opacity:1
}}


transition={{
duration:.5
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
text-black
flex
items-center
justify-center
shadow-2xl
"


>


<MessageCircle
size={32}
/>



</motion.a>


)

}


export default WhatsAppButton;