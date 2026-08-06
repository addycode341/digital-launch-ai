import { motion } from "framer-motion";
import ProductCard from "../components/products/ProductCard";


function SchoolStationery(){


const products=[


{
id:"Pastel-sheet",
name:"Pastel-sheet",
image:"/images/Pastel sheet .jpeg",
desc:"Premium quality pastel sheets available in multiple colors for school projects, crafts and creative work."
},



{
id:"colors",
name:"Colors",
image:"/images/Color.jpeg",
desc:"Complete range of colors and art materials for students, artists and creative activities."
},



{
id:"all-school-stationery",
name:"All Types Of School Stationery",
image:"/images/School-stationary .jpeg",
desc:"Complete school stationery solutions including notebooks, pens, pencils, files and daily student essentials."
}



];




return(


<section

className="
bg-black
min-h-screen
text-white
pt-32
pb-20
relative
overflow-hidden
"

>



{/* Background Glow */}


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






{/* HEADER */}



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
duration:0.6
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
"

>

School Solutions

</p>





<h1

className="
text-4xl
md:text-6xl
font-bold
mt-4
"

>

Creative School

<span className="text-yellow-500">

Stationery

</span>


</h1>





<p

className="
text-gray-400
mt-5
max-w-2xl
mx-auto
text-lg
"

>

Complete school stationery and art craft solutions
including pastel sheets, colors and all types of
stationery products for students and institutions.

</p>



</motion.div>









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



>


<ProductCard

product={product}

/>



</motion.div>



))


}



</div>







</div>



</section>


)

}



export default SchoolStationery;