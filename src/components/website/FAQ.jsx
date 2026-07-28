import { useState } from "react";


function FAQ({ website }) {


const [open,setOpen] = useState(null);



return (

<section className="py-24 bg-slate-100">


<div className="max-w-5xl mx-auto px-6">


<h2 className="text-5xl font-bold text-center text-slate-900">

Frequently Asked Questions

</h2>



<div className="mt-12 space-y-5">


{

website.faq?.map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-2xl
shadow
overflow-hidden
"

>


<button

onClick={()=>setOpen(
open===index ? null : index
)}

className="
w-full
p-6
text-left
flex
justify-between
items-center
font-bold
text-xl
"

>


<span>
{item.question}
</span>


<span>

{open===index ? "-" : "+"}

</span>


</button>




{

open===index && (

<div className="
px-6
pb-6
text-gray-600
leading-7
">

{item.answer}

</div>

)

}



</div>



))


}



</div>


</div>


</section>

);


}


export default FAQ;