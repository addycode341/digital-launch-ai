import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
Menu,
X,
ChevronDown,
Printer,
FileText,
Palette,
Briefcase
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";


function Navbar(){

const [open,setOpen] = useState(false);
const [serviceOpen,setServiceOpen] = useState(false);

const navigate = useNavigate();



const services=[

{
name:"Printing Services",
path:"/indian-enterprises/printing",
icon:<Printer size={18}/>
},

{
name:"Office Stationery",
path:"/indian-enterprises/office-stationery",
icon:<FileText size={18}/>
},

{
name:"School Stationery & Art Craft",
path:"/indian-enterprises/school-stationery",
icon:<Palette size={18}/>
},

{
name:"Leather & Rexine Products",
path:"/indian-enterprises/leather",
icon:<Briefcase size={18}/>
}

];



// CLOSE MENU

const closeAll=()=>{

setOpen(false);
setServiceOpen(false);

};



// HOME

const goHome=()=>{

closeAll();


if(window.location.pathname === "/indian-enterprises"){

window.scrollTo({

top:0,
behavior:"smooth"

});

}

else{

navigate("/indian-enterprises");

setTimeout(()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

},300);

}

};



// SECTION SCROLL


const scrollSection=(section)=>{

closeAll();


if(window.location.pathname !== "/indian-enterprises"){


navigate("/indian-enterprises");


setTimeout(()=>{

document
.getElementById(section)
?.scrollIntoView({

behavior:"smooth"

});


},400);


}

else{


document
.getElementById(section)
?.scrollIntoView({

behavior:"smooth"

});


}


};




return(


<nav

className="
fixed
top-0
left-0
w-full
z-[999]
bg-black/90
backdrop-blur-xl
border-b
border-white/10
shadow-lg
"

>


<div

className="
max-w-7xl
mx-auto
px-6
h-20
flex
items-center
justify-between
"

>



{/* LOGO */}


<button

onClick={goHome}

className="
text-2xl
font-bold
text-white
"

>

Indian

<span className="
text-yellow-500
">

Enterprises

</span>


</button>





{/* DESKTOP MENU */}


<div

className="
hidden
md:flex
items-center
gap-8
text-white
"

>


<button

onClick={goHome}

className="
hover:text-yellow-500
transition
"

>

Home

</button>



<button

onClick={()=>scrollSection("about")}

className="
hover:text-yellow-500
transition
"

>

About

</button>





{/* SERVICES */}



<div

className="
relative
"

onMouseEnter={()=>setServiceOpen(true)}

onMouseLeave={()=>setServiceOpen(false)}

>



<button

onClick={()=>setServiceOpen(!serviceOpen)}

className="
flex
items-center
gap-2
hover:text-yellow-500
transition
"

>

Services

<ChevronDown size={16}/>


</button>





<AnimatePresence>


{

serviceOpen &&

<motion.div


initial={{
opacity:0,
y:10
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:10
}}

className="
absolute
top-10
left-0
w-80
bg-black
border
border-white/10
rounded-2xl
p-3
shadow-2xl
"


>


<p

className="
text-yellow-500
text-xs
px-4
py-2
"

>

OUR SERVICES

</p>


{

services.map((item,index)=>(


<Link

key={index}

to={item.path}

onClick={closeAll}

className="
flex
items-center
gap-3
px-4
py-3
rounded-xl
text-gray-300
hover:bg-yellow-500
hover:text-black
transition
"

>


{item.icon}

{item.name}


</Link>


))


}



</motion.div>


}


</AnimatePresence>



</div>





<button

onClick={()=>scrollSection("gallery")}

className="
hover:text-yellow-500
transition
"

>

Gallery

</button>



<button

onClick={()=>scrollSection("contact")}

className="
hover:text-yellow-500
transition
"

>

Contact

</button>




<a

href="https://wa.me/919999999999"

target="_blank"

rel="noreferrer"

className="
bg-yellow-500
text-black
px-6
py-2.5
rounded-full
font-semibold
hover:scale-105
transition
"

>

WhatsApp

</a>



</div>


{/* MOBILE BUTTON */}


<button

className="
md:hidden
text-white
"

onClick={()=>setOpen(!open)}

>

{

open ?

<X size={28}/>

:

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


className="
md:hidden
absolute
top-20
left-0
w-full
bg-black
text-white
px-6
py-6
border-t
border-white/10
shadow-xl
"


>


<button

onClick={goHome}

className="
block
w-full
text-left
py-3
hover:text-yellow-500
"

>

Home

</button>





<button

onClick={()=>scrollSection("about")}

className="
block
w-full
text-left
py-3
hover:text-yellow-500
"

>

About

</button>





{/* MOBILE SERVICES */}



<button

onClick={()=>setServiceOpen(!serviceOpen)}

className="
flex
items-center
gap-2
py-3
hover:text-yellow-500
"

>

Services

<ChevronDown size={16}/>

</button>




{

serviceOpen &&


<div

className="
pl-4
border-l
border-yellow-500
"

>


{

services.map((item,index)=>(


<Link

key={index}

to={item.path}

onClick={closeAll}

className="
flex
items-center
gap-3
py-3
text-gray-300
hover:text-yellow-500
"

>


{item.icon}

{item.name}


</Link>


))


}


</div>


}






<button

onClick={()=>scrollSection("gallery")}

className="
block
w-full
text-left
py-3
hover:text-yellow-500
"

>

Gallery

</button>





<button

onClick={()=>scrollSection("contact")}

className="
block
w-full
text-left
py-3
hover:text-yellow-500
"

>

Contact

</button>





<a

href="https://wa.me/919999999999"

target="_blank"

rel="noreferrer"

className="
inline-block
mt-4
bg-yellow-500
text-black
px-6
py-3
rounded-full
font-bold
"

>

WhatsApp

</a>



</motion.div>


}


</AnimatePresence>




</nav>


)

}


export default Navbar;