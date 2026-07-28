import { publishWebsite } from "../services/websiteService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Rocket, Pencil, RefreshCcw } from "lucide-react";

import TemplateRenderer from "../Template/TemplateRenderer";



function Preview(){


const [websiteData,setWebsiteData]=useState(null);
const [refresh,setRefresh]=useState(0);
const [publishing,setPublishing]=useState(false);



useEffect(()=>{


const data =
JSON.parse(
localStorage.getItem("websiteData")
);


setWebsiteData(data);


},[]);







const handlePublish=async()=>{


try{


setPublishing(true);



const data =
JSON.parse(
localStorage.getItem("websiteData")
);



const slug =
await publishWebsite(data);



alert(

`🎉 Website Published

preview.digitallaunch.ai/${slug}`

);



}

catch(err){

console.log(err);

alert("Publish Failed");

}


finally{

setPublishing(false);

}


};








if(!websiteData){


return(

<div

className="
min-h-screen
bg-black
text-white
flex
items-center
justify-center
"

>

<h1 className="
text-2xl
font-bold
">

No Website Generated

</h1>


</div>

)

}







const liveUrl =

`${websiteData.title
?.toLowerCase()
.replace(/\s+/g,"")
}.digitallaunch.ai`;









return(


<div

className="
min-h-screen
bg-slate-950
text-white
overflow-x-hidden
"

>





{/* HEADER */}



<header

className="
sticky
top-0
z-50
bg-black/90
backdrop-blur-xl
border-b
border-white/10
"

>


<div

className="
max-w-7xl
mx-auto
px-5
py-4
flex
items-center
justify-between
gap-4
"

>



<div>


<h1

className="
text-xl
sm:text-2xl
font-black
"

>

🚀 DigitalLaunch AI

</h1>



<p

className="
text-xs
text-gray-400
"

>

Website Preview

</p>



</div>









<div

className="
flex
items-center
gap-3
"

>




<button

onClick={()=>setRefresh(refresh+1)}

className="
p-3
rounded-xl
bg-white/10
hover:bg-white/20
"

>

<RefreshCcw size={18}/>

</button>







<Link to="/builder">


<button

className="
px-4
py-3
rounded-xl
bg-white/10
flex
items-center
gap-2
"

>

<Pencil size={17}/>

Edit

</button>


</Link>









<button

onClick={handlePublish}

className="
px-5
py-3
rounded-xl
bg-gradient-to-r
from-yellow-400
to-orange-500
text-black
font-bold
flex
items-center
gap-2
"

>


<Rocket size={18}/>


{

publishing

?

"Publishing..."

:

"Publish"

}


</button>






</div>



</div>


</header>









{/* WEBSITE URL */}



<div

className="
max-w-7xl
mx-auto
px-5
py-4
"

>


<div

className="
bg-white
text-gray-600
rounded-full
px-5
py-3
text-sm
truncate
text-center
"

>

🌐 {liveUrl}

</div>


</div>









{/* DESKTOP PREVIEW */}



<div

className="
max-w-[1400px]
mx-auto
px-5
pb-10
"

>


<div

className="
bg-white
rounded-3xl
overflow-hidden
shadow-2xl
"

>



{/* BROWSER TOP */}



<div

className="
h-10
bg-gray-200
flex
items-center
gap-2
px-5
"

>


<span className="
w-3
h-3
rounded-full
bg-red-500
"/>


<span className="
w-3
h-3
rounded-full
bg-yellow-400
"/>


<span className="
w-3
h-3
rounded-full
bg-green-500
"/>



</div>










<div

key={refresh}

className="
w-full
overflow-x-hidden
"

>



<TemplateRenderer

websiteData={websiteData}

preview={true}

/>



</div>






</div>


</div>








</div>


)

}



export default Preview;