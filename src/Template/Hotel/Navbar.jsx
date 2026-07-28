import {useState} from "react";
import {
Menu,
X,
CalendarCheck
} from "lucide-react";



function Navbar(){


const [open,setOpen]=useState(false);


const links=[
"Home",
"Rooms",
"Amenities",
"Gallery",
"Contact"
];



return(


<nav

className="
fixed
top-0
w-full
z-50
bg-black/70
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
h-20
flex
justify-between
items-center
"

>


<h1

className="
text-3xl
font-black
"

>

Royal

<span className="text-yellow-400">

Stay

</span>

</h1>



<div

className="
hidden
lg:flex
gap-8
items-center
"

>


{

links.map((item)=>(

<a

key={item}

href={`#${item.toLowerCase()}`}

className="
text-gray-300
hover:text-yellow-400
"

>

{item}

</a>

))

}



<button

className="
px-6
py-3
rounded-full
bg-yellow-400
text-black
font-bold
flex
gap-2
items-center
"

>

<CalendarCheck size={18}/>

Book Room

</button>


</div>





<button

onClick={()=>setOpen(!open)}

className="
lg:hidden
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




{

open &&

<div

className="
lg:hidden
bg-black
p-6
space-y-5
"

>


{

links.map((item)=>(

<a

key={item}

className="
block
text-gray-300
"

>

{item}

</a>

))

}


</div>


}



</nav>


)

}


export default Navbar;