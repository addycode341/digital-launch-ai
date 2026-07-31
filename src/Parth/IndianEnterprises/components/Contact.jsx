import { useState } from "react";
import { motion } from "framer-motion";

import {
MapPin,
Phone,
Mail,
MessageCircle,
Send
} from "lucide-react";


function Contact(){


const [form,setForm]=useState({

name:"",
phone:"",
email:"",
message:""

});



const info=[

{
icon:<MapPin/>,
title:"Address",
desc:"Your Business Address"
},

{
icon:<Phone/>,
title:"Phone",
desc:"+91 XXXXX XXXXX"
},

{
icon:<Mail/>,
title:"Email",
desc:"info@indianenterprises.com"
}

];





const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};






const handleSubmit=(e)=>{

e.preventDefault();



const whatsappNumber="919999999999";



const text=

`
New Website Enquiry

Name: ${form.name}

Phone: ${form.phone}

Email: ${form.email}

Requirement:
${form.message}

`;



const url=
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;



window.open(url,"_blank");

};






return(


<section

id="contact"

className="
relative
bg-black
text-white
py-24
overflow-hidden
"

>


<div

className="
absolute
right-0
top-20
w-96
h-96
bg-yellow-500/10
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

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
text-center
mb-16
"

>


<p className="
text-yellow-500
uppercase
tracking-widest
font-semibold
">

Contact Us

</p>



<h2 className="
text-3xl
md:text-5xl
font-bold
mt-3
">

Let's Discuss Your

<span className="
text-yellow-500
">

 Requirements

</span>

</h2>



<p className="
text-gray-400
mt-5
max-w-2xl
mx-auto
">

Get premium printing, stationery and leather solutions
for your business needs.

</p>


</motion.div>







<div className="
grid
md:grid-cols-2
gap-10
">






{/* LEFT INFO */}



<motion.div

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
space-y-5
"

>


{
info.map((item,index)=>(


<div

key={index}

className="
group
bg-white/5
border
border-white/10
rounded-3xl
p-6
flex
gap-5
hover:border-yellow-500/50
transition
"

>


<div

className="
w-12
h-12
rounded-xl
bg-yellow-500
text-black
flex
items-center
justify-center
group-hover:scale-110
transition
"

>

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
mt-1
">

{item.desc}

</p>


</div>


</div>


))

}





<a

href="https://wa.me/919999999999"

target="_blank"

rel="noreferrer"

className="
inline-flex
items-center
gap-3
bg-yellow-500
text-black
px-7
py-3
rounded-full
font-bold
hover:scale-105
transition
"

>


<MessageCircle/>

Chat On WhatsApp


</a>




</motion.div>










{/* FORM */}





<motion.form


onSubmit={handleSubmit}


initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
"

>



<h3 className="
text-2xl
font-bold
mb-6
">

Send Enquiry

</h3>






<input

name="name"

value={form.name}

onChange={handleChange}

required

placeholder="Your Name"

className="
w-full
mb-4
bg-black
border
border-white/10
rounded-xl
px-5
py-3
outline-none
focus:border-yellow-500
"

/>





<input

name="phone"

value={form.phone}

onChange={handleChange}

required

placeholder="Phone Number"

className="
w-full
mb-4
bg-black
border
border-white/10
rounded-xl
px-5
py-3
outline-none
focus:border-yellow-500
"

/>






<input

name="email"

value={form.email}

onChange={handleChange}

placeholder="Email Address"

className="
w-full
mb-4
bg-black
border
border-white/10
rounded-xl
px-5
py-3
outline-none
focus:border-yellow-500
"

/>







<textarea


name="message"

value={form.message}

onChange={handleChange}

required

placeholder="Your Requirement"

rows="5"

className="
w-full
mb-5
bg-black
border
border-white/10
rounded-xl
px-5
py-3
outline-none
focus:border-yellow-500
resize-none
"

/>







<button

type="submit"

className="
w-full
bg-yellow-500
text-black
py-3
rounded-xl
font-bold
flex
justify-center
items-center
gap-2
hover:scale-105
transition
"

>


<Send size={18}/>

Submit Enquiry


</button>





</motion.form>





</div>


</div>


</section>


)

}


export default Contact;