import {
  Smartphone,
  Phone,
  Mail,
  MapPin
} from "lucide-react";


function Footer({data}){


const businessName =
data?.businessName ||
data?.title ||
"Mobile Hub";


return(

<footer

className="
bg-[#030303]
border-t
border-white/10
pt-20
pb-8
px-5
sm:px-8
"

>

<div

className="
max-w-7xl
mx-auto
grid
sm:grid-cols-2
lg:grid-cols-4
gap-10
"

>


{/* BRAND */}

<div>


<div className="
flex
items-center
gap-3
">

<div

className="
w-14
h-14
rounded-2xl
bg-gradient-to-br
from-blue-500
to-purple-600
flex
items-center
justify-center
"

>

<Smartphone size={30}/>

</div>


<h2 className="
text-3xl
font-black
">

{businessName}

</h2>


</div>


<p className="
text-gray-400
mt-5
leading-relaxed
">

Your trusted destination for premium smartphones,
accessories and professional mobile services.

</p>



<div className="
flex
gap-3
mt-6
">


{
["IG","FB","YT"].map((item)=>(

<a

key={item}

href="#"

className="
w-10
h-10
rounded-xl
bg-white/10
flex
items-center
justify-center
font-bold
text-sm
hover:bg-blue-500
transition
"

>

{item}

</a>

))
}


</div>


</div>





{/* LINKS */}

<div>

<h3 className="
text-xl
font-black
mb-6
">

Quick Links

</h3>


<div className="
space-y-4
text-gray-400
">


{
[
"Home",
"Products",
"Offers",
"Gallery",
"Contact"
].map(item=>(

<a

key={item}

href={`#${item.toLowerCase()}`}

className="
block
hover:text-white
transition
"

>

{item}

</a>

))

}


</div>


</div>






{/* SERVICES */}

<div>

<h3 className="
text-xl
font-black
mb-6
">

Services

</h3>


<div className="
space-y-4
text-gray-400
">

<p>Mobile Repair</p>
<p>Screen Replacement</p>
<p>Battery Service</p>
<p>Software Support</p>
<p>Accessories</p>


</div>


</div>







{/* CONTACT */}

<div>

<h3 className="
text-xl
font-black
mb-6
">

Contact

</h3>



<div className="
space-y-5
text-gray-400
">


<div className="
flex
items-center
gap-3
">

<Phone
size={18}
className="text-blue-400"
/>

{data?.phone || "+91 98765 43210"}

</div>



<div className="
flex
items-center
gap-3
">

<Mail
size={18}
className="text-purple-400"
/>

{data?.email || "support@mobilehub.com"}

</div>



<div className="
flex
items-center
gap-3
">

<MapPin
size={18}
className="text-green-400"
/>

{data?.location || "Delhi, India"}

</div>


</div>


</div>



</div>





<div

className="
max-w-7xl
mx-auto
border-t
border-white/10
mt-14
pt-6
flex
flex-col
sm:flex-row
justify-between
gap-3
text-gray-500
text-sm
"

>


<p>

© 2026 {businessName}. All Rights Reserved.

</p>


<p>

Premium Smartphone Store

</p>


</div>


</footer>

)

}


export default Footer;