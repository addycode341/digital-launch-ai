import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  CalendarCheck,
  ArrowRight
} from "lucide-react";





const contactInfo=[


{
icon:<Phone size={22}/>,
title:"Call Us",
text:"+91 98765 43210"
},



{
icon:<Mail size={22}/>,
title:"Email",
text:"hello@luxesalon.com"
},



{
icon:<MapPin size={22}/>,
title:"Location",
text:"New Delhi, India"
}



];








function Contact(){


return(


<section

id="contact"

className="
relative
py-28
px-5
sm:px-8
bg-black
overflow-hidden
"

>







<div

className="
absolute
w-[500px]
h-[500px]
bg-pink-500/10
blur-[150px]
rounded-full
left-0
"

 />








<div

className="
relative
z-10
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



<p

className="
text-yellow-400
font-semibold
tracking-widest
"

>

BOOK APPOINTMENT

</p>








<h2

className="
text-5xl
sm:text-6xl
font-black
mt-5
leading-tight
"

>


Ready For Your

<span

className="
block
bg-gradient-to-r
from-yellow-400
to-pink-500
bg-clip-text
text-transparent
"

>

Luxury Makeover?

</span>


</h2>








<p

className="
text-gray-400
mt-6
text-lg
leading-relaxed
"

>


Schedule your appointment with our expert
beauty artists and experience premium salon care.

</p>








<div

className="
space-y-5
mt-10
"

>


{

contactInfo.map((item,index)=>(


<div

key={index}

className="
flex
items-center
gap-5
"

>


<div

className="
w-12
h-12
rounded-xl
bg-yellow-400/20
text-yellow-400
flex
items-center
justify-center
"

>

{item.icon}

</div>





<div>

<h4

className="
font-bold
"

>

{item.title}

</h4>


<p

className="
text-gray-400
text-sm
"

>

{item.text}

</p>

</div>



</div>


))


}



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







<h3

className="
text-3xl
font-black
"

>

Book Your Visit

</h3>





<p

className="
text-gray-400
mt-2
"

>

Fill the details and our team will contact you.

</p>







<div

className="
space-y-5
mt-8
"

>


<input

className="
w-full
px-5
py-4
rounded-2xl
bg-black/40
border
border-white/10
outline-none
focus:border-yellow-400
"

placeholder="Your Name"

/>





<input

className="
w-full
px-5
py-4
rounded-2xl
bg-black/40
border
border-white/10
outline-none
focus:border-yellow-400
"

placeholder="Phone Number"

/>





<select

className="
w-full
px-5
py-4
rounded-2xl
bg-black/40
border
border-white/10
outline-none
"

>


<option>
Select Service
</option>

<option>
Hair Styling
</option>

<option>
Bridal Makeup
</option>

<option>
Spa Treatment
</option>

<option>
Skin Care
</option>


</select>







<textarea

rows="4"

className="
w-full
px-5
py-4
rounded-2xl
bg-black/40
border
border-white/10
outline-none
focus:border-yellow-400
"

placeholder="Message"

/>






<button

className="
w-full
flex
items-center
justify-center
gap-3
py-4
rounded-full
bg-gradient-to-r
from-yellow-400
to-pink-500
text-black
font-black
hover:scale-105
transition
"

>


<CalendarCheck size={20}/>


Confirm Appointment


</button>







<button

className="
w-full
flex
items-center
justify-center
gap-3
py-4
rounded-full
border
border-green-500/30
text-green-400
hover:bg-green-500/10
transition
"

>


WhatsApp Booking

<ArrowRight size={18}/>


</button>






</div>







</motion.div>








</div>






</section>


)

}



export default Contact;