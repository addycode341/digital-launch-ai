import React from "react";
import {
  MessageCircle
} from "lucide-react";

import bakeryData from "../../data/bakeryDemo";


function Footer(){


const links=[

{
name:"Home",
id:"home"
},

{
name:"Products",
id:"products"
},

{
name:"Categories",
id:"categories"
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



const scrollTo=(id)=>{

const section=document.getElementById(id);

if(section){

section.scrollIntoView({
behavior:"smooth"
});

}

};




return(

<footer

className="
bg-[#2B160F]

text-white

pt-20

pb-8

px-6

md:px-12
"

>


<div

className="
max-w-7xl

mx-auto

grid

md:grid-cols-3

gap-12
"

>



{/* BRAND */}

<div>


<h2

className="
text-3xl

font-black

text-[#F7D9A8]
"

>

🍰 {bakeryData.businessName}

</h2>



<p

className="
mt-5

text-white/70

leading-relaxed
"

>

Freshly baked cakes, pastries,
bakery snacks and celebration items
made with love.

</p>



<div

className="
flex

gap-3

mt-6
"

>


<div

className="
w-10

h-10

rounded-full

bg-white/10

flex

items-center

justify-center

font-bold
"

>

IG

</div>


<div

className="
w-10

h-10

rounded-full

bg-white/10

flex

items-center

justify-center

font-bold
"

>

f

</div>



</div>


</div>







{/* LINKS */}


<div>


<h3

className="
text-xl

font-black

text-[#F7D9A8]
"

>

Quick Links

</h3>


<div

className="
mt-6

space-y-3
"

>


{

links.map((link)=>(


<button

key={link.id}

onClick={()=>scrollTo(link.id)}

className="
block

text-white/70

hover:text-white

transition
"

>

{link.name}

</button>


))


}



</div>


</div>









{/* CONTACT */}



<div>


<h3

className="
text-xl

font-black

text-[#F7D9A8]
"

>

Visit Bakery

</h3>



<p

className="
mt-5

text-white/70

leading-relaxed
"

>

📍 {bakeryData.address}

</p>



<div

className="
mt-5

text-white/70

space-y-2
"

>

<p>🍰 Customised Cakes</p>

<p>🥐 Pastry & Snacks</p>

<p>🍪 Biscuits, Namkeen & Rusk</p>

<p>🎉 Birthday Decoration Items</p>


</div>





<a

href={`https://wa.me/${bakeryData.whatsapp}`}

target="_blank"

rel="noreferrer"

className="
mt-7

inline-flex

items-center

gap-3

bg-[#C89B5B]

text-[#2B160F]

px-7

py-3

rounded-full

font-bold

"

>

<MessageCircle size={20}/>

WhatsApp Order

</a>



</div>




</div>







<div

className="
max-w-7xl

mx-auto

border-t

border-white/20

mt-14

pt-6

text-center

text-white/60

text-sm
"

>

© {new Date().getFullYear()} {bakeryData.businessName}. All Rights Reserved.

</div>




</footer>

)

}


export default Footer;