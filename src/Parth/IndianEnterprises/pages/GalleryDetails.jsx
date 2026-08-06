import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

function GalleryDetails() {

const { category } = useParams();


const galleries = {

leather:[

{
title:"Executive Leather Bags",
images:[
"/images/Leather Bag.jpeg"
]
},


{
title:"Rexine Products",

images:[
"/images/rexine1.jpeg",
"/images/rexin2.jpeg",
"/images/rexine3.jpeg",
"/images/rexine4.jpeg",
"/images/rexine5.jpeg"
],

videos:[
"/videos/rexinevideo1.mp4",
"/videos/rexinevideo2.mp4",
"/videos/rexinevideo3.mp4",
"/videos/rexinevideo4.mp4"
]

},


{
title:"Leather Office Files",

images:[
"/images/Leather files .jpeg",
"/images/Leather files 2.jpeg",
"/images/Leather files3.jpeg"
]

}

],



printing:[

{
title:"Premium Visiting Cards",

images:[
"/images/visiting-card.jpg",
"/images/visiting-card2.jpg",
"/images/visiting-card3.jpg"
]

},


{
title:"UV Printing",

images:[
"/images/uv-printing.jpg",
"/images/uv-printing2.jpg"
]

}

],



school:[

{
title:"School Stationery",

images:[
"/images/School sationary .jpeg",
"/images/School sationary 2.jpeg"
]

}

],



office:[

{
title:"Office Stationery",

images:[
"/images/office sattionary .jpeg"
]

}

]


};



const products = galleries[category] || [];


const [preview,setPreview]=useState(null);



return(

<section className="
bg-black
min-h-screen
text-white
pt-32
pb-24
">


<div className="
max-w-7xl
mx-auto
px-6
">


<Link
to="/indian-enterprises"
className="
inline-flex
items-center
gap-2
text-yellow-500
mb-10
"
>

<ArrowLeft size={18}/>
Back

</Link>



<motion.div

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

className="text-center mb-16"

>


<p className="
text-yellow-500
uppercase
tracking-[5px]
">

Our Collection

</p>


<h1 className="
text-5xl
font-bold
mt-5
">

{category}

<span className="text-yellow-500">
 Gallery
</span>

</h1>


</motion.div>




<div className="space-y-20">


{
products.map((product,index)=>(


<motion.div

key={index}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

>



<h2 className="
text-3xl
font-bold
mb-8
text-yellow-500
">

{product.title}

</h2>




<div className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-8
">



{/* IMAGES */}

{
product.images?.map((img,i)=>(


<div

key={i}

onClick={()=>
setPreview({
type:"image",
src:img
})
}

className="
rounded-3xl
overflow-hidden
border
border-white/10
bg-white/5
cursor-pointer
"


>


<img

src={img}

alt={product.title}

className="
w-full
h-[320px]
object-cover
hover:scale-110
transition
duration-700
"

/>


<div className="p-4 bg-black/40">

<h3 className="font-semibold">

{product.title}

</h3>

</div>


</div>


))

}




{/* VIDEOS */}

{
product.videos?.map((video,i)=>(


<div

key={i}

onClick={()=>
setPreview({
type:"video",
src:video
})
}

className="
rounded-3xl
overflow-hidden
border
border-white/10
bg-white/5
cursor-pointer
"

>


<video

className="
w-full
h-[320px]
object-cover
"

controls

>

<source
src={video}
type="video/mp4"
/>


</video>



<div className="p-4 bg-black/40">

<h3 className="font-semibold">

{product.title}

</h3>

</div>


</div>


))

}



</div>


</motion.div>


))

}


</div>





{/* PREVIEW MODAL */}


{
preview && (

<div

className="
fixed
inset-0
z-50
bg-black/90
flex
items-center
justify-center
p-6
"

onClick={()=>setPreview(null)}

>


<button

className="
absolute
top-8
right-8
text-white
text-4xl
"

>

×

</button>



{

preview.type==="image" ?

(

<img

src={preview.src}

className="
max-h-[90vh]
max-w-[90vw]
rounded-3xl
object-contain
"

onClick={(e)=>e.stopPropagation()}

/>

)

:

(

<video

controls

autoPlay

className="
max-h-[90vh]
max-w-[90vw]
rounded-3xl
"

onClick={(e)=>e.stopPropagation()}

>

<source

src={preview.src}

type="video/mp4"

/>

</video>

)

}


</div>

)

}



</div>

</section>


)

}


export default GalleryDetails;