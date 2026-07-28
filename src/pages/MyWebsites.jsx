import React, {
useEffect,
useState
} from "react";


import {
collection,
getDocs
} from "firebase/firestore";


import {
db,
auth
} from "../firebase";


import {
useNavigate
} from "react-router-dom";


import {
Globe,
Eye,
Edit,
CheckCircle,
Plus
} from "lucide-react";





function MyWebsites(){


const navigate = useNavigate();


const [websites,setWebsites]=useState([]);

const [loading,setLoading]=useState(true);






useEffect(()=>{

loadWebsites();

},[]);







const loadWebsites=async()=>{


try{


const user = auth.currentUser;


if(!user){

navigate("/login");

return;

}




const snap = await getDocs(

collection(

db,

"users",

user.uid,

"websites"

)

);






const data=[];



snap.forEach(doc=>{


const item = doc.data();



data.push({

id:doc.id,

...item,

title:
item.title ||
item.websiteData?.businessName ||
"Untitled Website",


businessType:
item.businessType ||
item.websiteData?.category ||
"Business"


});


});




setWebsites(data);



}

catch(error){


console.log(
"My Websites Error",
error
);


}

finally{


setLoading(false);


}



};









if(loading){


return(

<div

className="
min-h-screen
bg-slate-950
text-white
flex
items-center
justify-center
text-xl
"

>

Loading Websites...

</div>

)

}










return(


<div

className="
min-h-screen
bg-gradient-to-br
from-slate-950
via-[#111827]
to-slate-950

text-white

p-8
"

>







{/* HEADER */}



<div

className="
flex
justify-between
items-center
mb-10
"

>


<div>


<h1

className="
text-4xl
font-bold
"

>

My Websites 🚀

</h1>



<p

className="
text-gray-400
mt-3
"

>

Manage and update your business websites

</p>


</div>







<button


onClick={()=>navigate("/builder")}


className="
flex
items-center
gap-2

px-5
py-3

rounded-xl

bg-gradient-to-r
from-purple-600
to-blue-600

font-semibold
"


>


<Plus size={18}/>


Create Website


</button>



</div>













<div

className="
grid
lg:grid-cols-3
md:grid-cols-2
gap-6
"

>






{

websites.map(site=>(




<div


key={site.id}


className="
bg-white/5

border
border-white/10

rounded-3xl

p-6

hover:border-purple-500/50

transition

"


>





<div

className="
w-16
h-16

rounded-2xl

bg-purple-500/20

flex
items-center
justify-center

text-purple-400

"

>

<Globe size={35}/>

</div>







<h2

className="
text-xl
font-bold
mt-5
"

>


{site.title}


</h2>







<p

className="
text-gray-400
mt-2
"

>

{site.businessType}

</p>









<div

className="
mt-5
"

>


{

site.status==="published"


?


<div

className="
flex
items-center
gap-2
text-green-400
"

>


<CheckCircle size={18}/>

Published


</div>


:


<div

className="
text-yellow-400
"

>

● Draft

</div>


}



</div>









<div

className="
grid
grid-cols-2
gap-3

mt-6

"

>





<button


onClick={()=>{


if(site.status==="published"){


navigate(
`/website/${site.slug}`
);


}

else{


alert(
"Please publish website first 🚀"
);


}


}}


className="
flex
items-center
justify-center
gap-2

py-3

rounded-xl

bg-blue-600

"


>


<Eye size={18}/>


View


</button>








<button


onClick={()=>navigate(
`/builder/${site.id}`
)}


className="
flex
items-center
justify-center
gap-2

py-3

rounded-xl

bg-purple-600

"


>


<Edit size={18}/>


Edit


</button>






</div>







</div>




))


}








</div>









{

websites.length===0 &&


<div

className="
bg-white/5

border
border-white/10

rounded-3xl

p-10

text-center

"

>


<Globe

size={50}

className="
mx-auto
text-purple-400
"

/>




<h2

className="
text-2xl
font-bold
mt-5
"

>

No Website Found

</h2>




<p

className="
text-gray-400
mt-3
"

>

Create your first business website

</p>







<button


onClick={()=>navigate("/builder")}


className="
mt-6

px-6
py-3

rounded-xl

bg-purple-600

"


>


Create Website 🚀


</button>





</div>


}





</div>


)


}



export default MyWebsites;