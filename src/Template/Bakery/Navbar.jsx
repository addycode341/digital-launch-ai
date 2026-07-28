import React, { useState } from "react";

import {
  Menu,
  X,
  ChevronDown
} from "lucide-react";

import bakeryData from "../../data/bakeryDemo";


function Navbar(){

const [open,setOpen] = useState(false);
const [dropdown,setDropdown] = useState(null);




const links=[

{
name:"Home",
id:"home"
},

{
name:"Products",
id:"products",
dropdown: bakeryData.products
},

{
name:"Categories",
id:"categories",
dropdown: bakeryData.categories
},


{
name:"Gallery",
id:"gallery"
},


{
name:"Reviews",
id:"reviews"
},


{
name:"Contact",
id:"contact"
}

];






// Smooth Scroll Function

const scrollTo=(id)=>{


const section=document.getElementById(id);



if(section){


const sectionPosition = 
section.getBoundingClientRect().top 
+ window.scrollY 
- 90;



window.scrollTo({

top:sectionPosition,

behavior:"smooth"

});


}



setOpen(false);

};







return(

<nav

className="
fixed
top-0
left-0
w-full
z-50

bg-[#FFF9F3]/90

backdrop-blur-xl

border-b

border-[#E8D3B5]

"

>



<div

className="
max-w-7xl
mx-auto

px-6
md:px-10

py-5

flex

items-center

justify-between

"

>





{/* LOGO */}


<button

onClick={()=>scrollTo("home")}

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
rounded-full

bg-[#4A2518]

text-[#F7D9A8]

flex
items-center
justify-center

font-black

text-xl

"

>

B

</div>





<div className="text-left">


<h1

className="
text-xl

font-black

text-[#4A2518]

"

>

{bakeryData.businessName}

</h1>




<p

className="
text-xs

text-[#8B6B52]

"

>

Fresh Bakery

</p>



</div>



</button>







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

links.map((link)=>(


<div

key={link.name}

className="
relative
"

onMouseEnter={()=>setDropdown(link.name)}

onMouseLeave={()=>setDropdown(null)}

>


<button

onClick={()=>scrollTo(link.id)}

className="
flex
items-center
gap-1

text-[#4A2518]

font-semibold

hover:text-[#C89B5B]

transition

"

>


{link.name}



{

link.dropdown &&

<ChevronDown size={15}/>

}



</button>







{

link.dropdown && dropdown===link.name &&


<div

className="
absolute

top-8

left-0

w-64

bg-white

rounded-3xl

shadow-xl

border

border-[#F0DDC3]

p-4

"

>


{

link.dropdown.map((item,index)=>(


<div

key={index}

className="
px-4

py-3

rounded-xl

hover:bg-[#FFF4E8]

text-[#4A2518]

cursor-pointer

"

>


{

typeof item==="object"

?

item.name

:

item

}


</div>


))


}



</div>



}



</div>



))

}


</div>







{/* ORDER BUTTON */}



<a

href={`https://wa.me/${bakeryData.whatsapp}`}

target="_blank"

rel="noreferrer"

className="
px-7

py-3

rounded-full

bg-[#4A2518]

text-white

font-bold

hover:bg-[#6B3925]

transition

"

>

Order Now

</a>







{/* MOBILE BUTTON */}



<button

onClick={()=>setOpen(!open)}

className="
md:hidden

text-[#4A2518]

"

>


{

open

?

<X size={28}/>

:

<Menu size={28}/>

}


</button>



</div>









{/* MOBILE MENU */}



{

open &&


<div

className="
md:hidden

bg-[#FFF9F3]

px-6

pb-6

"

>


<div

className="
flex

flex-col

gap-4

"

>


{

links.map(link=>(


<button

key={link.name}

onClick={()=>scrollTo(link.id)}

className="
text-left

font-semibold

text-[#4A2518]

"

>

{link.name}

</button>


))


}



<a

href={`https://wa.me/${bakeryData.whatsapp}`}

target="_blank"

rel="noreferrer"

className="
bg-[#4A2518]

text-white

text-center

py-3

rounded-full

font-bold

"

>

WhatsApp Order

</a>



</div>



</div>



}



</nav>


)

}


export default Navbar;