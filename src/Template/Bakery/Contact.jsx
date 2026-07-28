import React from "react";
import {
  MapPin,
  Phone,
  MessageCircle
} from "lucide-react";

import bakeryData from "../../data/bakeryDemo";



function Contact(){



return(


<section

id="contact"

className="
py-28

px-6

md:px-12

bg-white

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
grid

lg:grid-cols-2

gap-12

items-center

"

>







{/* LEFT */}



<div>


<span

className="
inline-flex

px-5

py-2

rounded-full

bg-[#FFF3E6]

text-[#8B5E3C]

font-semibold

"

>

📍 Visit Our Bakery

</span>








<h2

className="
mt-6

text-4xl

md:text-6xl

font-black

text-[#4A2518]

"

>

Let's Create Sweet Moments Together

</h2>







<p

className="
mt-5

text-[#6B5140]

text-lg

leading-relaxed

"

>

Order customised cakes, bakery snacks
and celebration products from Bake's N Bite's.

</p>






<div

className="
mt-8

space-y-5

"

>




<div

className="
flex

gap-4

items-start

"

>


<div

className="
w-12

h-12

rounded-2xl

bg-[#FFF3E6]

flex

items-center

justify-center

text-[#8B5E3C]

"

>

<MapPin/>

</div>



<p

className="
text-[#4A2518]

font-semibold

"

>

{bakeryData.address}

</p>



</div>








<div

className="
flex

gap-4

items-center

"

>


<div

className="
w-12

h-12

rounded-2xl

bg-[#FFF3E6]

flex

items-center

justify-center

text-[#8B5E3C]

"

>

<Phone/>

</div>



<p

className="
text-[#4A2518]

font-semibold

"

>

Call / WhatsApp Order

</p>



</div>






</div>







<a

href={`https://wa.me/${bakeryData.whatsapp}`}

target="_blank"

rel="noreferrer"

className="
mt-10

inline-flex

items-center

gap-3

px-8

py-4

rounded-full

bg-[#4A2518]

text-white

font-bold

shadow-lg

"

>


<MessageCircle size={20}/>

Order On WhatsApp


</a>





</div>










{/* RIGHT CARD */}




<div

className="
bg-[#FFF9F3]

rounded-[45px]

p-10

border

border-[#E8D3B5]

"

>



<div

className="
bg-white

rounded-[35px]

p-8

shadow-sm

"

>


<h3

className="
text-3xl

font-black

text-[#4A2518]

"

>

Bake's N Bite's

</h3>





<p

className="
mt-4

text-[#6B5140]

leading-relaxed

"

>

Fresh cakes, pastries, snacks
and celebration products made with love.

</p>







<div

className="
mt-8

h-52

rounded-3xl

bg-[#F5E6D3]

flex

items-center

justify-center

text-[#8B5E3C]

font-bold

"

>

Google Map Location

</div>






</div>



</div>







</div>





</div>


</section>


)

}



export default Contact;