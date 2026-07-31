import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";


function WhatsAppButton(){


const [show,setShow] = useState(true);



return(


<div

className="
fixed
bottom-6
right-6
z-50
flex
flex-col
items-end
gap-3
"

>





{/* Chat Popup */}


{

show &&

<motion.div


initial={{
opacity:0,
x:30
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:0.5
}}



className="
bg-white
text-black
px-5
py-3
rounded-2xl
shadow-xl
flex
items-center
gap-3
"

>


<div>


<p

className="
font-bold
text-sm
"

>

Chat with us

</p>


<p

className="
text-xs
text-gray-500
"

>

Need help?

</p>


</div>



<button

onClick={()=>setShow(false)}

className="
text-gray-400
hover:text-black
"

>

<X size={16}/>

</button>



</motion.div>


}









{/* WhatsApp Button */}


<motion.a


href="https://wa.me/919999999999"

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
relative
"

>


{/* Pulse */}

<span

className="
absolute
inset-0
rounded-full
bg-green-500
animate-ping
opacity-30
"

></span>





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
"

>


<MessageCircle size={32}/>


</div>



</motion.a>





</div>


)

}


export default WhatsAppButton;