import {motion} from "framer-motion";

import {
Crown,
Award,
HeartHandshake
} from "lucide-react";





const highlights=[


{
icon:<Crown size={24}/>,
title:"Luxury Hospitality",
text:"Personalized services crafted for unforgettable experiences."
},


{
icon:<Award size={24}/>,
title:"Award Winning Service",
text:"Recognized for excellence in guest satisfaction."
},


{
icon:<HeartHandshake size={24}/>,
title:"Guest Experience",
text:"Every detail designed around your comfort."
}


];







function About(){


return(


<section

id="about"

className="
py-28
px-5
sm:px-8
bg-black
"

>


<div

className="
max-w-7xl
mx-auto
grid
lg:grid-cols-2
gap-16
items-center
"

>





<motion.div


initial={{
opacity:0,
x:-50
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}

className="
relative
"


>


<img

src="
https://images.unsplash.com/photo-1564501049412-61c2a3083791
"

alt="Luxury Hotel"

className="
rounded-[45px]
w-full
h-[560px]
object-cover
"

/>





<div

className="
absolute
bottom-8
left-8
bg-black/70
backdrop-blur-xl
border
border-white/20
rounded-3xl
px-8
py-6
"

>


<p className="
text-yellow-400
text-4xl
font-black
">

15+

</p>


<p className="
text-gray-300
">

Years Of Excellence

</p>


</div>





</motion.div>









<motion.div


initial={{
opacity:0,
x:50
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}

>


<p className="
text-yellow-400
tracking-[5px]
font-semibold
">

ABOUT OUR HOTEL

</p>





<h2 className="
text-5xl
sm:text-6xl
font-black
leading-tight
mt-5
">

A New Standard

<span className="
block
text-yellow-400
">

Of Luxury Living

</span>

</h2>







<p className="
text-gray-400
mt-6
text-lg
leading-relaxed
">

Experience elegant rooms, exceptional dining and personalized hospitality.
Our mission is to create moments that guests remember forever.

</p>








<div className="
mt-10
space-y-6
">


{

highlights.map((item,index)=>(



<div

key={index}

className="
flex
gap-5
items-center
"

>


<div className="
w-14
h-14
rounded-2xl
bg-yellow-400/10
text-yellow-400
flex
items-center
justify-center
">

{item.icon}

</div>




<div>


<h3 className="
font-bold
text-lg
">

{item.title}

</h3>


<p className="
text-gray-400
text-sm
">

{item.text}

</p>



</div>


</div>



))


}



</div>



</motion.div>





</div>


</section>


)

}


export default About;