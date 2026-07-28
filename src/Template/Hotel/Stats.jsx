import {motion} from "framer-motion";


const stats=[

{
number:"120+",
title:"Luxury Rooms"
},

{
number:"50K+",
title:"Happy Guests"
},

{
number:"15+",
title:"Years Experience"
},

{
number:"4.9",
title:"Google Rating"
}

];



function Stats(){


return(

<section className="
py-20
bg-black
px-5
">


<div className="
max-w-7xl
mx-auto
grid
grid-cols-2
lg:grid-cols-4
gap-6
">


{

stats.map((item,index)=>(


<motion.div


key={index}


whileHover={{
y:-10
}}



className="
rounded-3xl
p-8
bg-white/[0.06]
border
border-white/10
text-center
"

>


<h2 className="
text-4xl
font-black
text-yellow-400
">

{item.number}

</h2>


<p className="
text-gray-400
mt-3
">

{item.title}

</p>


</motion.div>


))


}


</div>


</section>

)

}


export default Stats;