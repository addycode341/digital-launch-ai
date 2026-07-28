import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Dumbbell,
  Phone
} from "lucide-react";



function Navbar({data}){


const [open,setOpen]=useState(false);



const links=[

"Home",
"Programs",
"Trainers",
"Membership",
"Contact"

];



return(


<nav className="
fixed
top-0
w-full
z-50
px-6
md:px-12
py-5
">





<div className="
max-w-7xl
mx-auto
bg-black/40
backdrop-blur-xl
border
border-white/10
rounded-2xl
px-6
py-4
flex
justify-between
items-center
">






{/* LOGO */}



<motion.div

initial={{
opacity:0,
x:-30
}}

animate={{
opacity:1,
x:0
}}

className="
flex
items-center
gap-3
"

>



<div className="
w-12
h-12
rounded-2xl
bg-gradient-to-br
from-red-500
to-orange-500
flex
items-center
justify-center
text-white
shadow-lg
shadow-red-500/30
">

<Dumbbell size={25}/>

</div>






<div>


<h1 className="
text-white
font-extrabold
text-xl
">

{data?.businessName || "Premium Fitness Club"}

</h1>



<p className="
text-xs
text-gray-400
">

Fitness Club

</p>


</div>



</motion.div>









{/* DESKTOP MENU */}



<div className="
hidden
md:flex
items-center
gap-8
">



{

links.map((item,index)=>(


<motion.a

key={index}

href={`#${item.toLowerCase()}`}


whileHover={{
color:"#ef4444"
}}


className="
text-gray-300
font-medium
transition
"

>

{item}

</motion.a>


))

}





<a

href={`tel:${data?.phone || ""}`}

className="
bg-gradient-to-r
from-red-500
to-orange-500
text-white
px-6
py-3
rounded-full
font-bold
flex
items-center
gap-2
shadow-lg
shadow-red-500/30
hover:scale-105
transition
"

>


<Phone size={18}/>


Call Now


</a>



</div>









{/* MOBILE BUTTON */}



<button

onClick={()=>setOpen(!open)}

className="
md:hidden
text-white
"

>


{

open ?

<X/>

:

<Menu/>

}



</button>





</div>









{/* MOBILE MENU */}



{


open &&


<motion.div


initial={{
opacity:0,
y:-20
}}


animate={{
opacity:1,
y:0
}}


className="
md:hidden
mt-3
bg-black/80
backdrop-blur-xl
border
border-white/10
rounded-2xl
p-6
space-y-5
"


>



{

links.map((item,index)=>(


<a

key={index}

href={`#${item.toLowerCase()}`}

onClick={()=>setOpen(false)}

className="
block
text-gray-300
hover:text-red-500
"

>

{item}

</a>


))


}





<a

href={`tel:${data?.phone || ""}`}


className="
w-full
bg-gradient-to-r
from-red-500
to-orange-500
py-3
rounded-full
font-bold
text-white
flex
items-center
justify-center
gap-2
"

>


<Phone size={18}/>


Call Now


</a>






</motion.div>


}



</nav>


)

}



export default Navbar;