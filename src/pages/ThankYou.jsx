import { motion } from "framer-motion";
import { CheckCircle, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";


function ThankYou(){

const navigate = useNavigate();


return(

<section className="
min-h-screen
bg-[#050816]
flex
items-center
justify-center
px-5
text-white
">


<motion.div

initial={{
opacity:0,
scale:0.8
}}

animate={{
opacity:1,
scale:1
}}

className="
max-w-lg
w-full
bg-white/10
border
border-white/10
backdrop-blur-xl
rounded-[35px]
p-10
text-center
"


>


<div className="
flex
justify-center
">

<CheckCircle

size={80}

className="
text-green-400
"

/>

</div>


<h1 className="
text-4xl
font-black
mt-6
">

Payment Successful 🎉

</h1>


<p className="
text-gray-400
mt-4
text-lg
">

Thank you for choosing DigitalLaunch AI.
Your website plan has been activated.

</p>



<div className="
mt-8
bg-white/10
rounded-2xl
p-5
flex
items-center
gap-4
">


<Rocket
className="text-purple-400"
/>


<div className="text-left">

<h3 className="font-bold">

Next Step 🚀

</h3>

<p className="text-sm text-gray-400">

Our team will contact you shortly.

</p>


</div>


</div>




<button

onClick={()=>navigate("/")}

className="
mt-8
w-full
py-4
rounded-2xl
bg-gradient-to-r
from-purple-600
to-pink-500
font-bold
"

>

Go To Home

</button>


</motion.div>


</section>


)

}


export default ThankYou;