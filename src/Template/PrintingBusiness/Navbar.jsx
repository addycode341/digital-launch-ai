import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Menu,
  X,
  Phone,
  Printer,
  MessageCircle
} from "lucide-react";



function Navbar(){


const [open,setOpen]=useState(false);



const links=[

{
name:"Home",
link:"#home"
},

{
name:"About",
link:"#about"
},

{
name:"Services",
link:"#services"
},

{
name:"Products",
link:"#products"
},

{
name:"Gallery",
link:"#gallery"
},

{
name:"Contact",
link:"#contact"
}

];





return(


<nav

className="
fixed
top-0
left-0
w-full
z-50
px-4
lg:px-8
py-5
"

>



<div

className="
max-w-7xl
mx-auto
"

>



<div

className="
bg-black/70
backdrop-blur-xl
border
border-white/10
rounded-full
px-6
py-3
shadow-2xl
flex
items-center
justify-between
"

>







{/* LOGO */}



<motion.a


href="#home"


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



<div

className="
w-12
h-12
rounded-2xl
bg-gradient-to-br
from-yellow-400
to-orange-500
text-black
flex
items-center
justify-center
shadow-lg
"

>

<Printer size={25}/>


</div>







<div>


<h1

className="
text-white
font-black
text-lg
md:text-xl
tracking-wide
"

>

INDIA ENTERPRISE

</h1>



<p

className="
text-yellow-400
text-[10px]
tracking-[2px]
uppercase
"

>

Premium Printing

</p>



</div>



</motion.a>










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

links.map((item)=>(


<a

key={item.name}

href={item.link}

className="
text-gray-300
hover:text-yellow-400
transition
relative
group
"

>


{item.name}



<span

className="
absolute
left-0
-bottom-1
h-[2px]
w-0
bg-yellow-400
group-hover:w-full
transition-all
"

/>



</a>


))


}



</div>









{/* BUTTONS */}



<div

className="
hidden
lg:flex
items-center
gap-3
"

>


<a

href="https://wa.me/919999999999"

className="
flex
items-center
gap-2
bg-green-600
hover:bg-green-700
text-white
px-5
py-3
rounded-full
font-semibold
transition
"

>


<MessageCircle size={18}/>

WhatsApp


</a>







<a

href="tel:+919999999999"

className="
flex
items-center
gap-2
bg-gradient-to-r
from-yellow-400
to-orange-500
text-black
px-6
py-3
rounded-full
font-bold
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
lg:hidden
text-white
"

>


{

open ?

<X size={30}/>

:

<Menu size={30}/>

}



</button>






</div>









{/* MOBILE MENU */}



{


open && (


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
lg:hidden
mt-4
bg-black/95
border
border-white/10
rounded-3xl
p-6
space-y-5
"

>


{


links.map((item)=>(


<a

key={item.name}

href={item.link}

onClick={()=>setOpen(false)}

className="
block
text-gray-300
text-lg
hover:text-yellow-400
"

>

{item.name}


</a>


))


}



<a

href="tel:+919999999999"

className="
block
text-center
bg-gradient-to-r
from-yellow-400
to-orange-500
text-black
py-3
rounded-full
font-bold
"

>

Call Now

</a>



</motion.div>


)


}





</div>


</nav>


)

}


export default Navbar;