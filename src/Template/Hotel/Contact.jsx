import { motion } from "framer-motion";

import {
Phone,
Mail,
MapPin,
CalendarDays
} from "lucide-react";




function Contact({data}){


return(


<section

id="contact"

className="
py-28
px-5
sm:px-8
bg-[#080808]
"

>


<div

className="
max-w-7xl
mx-auto
grid
lg:grid-cols-2
gap-12
items-center
"

>





{/* LEFT */}



<motion.div


initial={{
opacity:0,
x:-50
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}

>


<p className="
text-yellow-400
tracking-[5px]
font-semibold
">

CONTACT HOTEL

</p>



<h2 className="
text-5xl
sm:text-6xl
font-black
mt-5
leading-tight
">

Reserve Your

<span className="
block
text-yellow-400
">

Luxury Stay

</span>

</h2>





<p className="
text-gray-400
mt-6
text-lg
leading-relaxed
">

Plan your perfect getaway with our premium hospitality
and personalized services.

</p>







<div className="
mt-10
space-y-5
">


<div className="
flex
items-center
gap-4
">

<div className="
w-12
h-12
rounded-xl
bg-yellow-400/10
flex
items-center
justify-center
">

<Phone className="text-yellow-400"/>

</div>


<span>

{data?.phone || "+91 98765 43210"}

</span>


</div>






<div className="
flex
items-center
gap-4
">


<div className="
w-12
h-12
rounded-xl
bg-yellow-400/10
flex
items-center
justify-center
">


<Mail className="text-yellow-400"/>


</div>



<span>

booking@royalstay.com

</span>



</div>







<div className="
flex
items-center
gap-4
">


<div className="
w-12
h-12
rounded-xl
bg-yellow-400/10
flex
items-center
justify-center
">

<MapPin className="text-yellow-400"/>

</div>


<span>

{data?.location || "New Delhi, India"}

</span>


</div>




</div>




</motion.div>









{/* FORM */}



<motion.div


initial={{
opacity:0,
x:50
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}



className="
p-8
sm:p-10
rounded-[40px]
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
"

>



<h3 className="
text-3xl
font-black
">

Book Your Room

</h3>


<p className="
text-gray-400
mt-2
">

Fill details and our team will contact you.

</p>







<div className="
space-y-5
mt-8
">


<input

placeholder="Full Name"

className="
w-full
p-4
rounded-xl
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
rounded-xl
bg-black/40
border
border-white/10
outline-none
"

/>





<div className="
grid
sm:grid-cols-2
gap-4
">


<div className="
relative
">


<CalendarDays

className="
absolute
left-4
top-4
text-yellow-400
"

size={18}

/>


<input

placeholder="Check In"

className="
w-full
pl-12
p-4
rounded-xl
bg-black/40
border
border-white/10
outline-none
"

/>


</div>






<input

placeholder="Guests"

className="
w-full
p-4
rounded-xl
bg-black/40
border
border-white/10
outline-none
"

/>



</div>







<button

className="
w-full
py-4
rounded-full
mt-5
bg-gradient-to-r
from-yellow-400
to-orange-500
text-black
font-bold
hover:scale-105
transition
"

>

Check Availability

</button>



</div>





</motion.div>






</div>


</section>


)

}


export default Contact;