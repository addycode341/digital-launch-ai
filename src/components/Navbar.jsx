import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Navbar(){


const [open,setOpen]=useState(false);

const navigate=useNavigate();



const links=[
"Home",
"Features",
"Templates",
"Pricing",
"Contact"
];



return(


<nav

className="
fixed
top-0
left-0
w-full
z-50

backdrop-blur-xl

bg-[#050816]/70

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

py-4

flex

items-center

justify-between

"

>


{/* LOGO */}



<motion.div


whileHover={{

scale:1.05

}}


onClick={()=>navigate("/")}


className="
flex

items-center

gap-3

cursor-pointer

"


>


<div

className="
w-11

h-11

rounded-xl

bg-gradient-to-br

from-purple-600

to-pink-500

flex

items-center

justify-center

shadow-lg

shadow-purple-500/30

"


>


<Rocket

className="text-white"

/>


</div>






<h1

className="
text-xl

font-bold

"

>


DigitalLaunch


<span

className="
bg-gradient-to-r

from-purple-400

to-pink-400

bg-clip-text

text-transparent

"

>

AI 🚀

</span>



</h1>



</motion.div>









{/* DESKTOP MENU */}



<div

className="
hidden

md:flex

items-center

gap-8

"

>


{


links.map((item,index)=>(


<a

key={index}

href={`#${item.toLowerCase()}`}


className="
text-gray-300

hover:text-white

transition

font-medium

"


>


{item}


</a>



))


}








<button

onClick={()=>navigate("/login")}


className="
text-gray-300

hover:text-white

transition

"


>


Login


</button>








<button

onClick={()=>navigate("/signup")}


className="
px-6

py-3

rounded-full

bg-gradient-to-r

from-purple-600

to-pink-500

font-semibold

shadow-lg

shadow-purple-500/30

hover:scale-105

transition

"


>


Get Started 🚀


</button>





</div>









{/* MOBILE ICON */}



<button

className="
md:hidden

text-white

"

onClick={()=>setOpen(!open)}

>


{


open ?

<X size={28}/> :

<Menu size={28}/>


}


</button>







</div>









{/* MOBILE MENU */}




{


open &&



<motion.div


initial={{

opacity:0,

height:0

}}


animate={{

opacity:1,

height:"auto"

}}


className="
md:hidden

bg-[#050816]

border-t

border-white/10

px-6

py-6

"


>



<div

className="
flex

flex-col

gap-5

"


>


{


links.map((item,index)=>(


<a

key={index}

href={`#${item.toLowerCase()}`}

onClick={()=>setOpen(false)}


className="
text-gray-300

hover:text-white

"

>


{item}


</a>



))


}






<button

onClick={()=>navigate("/login")}

className="
text-left

text-gray-300

"


>


Login


</button>







<button

onClick={()=>navigate("/signup")}


className="
py-3

rounded-xl

bg-gradient-to-r

from-purple-600

to-pink-500

font-semibold

"


>


Get Started 🚀


</button>





</div>



</motion.div>



}



</nav>


)

}



export default Navbar;