import {
useEffect,
useState
} from "react";


import {
useParams,
useNavigate
} from "react-router-dom";


import {
collection,
getDocs,
doc,
getDoc,
updateDoc
} from "firebase/firestore";


import {
db
} from "../../firebase";


import {
Monitor,
Smartphone,
ArrowLeft,
Edit,
Rocket
} from "lucide-react";



import Hero from "../../components/website/Hero";
import About from "../../components/website/About";
import Gallery from "../../components/website/Gallery";
import Features from "../../components/website/Features";
import Services from "../../components/website/Services";
import Pricing from "../../components/website/Pricing";
import Testimonials from "../../components/website/Testimonials";
import FAQ from "../../components/website/FAQ";
import Contact from "../../components/website/Contact";
import LeadForm from "../../components/website/LeadForm";
import Footer from "../../components/website/Footer";





const AdminPreview =()=>{


const {id}=useParams();

const navigate=useNavigate();



const [website,setWebsite]=useState(null);

const [loading,setLoading]=useState(true);

const [mode,setMode]=useState("desktop");

const [updating,setUpdating]=useState(false);







useEffect(()=>{

fetchWebsite();

},[]);









const fetchWebsite=async()=>{


try{


const usersSnap = await getDocs(

collection(
db,
"users"
)

);



let found=null;



for(const user of usersSnap.docs){



const ref = doc(

db,

"users",

user.id,

"websites",

id

);



const snap = await getDoc(ref);





if(snap.exists()){


const data=snap.data();


const websiteData =
data.websiteData || {};




found={



...websiteData,



title:

data.title ||

websiteData.title ||

"Untitled Website",




template:

typeof websiteData.template==="object"

?

websiteData.template?.title || "Business"

:

websiteData.template || "Business",




status:

data.status || "draft",




ownerId:user.id,


websiteId:id



};



break;


}




}



setWebsite(found);



}

catch(error){

console.log(
"Preview Error",
error
);

}

finally{

setLoading(false);

}



};









const changeStatus=async()=>{


try{


setUpdating(true);



const ref = doc(

db,

"users",

website.ownerId,

"websites",

website.websiteId

);





const newStatus =

website.status==="published"

?

"draft"

:

"published";





await updateDoc(ref,{

status:newStatus

});





setWebsite({

...website,

status:newStatus

});




}

catch(error){

console.log(error);

}

finally{

setUpdating(false);

}



};









if(loading){


return(

<div className="
min-h-screen
bg-[#050816]
text-white
flex
items-center
justify-center
text-xl
">

Loading Preview 🚀

</div>

)

}









if(!website){


return(

<div className="
min-h-screen
bg-[#050816]
text-white
flex
items-center
justify-center
text-xl
">

Website Not Found ❌

</div>

)

}






return(


<div className="
min-h-screen
bg-white
">



{/* TOOLBAR */}


<div className="
sticky
top-0
z-50
bg-[#050816]
text-white
px-4
lg:px-6
py-4
flex
flex-col
lg:flex-row
gap-4
justify-between
items-center
border-b
border-white/10
">





<div>


<h1 className="
font-bold
text-lg
lg:text-xl
">

🚀 DigitalLaunch AI Preview

</h1>



<div className="
flex
items-center
gap-3
mt-2
">


<p className="
text-gray-400
text-sm
">

{website.title}

</p>



<span

className={

`

text-xs
px-3
py-1
rounded-full


${

website.status==="published"

?

"bg-green-500/20 text-green-400"

:

"bg-yellow-500/20 text-yellow-400"

}

`

}

>

{website.status}

</span>



</div>


</div>





<div className="
flex
gap-2
flex-wrap
justify-center
">



<button

onClick={()=>setMode("desktop")}

className={`

p-3
rounded-xl

${

mode==="desktop"

?

"bg-purple-600"

:

"bg-white/10"

}

`}

>


<Monitor size={20}/>


</button>





<button

onClick={()=>setMode("mobile")}

className={`

p-3
rounded-xl

${

mode==="mobile"

?

"bg-purple-600"

:

"bg-white/10"

}

`}

>


<Smartphone size={20}/>


</button>





<button

onClick={changeStatus}

disabled={updating}

className="
flex
items-center
gap-2
bg-green-600
px-4
py-3
rounded-xl
text-sm
"

>


<Rocket size={18}/>


{

website.status==="published"

?

"Unpublish"

:

"Publish"

}



</button>





<button

onClick={()=>navigate(`/admin/edit/${id}`)}

className="
flex
items-center
gap-2
bg-blue-600
px-4
py-3
rounded-xl
text-sm
"

>


<Edit size={18}/>

Edit


</button>





<button

onClick={()=>navigate(-1)}

className="
flex
items-center
gap-2
bg-white/10
px-4
py-3
rounded-xl
text-sm
"

>


<ArrowLeft size={18}/>

Back


</button>




</div>




</div>
id="admin-preview-part2"
{/* WEBSITE PREVIEW */}


<div

className={`

mx-auto

transition-all

duration-500


${
mode==="mobile"

?

"max-w-[390px] rounded-3xl shadow-2xl overflow-hidden border"

:

"w-full"

}

`}

>



<Hero website={website}/>


<About website={website}/>


<Gallery website={website}/>


<Features website={website}/>


<Services website={website}/>


<Pricing website={website}/>


<Testimonials website={website}/>


<FAQ website={website}/>


<Contact website={website}/>





<LeadForm

ownerId={website.ownerId}

websiteId={website.websiteId}

/>





<Footer website={website}/>



</div>





</div>


)

}



export default AdminPreview;