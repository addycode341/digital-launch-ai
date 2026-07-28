import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  CalendarDays,
  Users,
  Send
} from "lucide-react";




const info=[

{
icon:<Phone size={22}/>,
title:"Call Us",
text:"+91 98765 43210"
},


{
icon:<MapPin size={22}/>,
title:"Location",
text:"Delhi, India"
},


{
icon:<Clock size={22}/>,
title:"Opening Hours",
text:"12 PM - 11 PM"
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
bg-yellow-500/10
blur-[160px]
rounded-full
right-0
top-20
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
gap-14
items-center
"

>








{/* LEFT CONTENT */}



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
font-semibold
tracking-widest
">

RESERVE YOUR TABLE

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


Book Your

<span className="
text-yellow-400
">

Perfect Dining

</span>


Experience


</h2>







<p

className="
text-gray-400
text-lg
mt-6
leading-relaxed
"

>


Enjoy premium dishes, elegant ambience and
exceptional service. Reserve your table today
for an unforgettable experience.

</p>







<div

className="
mt-10
space-y-5
"

>


{

info.map((item,index)=>(


<div

key={index}

className="
flex
items-center
gap-5
p-5
rounded-3xl
bg-white/[0.06]
border
border-white/10
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

<h3 className="
font-bold
">

{item.title}

</h3>


<p className="
text-gray-400
text-sm
">

{item.text}

</p>


</div>


</div>


))


}



</div>





</motion.div>









{/* BOOKING FORM */}




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
rounded-[40px]
p-8
sm:p-10
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
"

>





<h3 className="
text-3xl
font-black
mb-8
">

Make Reservation

</h3>






<form

className="
space-y-5
"

>



<div

className="
grid
sm:grid-cols-2
gap-5
"

>


<input

placeholder="Your Name"

className="
w-full
px-5
py-4
rounded-2xl
bg-black/30
border
border-white/10
outline-none
focus:border-yellow-400
"

/>


<input

placeholder="Phone Number"

className="
w-full
px-5
py-4
rounded-2xl
bg-black/30
border
border-white/10
outline-none
focus:border-yellow-400
"

/>


</div>







<div

className="
grid
sm:grid-cols-2
gap-5
"

>


<div className="relative">


<CalendarDays

className="
absolute
left-4
top-4
text-yellow-400
"

size={20}

/>


<input

type="date"

className="
w-full
pl-12
px-5
py-4
rounded-2xl
bg-black/30
border
border-white/10
outline-none
"

/>


</div>






<div className="relative">


<Users

className="
absolute
left-4
top-4
text-yellow-400
"

size={20}

/>



<select

className="
w-full
pl-12
px-5
py-4
rounded-2xl
bg-black/30
border
border-white/10
outline-none
"

>


<option>

2 Guests

</option>


<option>

4 Guests

</option>


<option>

6 Guests

</option>


<option>

10+ Guests

</option>



</select>


</div>



</div>







<textarea

rows="4"

placeholder="Special Request"

className="
w-full
px-5
py-4
rounded-2xl
bg-black/30
border
border-white/10
outline-none
resize-none
"

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
to-orange-500
text-black
font-black
hover:scale-105
transition
"

>


Book Table

<Send size={20}/>


</button>






</form>




</motion.div>








</div>



</section>


)

}


export default Contact;