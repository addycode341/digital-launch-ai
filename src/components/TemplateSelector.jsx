import React from "react";

import {
  motion
} from "framer-motion";

import {
  Eye,
  ArrowRight,
  Sparkles
} from "lucide-react";





const templates=[


{
emoji:"🧁",

title:"Premium Bakery",

desc:
"Luxury bakery website with products, gallery and customer reviews",

features:[

"Product Showcase",
"Gallery Section",
"Customer Reviews",
"WhatsApp Orders"

],

demo:"/bakery-demo",

type:"bakery"

},






{
emoji:"🏋️",

title:"Fitness Pro",

desc:
"Gym website with plans, trainers and booking system",

features:[

"Trainer Profiles",
"Membership Plans",
"Programs",
"Contact System"

],

demo:"/Gym-demo",

type:"gym"

},






{
emoji:"🍔",

title:"Modern Restaurant",

desc:
"Restaurant website with menu and online enquiry",

features:[

"Food Menu",
"Table Enquiry",
"Gallery",
"Reviews"

],

demo:"#",

type:"restaurant"

},







{
emoji:"🏥",

title:"Medical Clinic",

desc:
"Doctor profile and appointment system",

features:[

"Doctor Profile",
"Services",
"Appointment Form",
"Patient Reviews"

],

demo:"#",

type:"medical"

},







{
emoji:"🏠",

title:"Real Estate",

desc:
"Property listing and enquiry website",

features:[

"Property Cards",
"Gallery",
"Lead Form",
"Location Map"

],

demo:"/real-estate-demo",

type:"real estate"

},







{
emoji:"🖨️",

title:"Printing Business",

desc:
"Printing services and product showcase",

features:[

"Services",
"Portfolio",
"Pricing",
"Customer Enquiry"

],

demo:"/printing-business",

type:"printing"

},







{
emoji:"📱",

title:"Premium Mobile Store",

desc:
"Smartphone showroom website with products, offers and repair services",

features:[

"Product Showcase",
"Latest Phones",
"Repair Services",
"Customer Reviews"

],

demo:"/mobile-store-demo",

type:"mobile store"

},







{
emoji:"💇",

title:"Luxury Salon",

desc:
"Premium salon website with services, gallery and appointment booking",

features:[

"Beauty Services",
"Gallery Section",
"Team Profiles",
"Booking Form"

],

demo:"/salon-demo",

type:"salon"

},







{
emoji:"🏨",

title:"Luxury Hotel",

desc:
"Modern hotel website with rooms, amenities and booking enquiry",

features:[

"Room Showcase",
"Amenities",
"Gallery",
"Booking System"

],

demo:"/hotel-demo",

type:"hotel"

}



];









const TemplateSelector=({category,onSelect})=>{


return(


<div>






<div className="
text-center
mb-10
">


<div className="
w-14
h-14
mx-auto
rounded-2xl
bg-purple-500/20
flex
items-center
justify-center
text-purple-400
">


<Sparkles/>


</div>






<h1 className="
text-4xl
font-bold
mt-5
">


Choose Your Website Design 🎨


</h1>







<p className="
text-gray-400
mt-3
">


Select a professional template and customize it with AI


</p>




</div>









<div className="
grid
md:grid-cols-2
gap-7
">


{


templates.map((template,index)=>(




<motion.div


key={index}


whileHover={{

y:-8

}}



className="
bg-white/[0.05]
border
border-white/10
rounded-3xl
p-7
hover:border-purple-500/50
transition
"



>








<div className="
flex
items-center
gap-5
">



<div className="
text-5xl
w-20
h-20
rounded-3xl
bg-purple-600/20
flex
items-center
justify-center
">


{template.emoji}


</div>








<div>


<h2 className="
text-2xl
font-bold
">


{template.title}


</h2>





<p className="
text-gray-400
text-sm
mt-2
">


{template.desc}


</p>




</div>



</div>









<div className="
mt-6
space-y-3
">


{


template.features.map((item,i)=>(



<div

key={i}

className="
flex
items-center
gap-3
text-gray-300
"

>


<span className="
text-green-400
">

✓

</span>


{item}



</div>



))


}



</div>









<div className="
flex
gap-3
mt-8
">







<a

href={template.demo}

target="_blank"

rel="noreferrer"

className="
flex-1
flex
items-center
justify-center
gap-2
py-3
rounded-xl
bg-white/10
hover:bg-white/20
transition
"

>



<Eye size={18}/>


View Demo


</a>









<button


onClick={()=>onSelect(template)}



className="
flex-1
flex
items-center
justify-center
gap-2
py-3
rounded-xl
bg-gradient-to-r
from-purple-600
to-blue-600
font-semibold
"


>


Use Template


<ArrowRight size={18}/>


</button>






</div>








</motion.div>



))


}




</div>






</div>


)


}





export default TemplateSelector;