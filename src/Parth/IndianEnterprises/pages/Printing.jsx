import { motion } from "framer-motion";
import ProductCard from "../components/products/ProductCard";


function Printing(){


const products = [ 
  {
    id: "answer-sheet",
    name: "Customized School Answer Sheets",
    image: "/images/answer-sheet.jpg",
    desc: "Custom printed school answer sheets with school logo, barcode, serial numbering and high-quality paper."
  },

  {
    id: "catalogue",
    name: "Customized Catalogue Printing",
    image: "/images/catalogue.jpg",
    desc: "Premium product catalogues with glossy or matte finish for businesses and brands."
  },

  {
    id: "brochure",
    name: "Brochure Printing",
    image: "/images/brochure.jpg",
    desc: "Professional brochure printing for marketing, events and business promotions."
  },

  {
    id: "tri-folder",
    name: "Tri-Fold Brochure",
    image: "/images/trifold.jpg",
    desc: "Premium tri-fold brochures designed for restaurants, companies and promotional campaigns."
  },

  {
    id: "price-list",
    name: "Customized Price List",
    image: "/images/price-list.jpg",
    desc: "Elegant and easy-to-read customized price lists for restaurants, salons and retail stores."
  },

  {
    id: "tshirt-printing",
    name: "Customized T-Shirts",
    image: "/images/printing t-shirt.jpeg",
    desc: "High-quality custom T-shirt printing for schools, companies, events and promotional branding."
  },

  {
    id: "cap-printing",
    name: "Customized Caps",
    image: "/images/printing t-shirtcap.jpeg",
    desc: "Premium logo printed caps for businesses, teams, schools and promotional events."
  },

  {
    id: "pen-printing",
    name: "Customized Pens",
    image: "/images/pen.jpg",
    desc: "Corporate branded pens with custom logo printing for giveaways and marketing."
  },

  {
    id: "cup-printing",
    name: "Customized Mugs & Cups",
    image: "/images/cup.jpg",
    desc: "Personalized ceramic mugs and cups with company logo, photos or custom designs."
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