import { motion } from "framer-motion";
import ProductCard from "../components/products/ProductCard";


function OfficeStationery(){


const products=[


{
id:"premium-files-folders",
name:"Premium Files & Folders",
image:"/images/office-stationery.jpg",
desc:"Professional office files and folders for document management."
},


{
id:"office-registers",
name:"Office Registers",
image:"/images/office-stationery.jpg",
desc:"High quality registers for offices and businesses."
},


{
id:"executive-diaries",
name:"Executive Diaries",
image:"/images/office-stationery.jpg",
desc:"Premium diaries for meetings and corporate use."
},


{
id:"pens-writing-supplies",
name:"Pens & Writing Supplies",
image:"/images/office-stationery.jpg",
desc:"Complete range of premium writing stationery."
},


{
id:"office-paper-products",
name:"Office Paper Products",
image:"/images/office-stationery.jpg",
desc:"Quality paper products for daily office requirements."
},


{
id:"office-accessories",
name:"Office Accessories",
image:"/images/office-stationery.jpg",
desc:"Staplers, folders, clips and other office essentials."
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


<p className="
text-yellow-500
uppercase
tracking-[5px]
font-semibold
">

Office Solutions

</p>



<h1 className="
text-4xl
md:text-6xl
font-bold
mt-4
">

Premium Office

<span className="
text-yellow-500
">
 Stationery
</span>

</h1>



<p className="
text-gray-400
mt-5
max-w-2xl
mx-auto
text-lg
">

Complete office stationery solutions including files,
registers, diaries, writing supplies and corporate essentials
for businesses and professionals.

</p>


</motion.div>






<div className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-8
">


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


export default OfficeStationery;