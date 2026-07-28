import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  MessageCircle
} from "lucide-react";



function Contact({data}){


return(

<section

id="contact"

className="
py-20
sm:py-28
px-4
sm:px-8
bg-black
"

>


<div

className="
max-w-7xl
mx-auto
grid
lg:grid-cols-2
gap-8
lg:gap-12
"

>





{/* LEFT */}


<motion.div


initial={{
opacity:0,
x:-40
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


transition={{
duration:.6
}}

>


<p className="
text-blue-400
tracking-[3px]
text-sm
font-semibold
">

CONTACT STORE

</p>




<h2 className="
text-4xl
sm:text-5xl
lg:text-6xl
font-black
mt-4
leading-tight
">

Visit Our

<span className="
block
text-purple-500
">

Premium Store

</span>

Today

</h2>




<p className="
text-gray-400
mt-5
text-sm
sm:text-lg
">

Get latest smartphones, exclusive offers and expert guidance from our team.

</p>







<div className="
mt-8
space-y-4
">





{/* PHONE */}


<div className="
flex
items-center
gap-4
p-4
rounded-3xl
bg-white/[0.06]
border
border-white/10
">


<div className="
w-12
h-12
rounded-2xl
bg-blue-500/10
text-blue-400
flex
items-center
justify-center
">

<Phone size={22}/>

</div>
</div>

<div>

<p className="font-bold">
Call Us
</p>


<p className="text-gray-400 text-sm">
{data?.phone || "+91 98765 43210"}
</p>


</div>


</div>








{/* EMAIL */}



<div className="
flex
items-center
gap-4
p-4
rounded-3xl
bg-white/[0.06]
border
border-white/10
">


<div className="
w-12
h-12
rounded-2xl
bg-purple-500/10
text-purple-400
flex
items-center
justify-center
">

<Mail size={22}/>

</div>


<div>

<p className="font-bold">
Email
</p>


<p className="text-gray-400 text-sm">
support@mobilehub.com
</p>


</div>


</div>









{/* LOCATION */}



<div className="
flex
items-center
gap-4
p-4
rounded-3xl
bg-white/[0.06]
border
border-white/10
">


<div className="
w-12
h-12
rounded-2xl
bg-green-500/10
text-green-400
flex
items-center
justify-center
">

<MapPin size={22}/>

</div>


<div>

<p className="font-bold">
Store Location
</p>


<p className="text-gray-400 text-sm">

{data?.location || "Delhi, India"}

</p>


</div>


</div>







<div className="
flex
items-center
gap-3
text-gray-400
mt-5
">

<Clock size={18}/>

Open: 10 AM - 9 PM

</div>








<div className="
flex
gap-4
mt-7
">


<button className="
flex-1
py-3
rounded-full
bg-green-500
text-black
font-bold
flex
items-center
justify-center
gap-2
">


<MessageCircle size={18}/>

WhatsApp

</button>




<button className="
flex-1
py-3
rounded-full
bg-white/10
border
border-white/10
font-bold
">

Call Now

</button>



</div>





</motion.div>











{/* FORM */}



<motion.div


initial={{
opacity:0,
x:40
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


transition={{
duration:.6
}}



className="
p-5
sm:p-8
rounded-[35px]
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
"

>



<h3 className="
text-2xl
sm:text-3xl
font-black
">

Book Your Device

</h3>



<p className="
text-gray-400
mt-2
text-sm
">

Fill details and our team will contact you.

</p>





<div className="
mt-6
space-y-4
">


<input

placeholder="Your Name"

className="
w-full
p-4
rounded-2xl
bg-black/40
border
border-white/10
outline-none
"

/>





<input

placeholder="Phone Number"

className="
w-full
p-4
rounded-2xl
bg-black/40
border
border-white/10
outline-none
"

/>






<input

placeholder="Interested Phone Model"

className="
w-full
p-4
rounded-2xl
bg-black/40
border
border-white/10
outline-none
"

/>






<textarea

placeholder="Your Message"

rows="4"

className="
w-full
p-4
rounded-2xl
bg-black/40
border
border-white/10
outline-none
"

/>






<button

className="
w-full
py-4
rounded-full
bg-gradient-to-r
from-blue-500
to-purple-600
font-bold
flex
items-center
justify-center
gap-3
"

>


<Send size={18}/>

Send Enquiry


</button>




</div>



</motion.div>






</div>


</section>


)

}


export default Contact;