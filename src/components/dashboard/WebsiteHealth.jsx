import React from "react";

import {
  CheckCircle,
  AlertCircle,
  Gauge,
  Smartphone,
  Search
} from "lucide-react";



const WebsiteHealth = ({website})=>{


const checks=[


{
title:"SEO Title",
status:true,
message:"Title tag available"
},


{
title:"Meta Description",
status:true,
message:"Description added"
},



{
title:"Mobile Friendly",
status:true,
message:"Responsive design"
},



{
title:"Page Speed",
status:true,
message:"Good performance"
},



{
title:"Images",
status:false,
message:"Some images need optimization"
}



];




const score = checks.filter(
item=>item.status
).length * 20;




return(


<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
">


<div className="
flex
justify-between
items-center
">




<div>


<h2 className="
text-2xl
font-bold
">

Website Health

</h2>


<p className="
text-gray-400
mt-2
">

{website?.title || "Website"}

</p>


</div>




<div className="
text-right
">


<h1 className="
text-4xl
font-bold
text-green-400
">

{score}%

</h1>


<p className="
text-gray-400
">

Health Score

</p>



</div>




</div>









<div className="
mt-8
space-y-4
">



{

checks.map((item,index)=>(


<div

key={index}

className="
flex
items-center
justify-between
bg-black/20
rounded-xl
p-4
"

>


<div className="
flex
items-center
gap-3
">


{


item.status ?

<CheckCircle
className="text-green-400"
/>

:

<AlertCircle
className="text-yellow-400"
/>


}




<div>


<h3 className="font-semibold">

{item.title}

</h3>



<p className="
text-sm
text-gray-400
">

{item.message}

</p>


</div>


</div>






{

item.title==="Mobile Friendly" &&

<Smartphone size={20}/>

}



{

item.title==="SEO Title" &&

<Search size={20}/>

}



{

item.title==="Page Speed" &&

<Gauge size={20}/>

}



</div>



))


}



</div>




</div>


)


}



export default WebsiteHealth;