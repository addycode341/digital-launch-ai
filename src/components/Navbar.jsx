import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
bg-[#050816]/80
border-b
border-white/10
"

>


<div

className="
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
py-3
sm:py-4
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
gap-2
cursor-pointer
"

>



<div

className="
w-10
h-10
rounded-xl
bg-gradient-to-br
from-purple-600
to-pink-500
flex
items-center
justify-center
shadow-lg
shadow-purple-500/30
shrink-0
"

>


<Rocket
size={22}
className="text-white"
/>


</div>







<h1

className="
text-lg
sm:text-xl
font-bold
whitespace-nowrap
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









{/* DESKTOP NAV */}



<div

className="
hidden
lg:flex
items-center
gap-7
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
text-sm
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
text-sm
"

>

Login

</button>






<button

onClick={()=>navigate("/signup")}

className="
px-5
py-2.5
rounded-full
bg-gradient-to-r
from-purple-600
to-pink-500
font-semibold
text-sm
hover:scale-105
transition
"

>


Get Started 🚀


</button>



</div>








{/* MOBILE ICON */}



<button

onClick={()=>setOpen(!open)}

className="
lg:hidden
text-white
"

>

{

open ?

<X size={28}/> :

<Menu size={28}/>

}


</button>




</div>









{/* MOBILE MENU */}



<AnimatePresence>


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

exit={{
opacity:0,
y:-20
}}

transition={{
duration:.25
}}


className="
lg:hidden
bg-[#050816]
border-t
border-white/10
px-5
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
transition
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
hover:text-white
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


</AnimatePresence>



</nav>


)

}


export default Navbar;