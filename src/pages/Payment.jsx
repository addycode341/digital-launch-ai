import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
CheckCircle,
CreditCard,
ShieldCheck,
Rocket
} from "lucide-react";
import { useEffect, useState } from "react";



function Payment(){


const navigate=useNavigate();


const [plan,setPlan]=useState(null);



useEffect(()=>{


const savedPlan=
localStorage.getItem("selectedPlan");


if(savedPlan){

setPlan(JSON.parse(savedPlan));

}


},[]);





if(!plan){

return(

<div className="
min-h-screen
bg-slate-950
flex
items-center
justify-center
text-white
">


Loading Plan...


</div>

)

}







return(


<section

className="
min-h-screen

bg-[#050816]

relative

overflow-hidden

px-5

py-20

text-white

"


>



{/* Glow */}



<div

className="
absolute

w-[500px]

h-[500px]

bg-purple-600/30

blur-[160px]

rounded-full

top-0

left-1/2

-translate-x-1/2

"

/>





<div

className="
relative

z-10

max-w-5xl

mx-auto

grid

lg:grid-cols-2

gap-10

items-center

"


>









{/* PLAN CARD */}



<motion.div


initial={{
opacity:0,
x:-40
}}


animate={{
opacity:1,
x:0
}}



className="
bg-white/10

border

border-white/10

backdrop-blur-xl

rounded-[35px]

p-8

"


>



<div

className="
flex

items-center

gap-3

"

>


<div

className="
w-14

h-14

rounded-2xl

bg-gradient-to-r

from-purple-600

to-pink-500

flex

items-center

justify-center

"

>

<Rocket/>

</div>


<h1 className="
text-3xl
font-black
">


{plan.name}


</h1>



</div>







<p className="
mt-5
text-gray-400
">


{plan.desc}


</p>







<div className="
mt-6
">


<span className="
text-5xl
font-black
">


₹{plan.price}


</span>


<span className="
text-gray-400
">


{plan.period}


</span>


</div>









<ul className="
mt-8
space-y-4
">


{


plan.featuresText?.map((item,index)=>(


<li

key={index}

className="
flex
gap-3
items-center
text-gray-300
"


>


<CheckCircle

size={20}

className="
text-pink-400
"

/>


{item}


</li>


))


}



</ul>






</motion.div>













{/* PAYMENT BOX */}



<motion.div


initial={{
opacity:0,
x:40
}}


animate={{
opacity:1,
x:0
}}



className="
bg-white/[0.07]

border

border-white/10

rounded-[35px]

p-8

backdrop-blur-xl

"


>





<h2 className="
text-3xl
font-bold
">


Complete Payment 🚀


</h2>






<p className="
mt-3
text-gray-400
">


Activate your website plan and start your digital journey.


</p>









<div className="
mt-8
space-y-5
"


>


<div className="
flex
items-center
gap-4
bg-white/10
p-4
rounded-2xl
">


<CreditCard className="
text-purple-400
"/>


<div>

<h4 className="
font-bold
">

Secure Payment

</h4>

<p className="
text-sm
text-gray-400
">

UPI • Card • Net Banking

</p>

</div>


</div>






<div className="
flex
items-center
gap-4
bg-white/10
p-4
rounded-2xl
">


<ShieldCheck className="
text-green-400
"/>


<div>

<h4 className="
font-bold
">

Secure Hosting

</h4>


<p className="
text-sm
text-gray-400
">

Website protection included

</p>


</div>


</div>



</div>









<button


className="
mt-8

w-full

py-4

rounded-2xl

bg-gradient-to-r

from-purple-600

to-pink-500

font-bold

hover:scale-105

transition

"


>


Pay ₹{plan.price} 🚀


</button>





<button


onClick={()=>navigate("/")}


className="
mt-4

w-full

py-3

rounded-xl

bg-white/10

hover:bg-white/20

transition

"


>


Back Home


</button>








</motion.div>







</div>






</section>


)


}



export default Payment;