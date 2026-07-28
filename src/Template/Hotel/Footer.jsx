import {
Phone,
Mail,
MapPin
} from "lucide-react";




function Footer(){


return(


<footer

className="
bg-[#050505]
border-t
border-white/10
pt-16
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
md:grid-cols-4
gap-10
"

>





<div>


<h2 className="
text-3xl
font-black
">

Royal

<span className="
text-yellow-400
">

Stay

</span>

</h2>


<p className="
text-gray-400
mt-5
leading-relaxed
">

Luxury rooms, premium dining and unforgettable hospitality.

</p>


</div>







<div>


<h3 className="
font-bold
text-xl
mb-5
">

Explore

</h3>


<div className="
space-y-3
text-gray-400
">


<p>Rooms</p>

<p>Amenities</p>

<p>Gallery</p>

<p>Offers</p>


</div>


</div>








<div>


<h3 className="
font-bold
text-xl
mb-5
">

Contact

</h3>


<div className="
space-y-4
text-gray-400
">


<p className="
flex
gap-3
">

<Phone size={18}
className="text-yellow-400"
/>

+91 98765 43210

</p>




<p className="
flex
gap-3
">

<Mail size={18}
className="text-yellow-400"
/>

booking@royalstay.com

</p>




<p className="
flex
gap-3
">

<MapPin size={18}
className="text-yellow-400"
/>

New Delhi, India

</p>


</div>


</div>







<div>


<h3 className="
font-bold
text-xl
mb-5
">

Follow

</h3>



<div className="
flex
gap-3
">


<button className="
w-11
h-11
rounded-full
bg-white/10
hover:bg-yellow-400
hover:text-black
transition
">

F

</button>


<button className="
w-11
h-11
rounded-full
bg-white/10
hover:bg-yellow-400
hover:text-black
transition
">

I

</button>


<button className="
w-11
h-11
rounded-full
bg-white/10
hover:bg-yellow-400
hover:text-black
transition
">

Y

</button>


</div>


</div>





</div>







<div className="
max-w-7xl
mx-auto
border-t
border-white/10
mt-12
pt-6
text-center
text-gray-500
text-sm
">


© 2026 Royal Stay Hotel. All Rights Reserved.


</div>




</footer>


)

}


export default Footer;