import { publishWebsite } from "../services/websiteService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import TemplateRenderer from "../Template/TemplateRenderer";    

function Preview(){


const [websiteData,setWebsiteData] = useState(null);

const [device,setDevice] = useState("desktop");

const [publishing,setPublishing] = useState(false);





useEffect(()=>{


const data = JSON.parse(

localStorage.getItem("websiteData")

);


setWebsiteData(data);


},[]);






const handlePublish = async()=>{


try{


setPublishing(true);



const data = JSON.parse(

localStorage.getItem("websiteData")

);



const slug = await publishWebsite(data);



alert(

"Website Published 🚀\n\n/site/" + slug

);



}

catch(error){


console.log(error);


alert("Publish failed");


}

finally{


setPublishing(false);


}


};







if(!websiteData){


return (

<div

className="
min-h-screen
bg-slate-950
text-white
flex
items-center
justify-center
text-3xl
"

>

No Website Generated 🤖

</div>

)


}







return(


<div

className="
min-h-screen
bg-[#020617]
text-white
p-4
md:p-8
"

>



{/* HEADER */}



<div

className="
bg-white/5
border
border-white/10
backdrop-blur-xl
rounded-3xl
p-5
flex
flex-col
md:flex-row
justify-between
gap-5
items-center
mb-8
"

>



<div>

<h1

className="
text-3xl
font-bold
"

>

🤖 DigitalLaunch AI

</h1>


<p

className="
text-gray-400
mt-2
"

>

AI Website Preview

</p>


</div>







<div

className="
flex
gap-3
"

>



<button

onClick={()=>setDevice("desktop")}

className={`
px-5
py-2
rounded-xl

${
device==="desktop"
?
"bg-blue-600"
:
"bg-white/10"
}

`}

>

💻 Desktop

</button>






<button

onClick={()=>setDevice("mobile")}

className={`
px-5
py-2
rounded-xl

${
device==="mobile"
?
"bg-blue-600"
:
"bg-white/10"
}

`}

>

📱 Mobile

</button>



</div>


</div>









<div

className="
grid
lg:grid-cols-4
gap-6
"

>






{/* AI PANEL */}



<div

className="
bg-white/5
border
border-white/10
rounded-3xl
p-5
h-fit
"

>


<h2

className="
text-xl
font-bold
"

>

✨ AI Report

</h2>




<div

className="
space-y-3
mt-5
"

>


{

[
"Business Analyzed",
"Design Generated",
"Content Created",
"SEO Ready",
"Mobile Friendly"

].map((item,index)=>(


<div

key={index}

className="
bg-black/30
p-3
rounded-xl
"

>

✅ {item}

</div>


))


}



</div>






<Link to="/builder">


<button

className="
mt-6
w-full
py-3
rounded-xl
bg-white/10
"

>

Edit

</button>


</Link>






<button


onClick={handlePublish}


disabled={publishing}


className="
mt-3
w-full
py-3
rounded-xl
bg-yellow-500
text-black
font-semibold
"

>


{

publishing

?

"Publishing..."

:

"Publish 🚀"

}


</button>



</div>









{/* WEBSITE PREVIEW */}



<div

className={`

lg:col-span-3

bg-white

rounded-3xl

overflow-hidden

shadow-2xl

text-black

${
device==="mobile"
?
"max-w-sm mx-auto w-full"
:
"w-full"
}

`}

>





{/* Browser bar */}


<div

className="
bg-gray-200
px-5
py-3
flex
gap-2
"

>

🔴 🟡 🟢


<p

className="
ml-3
truncate
"

>

{websiteData.title}

</p>


</div>








<motion.div


initial={{

opacity:0,
scale:.95

}}


animate={{

opacity:1,
scale:1

}}


>


<TemplateRenderer

websiteData={websiteData}

/>



</motion.div>





</div>







</div>






</div>


)


}



export default Preview;