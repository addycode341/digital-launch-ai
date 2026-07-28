import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";



function CustomerReviews(){



const reviews=[


{
name:"Priya Sharma",
place:"Burari",
text:
"Ordered a customised birthday cake and the design was exactly what I wanted. Taste was amazing!"
},



{
name:"Rahul Verma",
place:"Delhi",
text:
"Fresh cakes and bakery snacks with great quality. Highly recommended Bake's N Bite's."
},




{
name:"Neha Gupta",
place:"Baba Colony",
text:
"The cake decoration was beautiful and everyone loved the flavour."
},




{
name:"Amit Kumar",
place:"Burari",
text:
"Best place for cakes, patties and bakery items. Always fresh and tasty."
}



];






return(


<section

id="reviews"

className="
py-28

px-6

md:px-12

bg-white

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

mb-16

"

>


<span

className="
inline-flex

px-5

py-2

rounded-full

bg-[#FFF3E6]

text-[#8B5E3C]

font-semibold

"

>

⭐ Customer Love

</span>







<h2

className="
mt-6

text-4xl

md:text-6xl

font-black

text-[#4A2518]

"

>

Loved By Our Customers

</h2>







<p

className="
mt-5

text-[#6B5140]

text-lg

max-w-2xl

mx-auto

"

>

Our customers trust us for fresh taste,
beautiful designs and quality products.

</p>




</div>









{/* REVIEWS */}




<div

className="
grid

md:grid-cols-2

lg:grid-cols-4

gap-8

"

>




{


reviews.map((review,index)=>(


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

delay:index*0.1

}}



whileHover={{

y:-10

}}



className="
bg-[#FFF9F3]

rounded-[35px]

p-8

border

border-[#E8D3B5]

shadow-sm

hover:shadow-xl

transition

"

>





{/* STARS */}



<div

className="
flex

gap-1

text-[#C89B5B]

"

>


{

[1,2,3,4,5].map((star)=>(


<Star

key={star}

size={17}

fill="currentColor"

/>


))


}



</div>








<p

className="
mt-6

text-[#6B5140]

leading-relaxed

"

>

"{review.text}"

</p>







<div

className="
mt-7

flex

items-center

gap-4

"

>



<div

className="
w-12

h-12

rounded-full

bg-[#4A2518]

text-white

flex

items-center

justify-center

font-black

"

>

{review.name.charAt(0)}

</div>






<div>


<h4

className="
font-black

text-[#4A2518]

"

>

{review.name}

</h4>



<p

className="
text-sm

text-[#8B6B52]

"

>

{review.place}

</p>


</div>



</div>







</motion.div>


))


}



</div>







</div>


</section>


)

}



export default CustomerReviews;