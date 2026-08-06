import { motion } from "framer-motion";

import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowUp
} from "lucide-react";



function Footer(){


const scrollTop=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



const scrollSection=(id)=>{

document
.getElementById(id)
?.scrollIntoView({

behavior:"smooth"

});

};




return(


<footer

className="
relative
bg-[#050505]
text-white
overflow-hidden
border-t
border-white/10
"

>


{/* Glow */}

<div

className="
absolute
top-0
left-1/2
-translate-x-1/2
w-[600px]
h-[300px]
bg-yellow-500/10
blur-[120px]
rounded-full
"

></div>






<div

className="
max-w-7xl
mx-auto
px-6
relative
z-10
pt-16
"

>






{/* CTA */}



<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
bg-white/[0.04]
border
border-white/10
rounded-3xl
p-8
md:p-12
flex
flex-col
md:flex-row
justify-between
items-center
gap-6
"

>


<div>


<h2

className="
text-3xl
md:text-4xl
font-bold
"

>

Need Premium Printing?

</h2>



<p

className="
text-gray-400
mt-3
"

>

Quality printing solutions for businesses,
schools and corporate requirements.

</p>


</div>






<a

href="https://wa.me/919810559753"

target="_blank"

rel="noreferrer"

className="
bg-yellow-500
text-black
px-7
py-4
rounded-full
font-bold
flex
items-center
gap-3
hover:scale-105
transition
"

>

<MessageCircle size={20}/>

Chat With Us

</a>



</motion.div>









{/* FOOTER CONTENT */}



<div

className="
grid
lg:grid-cols-4
md:grid-cols-2
gap-10
py-16
"

>








{/* COMPANY */}



<div>


<h2

className="
text-3xl
font-bold
"

>

Indian

<span className="text-yellow-500">

Enterprises

</span>


</h2>



<p

className="
text-gray-400
mt-5
leading-relaxed
text-sm
"

>

Your trusted printing partner for
premium printing services, office stationery,
school supplies and leather & rexine products.

</p>




<div

className="
mt-6
text-yellow-500
font-semibold
text-sm
"

>

Premium Quality Printing Since Years

</div>


</div>









{/* SERVICES */}



<div>


<h3

className="
text-xl
font-bold
mb-6
"

>

Services

</h3>




<ul

className="
space-y-4
text-gray-400
text-sm
"

>


<li className="hover:text-yellow-500 transition">

Commercial Printing

</li>


<li className="hover:text-yellow-500 transition">

Office Stationery

</li>


<li className="hover:text-yellow-500 transition">

School Supplies

</li>


<li className="hover:text-yellow-500 transition">

Leather & Rexine Products

</li>


<li className="hover:text-yellow-500 transition">

Corporate Printing

</li>



</ul>


</div>









{/* LINKS */}



<div>


<h3

className="
text-xl
font-bold
mb-6
"

>

Quick Links

</h3>



<ul

className="
space-y-4
text-gray-400
text-sm
"

>


<li

onClick={scrollTop}

className="
cursor-pointer
hover:text-yellow-500
transition
"

>

Home

</li>



<li

onClick={()=>scrollSection("about")}

className="
cursor-pointer
hover:text-yellow-500
transition
"

>

About Us

</li>



<li

onClick={()=>scrollSection("gallery")}

className="
cursor-pointer
hover:text-yellow-500
transition
"

>

Gallery

</li>



<li

onClick={()=>scrollSection("contact")}

className="
cursor-pointer
hover:text-yellow-500
transition
"

>

Contact

</li>



</ul>


</div>









{/* CONTACT */}



<div>


<h3

className="
text-xl
font-bold
mb-6
"

>

Contact

</h3>





<div

className="
space-y-5
text-gray-400
text-sm
"

>





<div className="flex gap-3">


<MapPin

size={20}

className="text-yellow-500 flex-shrink-0"

/>


<p>

Shop No.132/3,
<br/>

Kagaz Bhawan,
<br/>

Gali Batashan,
<br/>

Chawri Bazar,
<br/>

Delhi - 110006

</p>


</div>






<div className="flex gap-3">


<MapPin

size={20}

className="text-yellow-500 flex-shrink-0"

/>


<p>

AG-329,
<br/>

Shalimar Bagh,
<br/>

New Delhi - 110088

</p>


</div>







<div className="flex gap-3">


<Phone

size={20}

className="text-yellow-500"

/>


<div>


<a

href="tel:+919810559753"

className="hover:text-yellow-500"

>

+91 9810559753

</a>


<br/>


<a

href="tel:+918130287709"

className="hover:text-yellow-500"

>

+91 8130287709

</a>


</div>


</div>







<div className="flex gap-3">


<Mail

size={20}

className="text-yellow-500"

/>


<a

href="mailto:india173.173@gmail.com"

className="hover:text-yellow-500 break-all"

>

india173.173@gmail.com

</a>


</div>




</div>




</div>






</div>









{/* BOTTOM */}



<div

className="
border-t
border-white/10
py-6
flex
flex-col
md:flex-row
justify-between
items-center
gap-4
text-gray-500
text-sm
"

>


<p>

© {new Date().getFullYear()} Indian Enterprises. All Rights Reserved.

</p>



<p>

GST Registered Business | Delhi

</p>



</div>





</div>






{/* TOP BUTTON */}



<button

onClick={scrollTop}

className="
fixed
bottom-6
right-6
w-12
h-12
rounded-full
bg-yellow-500
text-black
flex
items-center
justify-center
hover:scale-110
transition
shadow-xl
"

>


<ArrowUp size={22}/>


</button>






</footer>


)

}



export default Footer;