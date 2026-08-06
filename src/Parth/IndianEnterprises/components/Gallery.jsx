import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";


function Gallery(){


const navigate = useNavigate();



const galleryItems=[

{
title:"Premium Printing",
category:"Printing Services",
image:"https://images.unsplash.com/photo-1586282391129-76a6df230234",
path:"/gallery/printing"
},


{
title:"UV & 3D Printing",
category:"Modern Technology",
image:"https://images.unsplash.com/photo-1561070791-36c11767b26a",
path:"/gallery/printing"
},


{
title:"Office Stationery",
category:"Office Essentials",
image:"https://images.unsplash.com/photo-1455390582262-044cdead277a",
path:"/gallery/office"
},


{
title:"School Stationery",
category:"Art & Craft",
image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
path:"/gallery/school"
},


{
title:"Leather Products",
category:"Leather & Rexine",
image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
path:"/gallery/leather"
},


{
title:"Customized Products",
category:"Premium Solutions",
image:"https://images.unsplash.com/photo-1544816155-12df9643f363",
path:"/gallery/leather"
}

];



return(


<section

id="gallery"

className="
bg-black
text-white
py-24
relative
overflow-hidden
"

>


<div

className="
absolute
left-0
top-40
w-80
h-80
bg-yellow-500/10
blur-[120px]
rounded-full
"

/>



<div

className="
max-w-7xl
mx-auto
px-6
relative
z-10
"

>



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
text-center
mb-16
"

>


<p

className="
text-yellow-500
uppercase
tracking-[5px]
font-semibold
text-sm
"

>

Our Gallery

</p>



<h2

className="
text-3xl
md:text-5xl
font-bold
mt-4
"

>

Our Work &

<span className="
text-yellow-500
">

 Products

</span>


</h2>



<p

className="
text-gray-400
max-w-2xl
mx-auto
mt-5
"

>

Explore our premium printing solutions,
stationery collection and leather product range.

</p>


</motion.div>






<div

className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-7
"

>


{

galleryItems.map((item,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
y:50
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:.5,
delay:index*.1
}}


viewport={{
once:true
}}



onClick={()=>navigate(item.path)}


className="
group
relative
h-[330px]
rounded-3xl
overflow-hidden
border
border-white/10
cursor-pointer
"

>


<img

src={item.image}

alt={item.title}

className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"

/>





<div

className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/30
to-transparent
"

/>





<div

className="
absolute
bottom-0
p-6
"

>


<p

className="
text-yellow-500
text-sm
font-semibold
"

>

{item.category}

</p>



<h3

className="
text-2xl
font-bold
mt-2
"

>

{item.title}

</h3>




<div

className="
flex
items-center
gap-2
text-gray-300
mt-3
text-sm
group-hover:text-yellow-500
transition
"

>

Explore Gallery

<ArrowRight size={16}/>


</div>



</div>





<div

className="
absolute
inset-0
rounded-3xl
border
border-yellow-500/0
group-hover:border-yellow-500/60
transition
"

/>



</motion.div>


))

}



</div>



</div>


</section>


)

}


export default Gallery;

