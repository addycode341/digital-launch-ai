import { useState } from "react";
import { Menu, X, Smartphone } from "lucide-react";


function Navbar({preview=false}){


const [open,setOpen]=useState(false);


const links=[
"Home",
"Products",
"Services",
"Offers",
"Gallery",
"Contact"
];



if(preview){

return null;

}



return(


<nav

className="
fixed
top-0
left-0
w-full
z-50
bg-black/80
backdrop-blur-xl
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
h-20
flex
items-center
justify-between
"

>


{/* LOGO */}

<div

className="
flex
items-center
gap-2
"

>


<div

className="
w-10
h-10
rounded-xl
bg-gradient-to-br
from-blue-500
to-purple-600
flex
items-center
justify-center
"

>

<Smartphone size={22}/>

</div>



<h2

className="
text-xl
sm:text-2xl
font-black
"

>

Mobile

<span className="text-blue-400">
Hub
</span>


</h2>


</div>





{/* DESKTOP */}

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

key={item}

href={`#${item.toLowerCase()}`}

className="
text-gray-300
hover:text-white
transition
text-sm
font-semibold
"

>

{item}

</a>

))

}



<button

className="
px-5
py-2.5
rounded-full
bg-gradient-to-r
from-blue-500
to-purple-600
font-bold
text-sm
"

>

Buy Now

</button>


</div>





{/* MOBILE BUTTON */}

<button

onClick={()=>setOpen(!open)}

className="
lg:hidden
p-2
rounded-xl
bg-white/10
"

>


{
open
?
<X size={24}/>
:
<Menu size={24}/>
}


</button>



</div>







{
open &&

<div

className="
lg:hidden
px-4
pb-5
bg-black
border-t
border-white/10
"

>


<div

className="
flex
flex-col
gap-4
pt-5
"

>


{
links.map((item)=>(

<a

key={item}

href={`#${item.toLowerCase()}`}

onClick={()=>setOpen(false)}

className="
text-gray-300
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
py-3
rounded-full
bg-gradient-to-r
from-blue-500
to-purple-600
font-bold
"

>

Buy Now

</button>


</div>


</div>


}



</nav>


)

}


export default Navbar;