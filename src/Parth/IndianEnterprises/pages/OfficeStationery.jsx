
import { motion } from "framer-motion";
import ProductCard from "../components/products/ProductCard";


function OfficeStationery(){


const products=[


{
id:"customized-office-files",
name:"Customized Office Files",
image:"/images/office-stationery.jpg",
desc:"Professional office files customized with company name, logo and branding for corporate requirements."
},



{
id:"plastic-folders",
name:"Plastic Folders",
image:"/images/Plastic folder .jpeg",
desc:"Durable plastic folders for safe document storage and professional office use."
},



{
id:"jute-folders",
name:"Jute Folders",
image:"/images/jute photo .jpeg",
desc:"Premium eco-friendly jute folders with customized designs for businesses and corporate gifting."
},



{
id:"paper-folders",
name:"Paper Folders",
image:"/images/Paper folder.jpeg",
desc:"Quality paper folders for offices, institutions and daily document management."
},

{
    id:"Packing-Boxes",
    name:"Packing Boxes",
    image:"/images/Packing-box.jpeg",
    desc:"Durable packing boxes for office and business use, available in various sizes and designs."
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



{/* Glow */}

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


<p

className="
text-yellow-500
uppercase
tracking-[5px]
font-semibold
"

>

Office Solutions

</p>




<h1

className="
text-4xl
md:text-6xl
font-bold
mt-4
"

>

Premium Office

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

Customized office files and premium folders
designed for businesses, corporate offices,
schools and professional requirements.

</p>



</motion.div>









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



export default OfficeStationery;