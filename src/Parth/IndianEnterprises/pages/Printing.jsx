import { motion } from "framer-motion";
import ProductCard from "../components/products/ProductCard";


function Printing(){


const products=[


{
id:"visiting-card",
name:"Premium Visiting Cards",
image:"/images/visiting-card.jpg",
desc:"Luxury visiting card printing with premium finishing."
},



{
id:"uv-printing",
name:"Premium UV Printing",
image:"/images/uv-printing.jpg",
desc:"High quality UV printing with attractive effects."
},



{
id:"3d-printing",
name:"3D Effect Printing",
image:"/images/3d-printing.jpg",
desc:"Modern 3D effect printing solutions."
},



{
id:"custom-shape-cutting",
name:"Custom Shape Cutting",
image:"/images/shape-cutting.jpg",
desc:"Custom shape cutting with advanced technology."
},



{
id:"brochure",
name:"Brochure Printing",
image:"/images/brochure.jpg",
desc:"Professional brochures for business branding."
},



{
id:"packaging",
name:"Packaging Printing",
image:"/images/packaging.jpg",
desc:"Creative packaging printing solutions."
}


];



return(


<section className="
bg-black
min-h-screen
text-white
pt-32
pb-20
">


<div className="
max-w-7xl
mx-auto
px-6
">



<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

className="
text-center
mb-14
"

>


<p className="
text-yellow-500
uppercase
tracking-widest
font-semibold
">

Premium Printing

</p>




<h1 className="
text-4xl
md:text-6xl
font-bold
mt-3
">

Printing

<span className="
text-yellow-500
">

 Services

</span>


</h1>




<p className="
text-gray-400
mt-5
max-w-2xl
mx-auto
">

Complete printing solutions including UV printing,
3D effects, custom cutting and business branding.

</p>


</motion.div>





<div className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-6
">


{

products.map((product,index)=>(


<ProductCard

key={index}

product={product}

/>


))


}


</div>



</div>


</section>


)

}


export default Printing;