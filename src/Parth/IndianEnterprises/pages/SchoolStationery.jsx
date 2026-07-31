import { motion } from "framer-motion";
import ProductCard from "../components/products/ProductCard";

import {
BookOpen,
Palette,
PenTool,
Sparkles,
School,
Package
} from "lucide-react";



function SchoolStationery(){



const products=[


{
id:"school-notebooks",
name:"School Notebooks",
image:"/images/school-stationery.jpg",
desc:"Quality notebooks for students with different sizes and premium designs."
},


{
id:"drawing-books",
name:"Drawing Books",
image:"/images/school-stationery.jpg",
desc:"Premium drawing books for creative learning and artwork."
},


{
id:"color-pencils",
name:"Color Pencils",
image:"/images/school-stationery.jpg",
desc:"Bright and smooth color pencils for school art activities."
},


{
id:"sketch-pens",
name:"Sketch Pens",
image:"/images/school-stationery.jpg",
desc:"High quality sketch pens for creative projects."
},


{
id:"art-craft-material",
name:"Art & Craft Materials",
image:"/images/school-stationery.jpg",
desc:"Complete art and craft supplies for schools and students."
},


{
id:"school-accessories",
name:"School Accessories",
image:"/images/school-stationery.jpg",
desc:"School essentials including bags, rulers and daily supplies."
}


];






const features=[


{
icon:<BookOpen/>,
title:"Quality Books",
desc:"Premium notebooks and learning materials."
},


{
icon:<Palette/>,
title:"Creative Art",
desc:"Complete art and craft solutions."
},


{
icon:<PenTool/>,
title:"Writing Supplies",
desc:"Pens, pencils and school essentials."
},


{
icon:<School/>,
title:"School Solutions",
desc:"Bulk supply for schools and institutions."
}


];






return(



<section

className="
bg-black
min-h-screen
text-white
pt-32
pb-24
relative
overflow-hidden
"

>


<div

className="
absolute
top-20
right-0
w-96
h-96
bg-yellow-500/20
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






{/* HERO */}


<motion.div


initial={{
opacity:0,
y:40
}}


animate={{
opacity:1,
y:0
}}


transition={{
duration:0.7
}}


className="
text-center
mb-16
"

>


<div

className="
flex
justify-center
items-center
gap-2
text-yellow-500
uppercase
tracking-widest
font-semibold
"

>


<Sparkles size={18}/>

School Supplies


</div>







<h1

className="
text-4xl
md:text-6xl
font-bold
mt-5
"

>


School Stationery


<span className="
text-yellow-500
">

 & Art Craft

</span>


Solutions


</h1>







<p

className="
text-gray-400
text-lg
mt-5
max-w-3xl
mx-auto
"

>


Complete range of school stationery and art craft
products designed for students, schools and creative needs.


</p>



</motion.div>









{/* FEATURES */}



<div

className="
grid
grid-cols-2
md:grid-cols-4
gap-5
mb-20
"

>


{

features.map((item,index)=>(



<motion.div


key={index}


initial={{
opacity:0,
y:30
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
delay:index*0.1
}}


viewport={{
once:true
}}


className="
bg-white/5
border
border-white/10
rounded-2xl
p-5
hover:border-yellow-500
hover:-translate-y-2
transition
"

>


<div

className="
text-yellow-500
mb-3
"

>

{item.icon}

</div>





<h3

className="
font-bold
"

>

{item.title}

</h3>





<p

className="
text-gray-400
text-sm
mt-2
"

>

{item.desc}

</p>



</motion.div>


))


}



</div>









{/* PRODUCTS TITLE */}



<div

className="
text-center
mb-12
"

>


<h2

className="
text-3xl
md:text-5xl
font-bold
"

>


Our School


<span className="
text-yellow-500
">

 Collection

</span>


</h2>



<p

className="
text-gray-400
mt-3
"

>

Premium stationery and creative products for students.

</p>



</div>









{/* PRODUCTS */}




<div

className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-8
"

>


{


products.map((product,index)=>(


<motion.div


key={product.id}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:0.4,
delay:index*0.1
}}


viewport={{
once:true
}}

>


<ProductCard

product={product}

/>



</motion.div>



))


}



</div>











{/* CTA */}



<div

className="
mt-20
bg-yellow-500
text-black
rounded-3xl
p-8
md:p-12
text-center
"

>



<Package

size={40}

className="
mx-auto
mb-4
"

/>





<h2

className="
text-3xl
font-bold
"

>

Need School Bulk Orders?

</h2>





<p

className="
mt-3
"

>

We provide stationery solutions for schools and institutions.

</p>






<a

href="https://wa.me/919999999999"

target="_blank"

rel="noreferrer"

className="
inline-block
mt-6
bg-black
text-white
px-8
py-3
rounded-full
font-semibold
hover:scale-105
transition
"

>


Contact Now


</a>




</div>






</div>


</section>


)

}



export default SchoolStationery;