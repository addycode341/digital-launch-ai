import { motion } from "framer-motion";

import {
  Tag,
  Gift,
  RefreshCcw,
  CreditCard,
  Zap
} from "lucide-react";





const offers=[


{
icon:<RefreshCcw size={26}/>,
title:"Exchange Bonus",
desc:"Get the best value for your old smartphone.",
offer:"Up to ₹25,000 OFF"
},


{
icon:<CreditCard size={26}/>,
title:"No Cost EMI",
desc:"Buy premium phones with easy monthly payments.",
offer:"0% Interest EMI"
},


{
icon:<Gift size={26}/>,
title:"Free Accessories",
desc:"Get premium accessories with selected devices.",
offer:"Worth ₹5,000"
},


{
icon:<Zap size={26}/>,
title:"Launch Offers",
desc:"Exclusive discounts on latest smartphone launches.",
offer:"Limited Time"
}


];







function Offers(){


return(


<section

id="offers"

className="
relative
py-20
sm:py-28
px-4
sm:px-8
bg-black
overflow-hidden
"

>





<div

className="
absolute
left-1/2
top-0
-translate-x-1/2
w-[350px]
h-[250px]
bg-purple-600/20
blur-[100px]
rounded-full
"

></div>







<div

className="
relative
max-w-7xl
mx-auto
"

>







{/* HEADER */}



<div

className="
text-center
mb-12
sm:mb-16
"

>


<p

className="
text-blue-400
tracking-[3px]
text-sm
font-semibold
"

>

EXCLUSIVE DEALS

</p>





<h2

className="
text-4xl
sm:text-5xl
lg:text-6xl
font-black
mt-4
"

>

Premium

<span

className="
text-purple-500
block
sm:inline
"

>

 Smartphone Offers

</span>


</h2>







<p

className="
text-gray-400
mt-4
text-sm
sm:text-base
"

>

Upgrade your device with our limited-time offers.

</p>



</div>









{/* FLASH SALE BANNER */}



<motion.div


initial={{

opacity:0,
scale:.95

}}


whileInView={{

opacity:1,
scale:1

}}


viewport={{

once:true

}}


className="
relative
mb-8
p-6
sm:p-10
rounded-[35px]
bg-gradient-to-r
from-blue-600
to-purple-700
overflow-hidden
"

>




<div

className="
absolute
right-5
top-5
text-7xl
sm:text-[120px]
opacity-20
"

>

📱

</div>







<div className="relative">



<div

className="
flex
items-center
gap-3
"

>

<Tag/>

<p

className="
font-bold
tracking-widest
text-sm
"

>

FLASH SALE

</p>


</div>






<h3

className="
text-3xl
sm:text-5xl
font-black
mt-5
leading-tight
"

>

Upgrade To Latest

<span className="block">

iPhone & Galaxy

</span>

</h3>






<p

className="
mt-4
text-white/80
max-w-xl
text-sm
sm:text-base
"

>

Exchange your old phone and unlock premium savings today.

</p>







<button

className="
mt-6
px-7
py-3.5
rounded-full
bg-white
text-black
font-bold
"

>

Claim Offer

</button>




</div>




</motion.div>









{/* OFFER CARDS */}



<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-5
"

>


{


offers.map((offer,index)=>(



<motion.div


key={index}


initial={{

opacity:0,
y:30

}}


whileInView={{

opacity:1,
y:0

}}


viewport={{

once:true

}}


transition={{

duration:.5,
delay:index*.1

}}


className="
p-5
sm:p-7
rounded-[30px]
bg-white/[0.06]
border
border-white/10
backdrop-blur-xl
"

>





<div

className="
w-14
h-14
rounded-2xl
bg-blue-500/10
text-blue-400
flex
items-center
justify-center
"

>

{offer.icon}

</div>







<h3

className="
text-xl
font-black
mt-5
"

>

{offer.title}

</h3>






<p

className="
text-gray-400
mt-3
text-sm
leading-relaxed
"

>

{offer.desc}

</p>







<div

className="
mt-5
font-bold
text-blue-400
"

>

{offer.offer}

</div>






</motion.div>



))


}



</div>






</div>


</section>


)

}


export default Offers;