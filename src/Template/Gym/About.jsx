import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Target,
  Award
} from "lucide-react";



function About({data}){


return(


<section

id="about"

className="
relative
py-24
px-6
md:px-12
bg-black
overflow-hidden
"

>


<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-12
items-center
">






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

>


<p className="
text-red-500
font-bold
tracking-[4px]
text-sm
">

ABOUT US

</p>



<h2 className="
text-4xl
md:text-5xl
font-extrabold
text-white
mt-4
">

Build Strength.
Transform Life.

</h2>





<p className="
text-gray-400
mt-6
leading-8
">

{

data?.description ||

"Premium fitness training with expert coaches, modern equipment and a community that helps you achieve your goals."

}


</p>







<div className="
mt-8
space-y-4
">



<div className="
flex
items-center
gap-4
text-white
">


<div className="
w-12
h-12
rounded-xl
bg-red-500/20
flex
items-center
justify-center
text-red-500
">

<MapPin/>

</div>


<div>

<p className="
text-gray-400
text-sm
">

Location

</p>


<p className="
font-bold
">

{data?.location || "Delhi"}

</p>


</div>


</div>






<div className="
flex
items-center
gap-4
text-white
">


<div className="
w-12
h-12
rounded-xl
bg-red-500/20
flex
items-center
justify-center
text-red-500
">

<Target/>

</div>


<div>

<p className="
text-gray-400
text-sm
">

Our Mission

</p>


<p className="
font-bold
">

Fitness For Everyone

</p>


</div>


</div>





</div>



</motion.div>









{/* RIGHT CARD */}



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

className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
backdrop-blur-xl
"

>



<div className="
w-16
h-16
rounded-2xl
bg-gradient-to-br
from-red-500
to-orange-500
flex
items-center
justify-center
text-white
mb-6
">


<Award size={32}/>


</div>




<h3 className="
text-3xl
font-bold
text-white
">

{data?.businessName || "Premium Fitness Club"}

</h3>




<p className="
text-gray-400
mt-4
leading-7
">

A complete fitness destination with professional trainers, personalized programs and world-class facilities.

</p>





<div className="
mt-8
grid
grid-cols-2
gap-5
">


<div className="
bg-black/30
p-5
rounded-2xl
">


<h4 className="
text-3xl
font-bold
text-white
">

10+

</h4>


<p className="
text-gray-400
">

Achievements

</p>


</div>





<div className="
bg-black/30
p-5
rounded-2xl
">


<h4 className="
text-3xl
font-bold
text-white
">

24/7

</h4>


<p className="
text-gray-400
">

Support

</p>


</div>


</div>




</motion.div>






</div>


</section>


)

}



export default About;