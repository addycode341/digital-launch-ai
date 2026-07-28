import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Truck
} from "lucide-react";

import bakeryData from "../../data/bakeryDemo";


function Hero(){


return(


<section

id="home"

className="
relative

min-h-screen

flex

items-center

bg-[#FFF9F3]

pt-32

pb-20

px-6

md:px-12

overflow-hidden

"

>



{/* Background Shape */}


<div

className="
absolute

top-20

right-0

w-[500px]

h-[500px]

bg-[#F4DFC2]

rounded-full

blur-3xl

opacity-50

"

/>



<div

className="
max-w-7xl

mx-auto

grid

lg:grid-cols-2

gap-16

items-center

relative

z-10

"

>





{/* LEFT CONTENT */}



<motion.div


initial={{

opacity:0,

x:-40

}}


animate={{

opacity:1,

x:0

}}


transition={{

duration:.8

}}


>




<span

className="
inline-flex

px-5

py-2

rounded-full

bg-white

border

border-[#E8D3B5]

text-[#8B5E3C]

font-semibold

"

>

🍰 Freshly Baked Happiness

</span>







<h1

className="
mt-7

text-5xl

md:text-7xl

font-black

leading-tight

text-[#4A2518]

"

>


Premium Cakes

<span

className="
block

text-[#C89B5B]

"

>

Made For Your Moments

</span>


</h1>








<p

className="
mt-6

text-lg

leading-relaxed

text-[#6B5140]

max-w-xl

"

>

{bakeryData.description}

</p>








<div

className="
mt-8

flex

gap-4

flex-wrap

"

>



<a

href={`https://wa.me/${bakeryData.whatsapp}`}

target="_blank"

rel="noreferrer"

className="
px-8

py-4

rounded-full

bg-[#4A2518]

text-white

font-bold

shadow-lg

"

>

Order Cake 🍰

</a>




<button

onClick={()=>{

document
.getElementById("products")
?.scrollIntoView({

behavior:"smooth"

})

}}

className="
px-8

py-4

rounded-full

bg-white

border

border-[#D8B98A]

text-[#4A2518]

font-bold

"

>

View Menu

</button>



</div>









{/* STATS */}



<div

className="
mt-12

flex

gap-10

"

>



<div>

<h3

className="
text-3xl

font-black

text-[#4A2518]

"

>

500+

</h3>

<p className="text-[#8B6B52]">

Happy Customers

</p>

</div>






<div>

<h3

className="
text-3xl

font-black

text-[#4A2518]

"

>

4.9

</h3>

<p className="text-[#8B6B52]">

Rating ⭐

</p>

</div>






<div>

<h3

className="
text-3xl

font-black

text-[#4A2518]

"

>

Fresh

</h3>

<p className="text-[#8B6B52]">

Everyday

</p>

</div>



</div>




</motion.div>









{/* RIGHT IMAGE */}




<motion.div


initial={{

opacity:0,

scale:.9

}}



animate={{

opacity:1,

scale:1

}}



transition={{

duration:1

}}



className="
relative

flex

justify-center

"

>




<div

className="
absolute

w-[420px]

h-[420px]

rounded-full

bg-[#E8CFA8]

blur-3xl

opacity-60

"

/>







<div

className="
relative

bg-white

p-5

rounded-[45px]

shadow-2xl

"

>


<img


src="
https://images.unsplash.com/photo-1578985545062-69928b1d9587
"


alt="cake"


className="
w-[350px]

md:w-[480px]

h-[520px]

object-cover

rounded-[35px]

"

/>



</div>








{/* Rating Card */}



<div

className="
absolute

left-0

bottom-10

bg-white

rounded-3xl

shadow-xl

px-6

py-4

"

>


<div

className="
flex

items-center

gap-2

font-bold

text-[#4A2518]

"

>

<Star

size={18}

fill="#C89B5B"

/>

4.9 Rating

</div>


<p

className="
text-sm

text-gray-500

"

>

Loved by customers

</p>


</div>








{/* Delivery Card */}



<div

className="
absolute

right-0

top-16

bg-white

rounded-3xl

shadow-xl

px-6

py-4

"

>


<div

className="
flex

gap-2

items-center

font-bold

text-[#4A2518]

"

>

<Truck size={18}/>

Fresh Delivery

</div>



<p

className="
text-sm

text-gray-500

"

>

Daily Fresh

</p>


</div>







</motion.div>







</div>




</section>


)

}


export default Hero;