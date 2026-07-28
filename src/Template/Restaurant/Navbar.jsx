import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Utensils,
  Phone
} from "lucide-react";




const links=[

{
name:"Home",
link:"#"
},

{
name:"Menu",
link:"#menu"
},

{
name:"About",
link:"#about"
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





function Navbar(){


const [open,setOpen]=useState(false);



return(


<motion.nav


initial={{
y:-80
}}


animate={{
y:0
}}


transition={{
duration:.6
}}



className="
fixed
top-0
left-0
w-full
z-50
bg-black/40
backdrop-blur-xl
border-b
border-white/10
"

>


<div

className="
max-w-7xl
mx-auto
px-5
sm:px-8
h-24
flex
items-center
justify-between
"

>





{/* LOGO */}



<a

href="#"

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
flex
items-center
justify-center
text-black
"

>

<Utensils size={25}/>

</div>




<div>


<h1

className="
text-2xl
font-black
tracking-wide
"

>

Royal

<span className="
text-yellow-400
">

Taste

</span>


</h1>


<p

className="
text-xs
text-gray-400
"

>

Premium Dining

</p>


</div>


</a>







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

links.map((item,index)=>(


<a

key={index}

href={item.link}

className="
text-gray-300
hover:text-yellow-400
transition
font-medium
"

>

{item.name}

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
to-orange-500
text-black
font-bold
hover:scale-105
transition
"

>


<Phone size={18}/>

Book Table


</button>




</div>







{/* MOBILE BUTTON */}



<button


onClick={()=>setOpen(!open)}


className="
lg:hidden
w-12
h-12
rounded-xl
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
overflow-hidden
bg-black/90
backdrop-blur-xl
border-t
border-white/10
"

>


<div

className="
px-6
py-8
space-y-5
"

>


{

links.map((item,index)=>(


<motion.a


key={index}


initial={{

opacity:0,

x:-30

}}


animate={{

opacity:1,

x:0

}}


transition={{

delay:index*.08

}}



href={item.link}


onClick={()=>setOpen(false)}


className="
block
text-lg
text-gray-300
hover:text-yellow-400
"

>


{item.name}


</motion.a>


))


}





<button

className="
w-full
mt-5
py-4
rounded-full
bg-gradient-to-r
from-yellow-400
to-orange-500
text-black
font-bold
"

>


Book Your Table


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