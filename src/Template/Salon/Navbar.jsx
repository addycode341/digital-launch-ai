import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Menu,
  X,
  CalendarCheck
} from "lucide-react";





const navLinks=[

"Home",
"About",
"Services",
"Gallery",
"Reviews",
"Contact"

];






function Navbar(){


const [open,setOpen]=useState(false);

const [scrolled,setScrolled]=useState(false);





useEffect(()=>{


const handleScroll=()=>{


if(window.scrollY > 50){

setScrolled(true);

}

else{

setScrolled(false);

}


}


window.addEventListener(
"scroll",
handleScroll
);


return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

}


},[]);








return(


<motion.nav


initial={{

y:-100

}}


animate={{

y:0

}}


transition={{

duration:.6

}}



className={`

fixed

top-0

left-0

w-full

z-50

transition-all

duration-500

${

scrolled

?

"bg-black/80 backdrop-blur-xl border-b border-white/10"

:

"bg-transparent"

}

`}

>







<div

className="
max-w-7xl
mx-auto
px-5
sm:px-8
h-20
flex
items-center
justify-between
"

>









{/* LOGO */}



<div

className="
text-3xl
font-black
"

>


Luxe

<span

className="
text-yellow-400
"

>

Salon

</span>


</div>









{/* DESKTOP MENU */}



<div

className="
hidden
lg:flex
items-center
gap-8
"

>


{

navLinks.map((item,index)=>(


<a


key={index}


href={`#${item.toLowerCase()}`}


className="
text-gray-300
hover:text-yellow-400
transition
font-medium
"

>

{item}

</a>


))


}





<button

className="
flex
items-center
gap-2
px-6
py-3
rounded-full
bg-gradient-to-r
from-yellow-400
to-pink-500
text-black
font-bold
hover:scale-105
transition
"

>


<CalendarCheck size={18}/>


Book Now


</button>





</div>









{/* MOBILE BUTTON */}



<button


onClick={()=>setOpen(!open)}


className="
lg:hidden
w-11
h-11
rounded-full
bg-white/10
border
border-white/10
flex
items-center
justify-center
"

>


{

open

?

<X/>

:

<Menu/>

}


</button>









</div>









{/* MOBILE MENU */}



<AnimatePresence>


{

open && (



<motion.div


initial={{

opacity:0,

height:0

}}



animate={{

opacity:1,

height:"auto"

}}



exit={{

opacity:0,

height:0

}}



className="
lg:hidden
bg-black/95
backdrop-blur-xl
border-t
border-white/10
overflow-hidden
"

>


<div

className="
px-6
py-6
space-y-5
"

>


{

navLinks.map((item,index)=>(


<a


key={index}


href={`#${item.toLowerCase()}`}


onClick={()=>setOpen(false)}


className="
block
text-gray-300
hover:text-yellow-400
font-semibold
"

>

{item}

</a>


))


}



<button

className="
w-full
flex
items-center
justify-center
gap-2
py-4
rounded-full
bg-gradient-to-r
from-yellow-400
to-pink-500
text-black
font-bold
"

>


<CalendarCheck size={18}/>


Book Appointment


</button>





</div>


</motion.div>


)


}



</AnimatePresence>







</motion.nav>


)

}



export default Navbar;