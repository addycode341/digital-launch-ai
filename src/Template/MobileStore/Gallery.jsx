import { motion } from "framer-motion";





const gallery=[

{
image:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
title:"Latest iPhone Collection",
tag:"Apple"
},


{
image:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
title:"Galaxy Ultra Series",
tag:"Samsung"
},


{
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
title:"Premium Accessories",
tag:"Accessories"
},


{
image:"https://images.unsplash.com/photo-1580910051074-3eb694886505",
title:"Smartphone Experience",
tag:"Store"
},


{
image:"https://images.unsplash.com/photo-1605236453806-6ff36851218e",
title:"Flagship Devices",
tag:"Premium"
},


{
image:"https://images.unsplash.com/photo-1565849904461-04a58ad377e0",
title:"Mobile Technology",
tag:"Innovation"
}

];







function Gallery(){


return(


<section

id="gallery"

className="
py-20
sm:py-28
px-4
sm:px-8
bg-[#050505]
overflow-hidden
"

>


<div

className="
max-w-7xl
mx-auto
"

>






{/* HEADER */}



<div

className="
text-center
mb-12
sm:mb-16
"

>


<p

className="
text-blue-400
tracking-[3px]
text-sm
font-semibold
"

>

STORE GALLERY

</p>





<h2

className="
text-4xl
sm:text-5xl
lg:text-6xl
font-black
mt-4
"

>

Luxury

<span

className="
text-purple-500
block
sm:inline
"

>

 Mobile Experience

</span>


</h2>






<p

className="
text-gray-400
mt-4
max-w-2xl
mx-auto
text-sm
sm:text-base
"

>

Explore our premium smartphone collection and modern showroom experience.

</p>



</div>









{/* GALLERY GRID */}



<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-5
"

>


{


gallery.map((item,index)=>(



<motion.div


key={index}


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


transition={{

duration:.5,
delay:index*.08

}}


className="
relative
group
overflow-hidden
rounded-[30px]
border
border-white/10
bg-white/[0.04]
"

>





<div

className="
aspect-[4/5]
overflow-hidden
"

>


<img

src={item.image}

alt={item.title}

className="
w-full
h-full
object-cover
transition
duration-700
group-hover:scale-105
"

/>


</div>








{/* Overlay */}


<div

className="
absolute
inset-0
bg-gradient-to-t
from-black/90
via-black/20
to-transparent
"

></div>








<div

className="
absolute
bottom-5
left-5
right-5
"

>


<span

className="
inline-flex
px-3
py-1.5
rounded-full
bg-white/10
backdrop-blur-xl
border
border-white/20
text-xs
font-bold
"

>

{item.tag}

</span>





<h3

className="
text-lg
sm:text-xl
font-black
mt-3
"

>

{item.title}

</h3>



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