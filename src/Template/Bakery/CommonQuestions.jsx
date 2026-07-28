import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";



function CommonQuestions(){



const [open,setOpen]=useState(null);




const questions=[


{
q:"Do you make customised cakes?",
a:
"Yes, we create customised cakes according to your design, theme and celebration requirements."
},



{
q:"How much time before should I order a cake?",
a:
"We recommend ordering customised cakes at least 1-2 days before your event."
},




{
q:"Do you provide birthday decoration items?",
a:
"Yes, we provide birthday decoration items and disposable products for celebrations."
},




{
q:"Do you deliver bakery products?",
a:
"Yes, you can contact us on WhatsApp for delivery availability in your area."
},




{
q:"What bakery items are available?",
a:
"We offer cakes, pastries, dhokla, sandwich, patties, biscuits, namkeen and rusk."
}



];







return(


<section


className="
py-28

px-6

md:px-12

bg-[#FFF9F3]

"


>


<div

className="
max-w-4xl

mx-auto

"

>






{/* HEADER */}



<div

className="
text-center

mb-14

"

>


<span

className="
inline-flex

px-5

py-2

rounded-full

bg-white

border

border-[#E8D3B5]

text-[#8B5E3C]

font-semibold

"

>

❓ FAQ

</span>






<h2

className="
mt-6

text-4xl

md:text-5xl

font-black

text-[#4A2518]

"

>

Common Questions

</h2>





<p

className="
mt-4

text-[#6B5140]

"

>

Everything you need to know about Bake's N Bite's.

</p>



</div>









{/* FAQ */}



<div

className="
space-y-5

"

>


{


questions.map((item,index)=>(


<div

key={index}

className="
bg-white

rounded-3xl

border

border-[#E8D3B5]

overflow-hidden

"

>





<button


onClick={()=>


setOpen(

open===index

?

null

:

index

)


}


className="
w-full

flex

items-center

justify-between

p-6

text-left

"

>


<h3

className="
font-bold

text-lg

text-[#4A2518]

"

>

{item.q}

</h3>





{

open===index

?

<Minus

className="text-[#C89B5B]"

/>

:

<Plus

className="text-[#C89B5B]"

/>

}



</button>








{


open===index &&


<div

className="
px-6

pb-6

text-[#6B5140]

leading-relaxed

"

>

{item.a}

</div>


}





</div>


))


}




</div>







</div>


</section>


)

}



export default CommonQuestions;