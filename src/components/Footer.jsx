import {
FaInstagram,
FaLinkedin,
FaWhatsapp
} from "react-icons/fa";


import {
Mail,
MapPin,
Phone
} from "lucide-react";





function Footer(){



return(



<footer


className="
relative

py-20

px-5
sm:px-6

bg-[#050816]

border-t

border-white/10

overflow-hidden

"

>







{/* GLOW */}



<div


className="
absolute

w-[500px]

h-[500px]

bg-purple-600/20

blur-[160px]

rounded-full

left-1/2

-translate-x-1/2

top-0

"

/>





<div


className="
absolute

w-[300px]

h-[300px]

bg-pink-500/20

blur-[130px]

rounded-full

right-0

bottom-0

"

/>









<div


className="
relative

z-10

max-w-7xl

mx-auto

"

>









<div


className="
grid

sm:grid-cols-2

lg:grid-cols-4

gap-10

"

>









{/* BRAND */}



<div>


<h2


className="
text-3xl

font-black

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


</h2>








<p


className="
mt-5

text-gray-400

leading-relaxed

"

>


Helping small businesses build professional websites,
generate leads and grow their online presence.


</p>








<div


className="
flex

gap-4

mt-7

"

>





<a


href="https://instagram.com"


target="_blank"


rel="noreferrer"


className="
w-12

h-12

rounded-2xl

bg-white/10

flex

items-center

justify-center

hover:bg-pink-600

hover:-translate-y-2

transition

"

>


<FaInstagram size={20}/>


</a>







<a


href="https://linkedin.com"


target="_blank"


rel="noreferrer"


className="
w-12

h-12

rounded-2xl

bg-white/10

flex

items-center

justify-center

hover:bg-purple-600

hover:-translate-y-2

transition

"


>


<FaLinkedin size={20}/>


</a>







<a


href="https://wa.me/919811970397"


target="_blank"


rel="noreferrer"


className="
w-12

h-12

rounded-2xl

bg-white/10

flex

items-center

justify-center

hover:bg-green-600

hover:-translate-y-2

transition

"


>


<FaWhatsapp size={20}/>


</a>






</div>




</div>














{/* SERVICES */}



<div>



<h3

className="
text-xl

font-bold

"

>


Services


</h3>







<ul


className="
mt-6

space-y-4

text-gray-400

"


>


<li>

<a href="#templates" className="hover:text-pink-400 transition">

Business Websites

</a>

</li>



<li>

<a href="#features" className="hover:text-pink-400 transition">

SEO Growth

</a>

</li>



<li>

<a href="#features" className="hover:text-pink-400 transition">

WhatsApp Automation

</a>

</li>



<li>

<a href="#contact" className="hover:text-pink-400 transition">

Website Maintenance

</a>

</li>



</ul>



</div>













{/* COMPANY */}



<div>



<h3

className="
text-xl

font-bold

"

>


Company


</h3>







<ul


className="
mt-6

space-y-4

text-gray-400

"

>


<li>

<a href="#about" className="hover:text-pink-400 transition">

About Us

</a>

</li>



<li>

<a href="#templates" className="hover:text-pink-400 transition">

Demo Websites

</a>

</li>



<li>

<a href="#pricing" className="hover:text-pink-400 transition">

Pricing

</a>

</li>



<li>

<a href="#contact" className="hover:text-pink-400 transition">

Contact

</a>

</li>


</ul>



</div>













{/* CONTACT */}



<div>



<h3

className="
text-xl

font-bold

"

>


Contact


</h3>








<div


className="
mt-6

space-y-5

text-gray-400

"


>





<div className="
flex
gap-3
items-center
">


<Mail

size={20}

className="text-purple-400"

/>


<a

href="mailto:hello@digitallaunch.ai"

className="hover:text-white"

>


hello@digitallaunch.ai


</a>


</div>








<div className="
flex
gap-3
items-center
">


<Phone

size={20}

className="text-pink-400"

/>



<a

href="tel:+919811970397"

className="hover:text-white"

>


+91 98119 70397


</a>



</div>








<div className="
flex
gap-3
items-center
">


<MapPin

size={20}

className="text-purple-400"

/>


Delhi, India


</div>







</div>









<button


onClick={()=>{

document
.getElementById("pricing")
?.scrollIntoView({

behavior:"smooth"

})

}}



className="
mt-7

px-6

py-3

rounded-xl

bg-gradient-to-r

from-purple-600

to-pink-500

font-semibold

shadow-lg

shadow-purple-500/20

hover:scale-105

transition

"


>


Start Your Website 🚀


</button>





</div>







</div>









{/* BOTTOM */}



<div


className="
mt-16

pt-8

border-t

border-white/10

flex

flex-col

md:flex-row

justify-between

gap-4

text-gray-500

text-sm

"

>


<p>


© 2026 DigitalLaunch AI. All rights reserved.


</p>





<p>


Build • Launch • Grow 🚀


</p>



</div>









</div>






</footer>



)


}



export default Footer;