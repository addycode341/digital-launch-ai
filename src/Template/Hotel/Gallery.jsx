import { motion } from "framer-motion";




const images=[


{
img:"https://images.unsplash.com/photo-1566665797739-1674de7a421a",
title:"Luxury Rooms"
},


{
img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
title:"Hotel Interior"
},


{
img:"https://images.unsplash.com/photo-1582719508461-905c673771fd",
title:"Premium Suite"
},


{
img:"https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
title:"Dining Experience"
},


{
img:"https://images.unsplash.com/photo-1601918774946-25832a4be0d6",
title:"Pool View"
},


{
img:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
title:"Luxury Lobby"
}



];







function Gallery(){


return(


<section

id="gallery"

className="
py-28
px-5
sm:px-8
bg-[#080808]
"

>


<div

className="
max-w-7xl
mx-auto
"

>



<div className="
text-center
mb-16
">


<p className="
text-yellow-400
tracking-[5px]
font-semibold
">

GALLERY

</p>


<h2 className="
text-5xl
sm:text-6xl
font-black
mt-5
">

Luxury

<span className="
text-yellow-400
">

Moments

</span>

</h2>



<p className="
text-gray-400
mt-5
">

Explore the beauty and elegance of our property.

</p>



</div>









<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
"

>


{

images.map((item,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
scale:.9
}}


whileInView={{
opacity:1,
scale:1
}}


viewport={{
once:true
}}


transition={{
delay:index*.1
}}



whileHover={{
y:-10
}}



className="
relative
h-96
rounded-[35px]
overflow-hidden
group
border
border-white/10
"

>



<img

src={item.img}

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
via-transparent
opacity-80
"

/>





<div

className="
absolute
bottom-6
left-6
"

>


<h3 className="
text-2xl
font-bold
">

{item.title}

</h3>



<p className="
text-yellow-400
text-sm
mt-2
">

Royal Experience

</p>


</div>






</motion.div>


))


}


</div>





</div>


</section>


)

}


export default Gallery;