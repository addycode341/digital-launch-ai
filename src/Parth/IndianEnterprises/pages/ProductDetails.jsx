import { motion } from "framer-motion";

import {
MessageCircle,
CheckCircle,
ArrowLeft,
Sparkles,
ShieldCheck,
Clock,
Package
} from "lucide-react";

import {
Link,
useParams
} from "react-router-dom";


function ProductDetails(){


const {id}=useParams();



const products=[


// ================= PRINTING =================


{
id:"visiting-card",
name:"Premium Visiting Cards",
category:"Printing Services",
image:"/images/visiting-card.jpg",
description:"Luxury visiting card printing with premium finishing for businesses and professionals.",
details:[
"Premium quality paper",
"Luxury finishing options",
"Custom designs available",
"Bulk orders accepted"
]
},


{
id:"uv-printing",
name:"Premium UV Printing",
category:"Printing Services",
image:"/images/uv-printing.jpg",
description:"High quality UV printing solutions with vibrant colors and premium effects.",
details:[
"Modern UV technology",
"Long lasting print",
"Premium finishing",
"Custom designs available"
]
},


{
id:"3d-printing",
name:"3D Effect Printing",
category:"Printing Services",
image:"/images/3d-printing.jpg",
description:"Creative 3D effect printing solutions for premium branding.",
details:[
"Attractive 3D effects",
"High quality output",
"Professional finishing",
"Branding support"
]
},


{
id:"custom-shape-cutting",
name:"Custom Shape Cutting",
category:"Printing Services",
image:"/images/shape-cutting.jpg",
description:"Advanced cutting technology for unique shapes and creative designs.",
details:[
"Precision cutting",
"Custom sizes available",
"Creative solutions",
"Bulk orders accepted"
]
},


{
id:"brochure",
name:"Brochure Printing",
category:"Printing Services",
image:"/images/brochure.jpg",
description:"Professional brochure printing for marketing and business promotion.",
details:[
"Premium paper quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]
},


{
id:"packaging",
name:"Packaging Printing",
category:"Printing Services",
image:"/images/packaging.jpg",
description:"Creative packaging printing solutions for brands and businesses.",
details:[
"Custom packaging",
"Premium colors",
"Brand printing",
"Bulk production"
]
},



// ================= OFFICE =================


{
id:"premium-files-folders",
name:"Premium Files & Folders",
category:"Office Stationery",
image:"/images/office-stationery.jpg",
description:"Professional files and folders for office documentation.",
details:[
"Premium material",
"Corporate designs",
"Durable quality",
"Bulk supply available"
]
},


{
id:"office-registers",
name:"Office Registers",
category:"Office Stationery",
image:"/images/office-stationery.jpg",
description:"High quality registers for offices and businesses.",
details:[
"Quality paper",
"Strong binding",
"Professional use",
"Bulk availability"
]
},


{
id:"executive-diaries",
name:"Executive Diaries",
category:"Office Stationery",
image:"/images/office-stationery.jpg",
description:"Premium diaries for corporate meetings and professionals.",
details:[
"Luxury finishing",
"Professional look",
"Custom branding",
"Premium pages"
]
},


{
id:"pens-writing-supplies",
name:"Pens & Writing Supplies",
category:"Office Stationery",
image:"/images/office-stationery.jpg",
description:"Complete writing stationery solutions for offices.",
details:[
"Premium pens",
"Daily office essentials",
"Bulk orders",
"Quality products"
]
},


{
id:"office-paper-products",
name:"Office Paper Products",
category:"Office Stationery",
image:"/images/office-stationery.jpg",
description:"Quality paper products for daily office requirements.",
details:[
"Premium paper quality",
"Daily office use",
"Multiple sizes",
"Bulk supply"
]
},


{
id:"office-accessories",
name:"Office Accessories",
category:"Office Stationery",
image:"/images/office-stationery.jpg",
description:"Staplers, folders, clips and other office essentials.",
details:[
"Premium accessories",
"Durable products",
"Complete office solutions",
"Bulk orders accepted"
]
},


// ================= SCHOOL =================


{
id:"school-notebooks",
name:"School Notebooks",
category:"School Stationery",
image:"/images/school-stationery.jpg",
description:"Quality notebooks designed for students and schools.",
details:[
"Premium pages",
"Different sizes available",
"School bulk supply",
"Custom printing available"
]
},


{
id:"drawing-books",
name:"Drawing Books",
category:"School Stationery",
image:"/images/school-stationery.jpg",
description:"Creative drawing books for students and artists.",
details:[
"Smooth pages",
"Creative designs",
"Student friendly",
"Bulk supply available"
]
},


{
id:"color-pencils",
name:"Color Pencils",
category:"School Stationery",
image:"/images/school-stationery.jpg",
description:"Bright and smooth color pencils for artwork.",
details:[
"Bright colors",
"Safe material",
"Creative learning",
"School supply"
]
},


{
id:"sketch-pens",
name:"Premium Sketch Pens",
category:"School Stationery",
image:"/images/school-stationery.jpg",
description:"High quality sketch pens for students and creative projects.",
details:[
"Smooth writing",
"Bright colors",
"Non-toxic material",
"Bulk supply available"
]
},


{
id:"art-craft-material",
name:"Art & Craft Materials",
category:"School Stationery",
image:"/images/school-stationery.jpg",
description:"Complete art and craft supplies for schools and students.",
details:[
"Creative products",
"Project materials",
"Premium quality",
"Bulk orders accepted"
]
},


{
id:"school-accessories",
name:"School Accessories",
category:"School Stationery",
image:"/images/school-stationery.jpg",
description:"Complete range of school accessories including bags, rulers and daily essentials.",
details:[
"Student friendly designs",
"Premium quality",
"Multiple items available",
"Bulk orders accepted"
]
},




// ================= LEATHER =================



{
id:"leather-office-files",
name:"Leather Office Files",
category:"Leather Products",
image:"/images/leather.jpg",
description:"Premium leather office files designed for corporate professionals.",
details:[
"Premium leather material",
"Professional finishing",
"Custom branding available",
"Long lasting quality"
]
},


{
id:"executive-leather-bags",
name:"Executive Leather Bags",
category:"Leather Products",
image:"/images/leather.jpg",
description:"Stylish executive leather bags with premium finishing.",
details:[
"Premium leather",
"Strong durability",
"Corporate design",
"Custom orders available"
]
},


{
id:"leather-wallets",
name:"Leather Wallets",
category:"Leather Products",
image:"/images/leather.jpg",
description:"Elegant leather wallets with professional luxury look.",
details:[
"Quality leather",
"Luxury design",
"Durable material",
"Bulk availability"
]
},


{
id:"card-holders",
name:"Leather Card Holders",
category:"Leather Products",
image:"/images/leather.jpg",
description:"Premium business card holders for corporate professionals.",
details:[
"Premium finishing",
"Compact design",
"Professional style",
"Custom options"
]
},


{
id:"rexine-products",
name:"Rexine Products",
category:"Leather Products",
image:"/images/leather.jpg",
description:"High quality rexine products with customized solutions.",
details:[
"Quality material",
"Custom designs",
"Professional finishing",
"Bulk orders"
]
},


{
id:"customized-leather-items",
name:"Customized Leather Items",
category:"Leather Products",
image:"/images/leather.jpg",
description:"Custom designed leather products according to business needs.",
details:[
"Custom manufacturing",
"Premium quality",
"Unique designs",
"Bulk supply"
]
}



];




// PRODUCT FIND


let product = products.find(
(item)=>item.id===id
);




// SAFETY FIX
if(product){

product={
...product,
details:product.details || [
"Premium Quality",
"Custom Design Available",
"Bulk Orders Accepted",
"Fast Delivery"
]
};

}





const features=[

{
icon:<ShieldCheck/>,
title:"Premium Quality",
desc:"High quality material and professional finishing."
},

{
icon:<Sparkles/>,
title:"Modern Design",
desc:"Creative solutions with premium appearance."
},

{
icon:<Clock/>,
title:"Fast Delivery",
desc:"Quick processing for business requirements."
},

{
icon:<Package/>,
title:"Bulk Orders",
desc:"Special solutions for large quantity orders."
}

];




if(!product){

return(

<div
className="
bg-black
min-h-screen
text-white
flex
items-center
justify-center
text-4xl
"
>

Product Not Found

</div>

)

}
return(


<section

className="
bg-black
min-h-screen
text-white
pt-32
pb-24
"

>


<div

className="
max-w-7xl
mx-auto
px-6
"

>


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





<div

className="
grid
lg:grid-cols-2
gap-12
items-center
"

>



{/* IMAGE */}


<motion.div

initial={{
opacity:0,
x:-40
}}

animate={{
opacity:1,
x:0
}}

>


<div

className="
rounded-3xl
overflow-hidden
border
border-white/10
"

>


<img

src={product.image}

alt={product.name}

className="
w-full
h-[500px]
object-cover
"

/>


</div>


</motion.div>







{/* CONTENT */}



<motion.div

initial={{
opacity:0,
x:40
}}

animate={{
opacity:1,
x:0
}}

>



<p

className="
text-yellow-500
uppercase
tracking-widest
font-semibold
"

>

{product.category}

</p>





<h1

className="
text-4xl
md:text-6xl
font-bold
mt-4
"

>

{product.name}

</h1>





<p

className="
text-gray-400
text-lg
mt-6
leading-relaxed
"

>

{product.description}

</p>







<h2

className="
text-2xl
font-bold
mt-10
mb-5
"

>

Product Features

</h2>





<div

className="
space-y-4
"

>


{

product.details.map((item,index)=>(


<div

key={index}

className="
flex
items-center
gap-3
text-gray-300
"

>


<CheckCircle

size={20}

className="
text-yellow-500
"

/>


{item}


</div>


))


}



</div>







<a

href="https://wa.me/919999999999"

target="_blank"

rel="noreferrer"

className="
mt-10
inline-flex
items-center
gap-3
bg-yellow-500
text-black
px-8
py-4
rounded-full
font-bold
hover:scale-105
transition
"

>


<MessageCircle/>


Get Quote On WhatsApp


</a>





</motion.div>



</div>








{/* FEATURE CARDS */}



<div

className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-5
mt-20
"

>


{

features.map((item,index)=>(


<div

key={index}

className="
bg-white/5
border
border-white/10
rounded-2xl
p-6
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



</div>


))


}



</div>




</div>


</section>


)


}


export default ProductDetails;