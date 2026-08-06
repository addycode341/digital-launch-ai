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
id:"customized-school-answer-sheets",
name:"Customized School Answer Sheets",
category:"Printing Services",
image:"/images/answer-sheet.jpg",
description:
"Custom printed school answer sheets with school logo, barcode, serial numbering and high-quality paper.",

details:[
"Premium paper quality",
"Custom design available",
"Bulk orders accepted",
"Fast delivery"
]

},


{
id:"customized-catalogue-printing",
name:"Customized Catalogue Printing",
category:"Printing Services",
image:"/images/catalogue.jpg",

description:
"Premium product catalogues with glossy or matte finish for businesses and brands.",

details:[
"Premium paper quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]

},


{
id:"brochure",
name:"Brochure Printing",
category:"Printing Services",
image:"/images/brochure.jpg",

description:
"Professional brochure printing for marketing and business promotion.",

details:[
"Premium paper quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]

},


{
id:"tri-fold-brochure",
name:"Tri-Fold Brochure",
category:"Printing Services",
image:"/images/trifold.jpg",

description:
"Premium tri-fold brochures designed for restaurants, companies and promotional campaigns.",

details:[
"Premium paper quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]

},


{
id:"customized-price-list",
name:"Customized Price List",
category:"Printing Services",
image:"/images/price-list.jpg",

description:
"Elegant and easy-to-read customized price lists for restaurants, salons and retail stores.",

details:[
"Premium paper quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]

},


{
id:"tshirt-printing",
name:"Customized T-Shirts",
category:"Printing Services",
image:"/images/printing t-shirt.jpeg",

description:
"High-quality custom T-shirt printing for schools, companies, events and promotional branding.",

details:[
"Premium fabric quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]

},


{
id:"customized-caps",
name:"Customized Caps",
category:"Printing Services",
image:"/images/printing t-shirtcap.jpeg",

description:
"Premium logo printed caps for businesses, teams, schools and promotional events.",

details:[
"Premium fabric quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]

},


{
id:"customized-pens",
name:"Customized Pens",
category:"Printing Services",
image:"/images/pen.jpg",

description:
"Corporate branded pens with custom logo printing for giveaways and marketing.",

details:[
"Premium material quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]

},


{
id:"customized-mugs-cups",
name:"Customized Mugs & Cups",
category:"Printing Services",
image:"/images/cup.jpg",

description:
"Personalized ceramic mugs and cups with company logo, photos or custom designs.",

details:[
"Premium ceramic quality",
"Creative designs",
"Multiple sizes available",
"Fast delivery"
]

},


// ================= OFFICE =================

// ================= OFFICE =================


{
id:"premium-files-folders",
name:"Premium Files & Folders",
category:"Office Stationery",
image:"/images/office-stationery.jpg",

description:
"Professional files and folders for office documentation.",

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

description:
"High quality registers for offices and businesses.",

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

description:
"Premium diaries for corporate meetings and professionals.",

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

description:
"Complete writing stationery solutions for offices.",

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

description:
"Quality paper products for daily office requirements.",

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

description:
"Staplers, folders, clips and other office essentials.",

details:[
"Premium accessories",
"Durable products",
"Complete office solutions",
"Bulk orders accepted"
]

},


{
id:"packing-boxes",
name:"Packing Boxes",
category:"Office Stationery",
image:"/images/Packing-box.jpeg",

description:
"Durable packing boxes for office and business use, available in various sizes and designs.",

details:[
"Durable material",
"Multiple sizes available",
"Custom designs possible",
"Bulk supply"
]

},


{
id:"jute-folders",
name:"Jute Folders",
category:"Office Stationery",
image:"/images/jute photo .jpeg",

description:
"Eco-friendly jute folders for office and business use, customizable with logos and designs.",

details:[
"Eco-friendly material",
"Customizable designs",
"Durable and reusable",
"Bulk supply available"
]

},


{
id:"plastic-folders",
name:"Plastic Folders",
category:"Office Stationery",
image:"/images/Plastic folder .jpeg",

description:
"Durable plastic folders for safe document storage and professional office use.",

details:[
"Durable plastic material",
"Multiple sizes available",
"Professional appearance",
"Bulk supply available"
]

},


{
id:"paper-folders",
name:"Paper Folders",
category:"Office Stationery",
image:"/images/Paper folder.jpeg",

description:
"Quality paper folders for offices, institutions and daily document management.",

details:[
"Premium paper quality",
"Multiple sizes available",
"Professional appearance",
"Bulk supply available"
]

},



// ================= SCHOOL =================


{
id:"school-notebooks",
name:"School Notebooks",
category:"School Stationery",
image:"/images/school-stationery.jpeg",

description:
"Quality notebooks designed for students and schools.",

details:[
"Premium pages",
"Different sizes available",
"School bulk supply",
"Custom printing available"
]

},


{
id:"pastel-sheet",
name:"Pastel Sheet",
category:"School Stationery",
image:"/images/Pastel sheet .jpeg",

description:
"High quality pastel sheets for school projects and art activities.",

details:[
"Vibrant colors",
"Durable material",
"Bulk supply available",
"Custom sizes possible"
]

},


{
id:"art-craft-material",
name:"Art & Craft Materials",
category:"School Stationery",
image:"/images/school-stationery.jpg",

description:
"Complete art and craft supplies for schools and students.",

details:[
"Creative products",
"Project materials",
"Premium quality",
"Bulk orders accepted"
]

},


{
id:"colors",
name:"Colors",
category:"School Stationery",
image:"/images/Color.jpeg",

description:
"Complete range of colors and art materials for students, artists and creative activities.",

details:[
"Vibrant colors",
"Premium quality",
"Art supplies",
"Bulk supply available"
]

},


{
id:"all-school-stationery",
name:"All Types Of School Stationery",
category:"School Stationery",
image:"/images/School-stationary .jpeg",

description:
"Complete school stationery solutions including notebooks, pens, pencils, files and daily student essentials.",

details:[
"Premium quality stationery",
"Notebooks and writing materials",
"Art & craft products available",
"Bulk orders accepted"
]

},



// ================= LEATHER =================


{
id:"leather-office-files",
name:"Leather Office Files",
category:"Leather Products",
image:"/images/Leather files .jpeg",

description:
"Premium leather office files designed for corporate professionals.",

details:[
"Premium leather material",
"Professional finishing",
"Custom branding available",
"Long lasting quality"
]

},

// ================= LEATHER CONTINUE =================


{
id:"executive-leather-bags",
name:"Executive Leather Bags",
category:"Leather Products",
image:"/images/Leather Bag.jpeg",

description:
"Stylish executive leather bags with premium finishing.",

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

description:
"Elegant leather wallets with professional luxury look.",

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

description:
"Premium business card holders for corporate professionals.",

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
image:"/images/rexine1.jpeg",

description:
"High quality rexine products with customized solutions.",

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

description:
"Custom designed leather products according to business needs.",

details:[
"Custom manufacturing",
"Premium quality",
"Unique designs",
"Bulk supply"
]

}


];



// ================= PRODUCT FIND =================


let product = products.find(
(item)=>
item.id.toLowerCase().trim() === id
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

initial={{opacity:0,x:-40}}

animate={{opacity:1,x:0}}

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

initial={{opacity:0,x:40}}

animate={{opacity:1,x:0}}

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



<div className="space-y-4">


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
className="text-yellow-500"
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


<div className="text-yellow-500 mb-3">

{item.icon}

</div>


<h3 className="font-bold">

{item.title}

</h3>


<p className="
text-gray-400
text-sm
mt-2
">

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