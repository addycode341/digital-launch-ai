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
Rocket,
CheckCircle
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

collection(db,"users")

);



let found=null;



for(const user of usersSnap.docs){



const websiteRef = doc(

db,

"users",

user.id,

"websites",

id

);



const websiteSnap = await getDoc(
websiteRef
);





if(websiteSnap.exists()){


const data=websiteSnap.data();



found={

...data.websiteData,

title:data.title || data.websiteData?.title,

status:data.status || "draft",

ownerId:user.id,

websiteId:id


};



break;


}



}



setWebsite(found);



}

catch(error){

console.log(error);

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



await updateDoc(ref,{

status:

website.status==="published"

?

"draft"

:

"published"

});





setWebsite({

...website,

status:

website.status==="published"

?

"draft"

:

"published"

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






{/* ADMIN TOOLBAR */}



<div className="
sticky
top-0
z-50
bg-[#050816]
text-white
px-6
py-4
flex
justify-between
items-center
border-b
border-white/10
">





<div>


<h1 className="
font-bold
text-xl
">

🚀 DigitalLaunch AI Preview

</h1>


<div className="
flex
items-center
gap-3
mt-1
">


<p className="
text-gray-400
text-sm
">

{website.title}

</p>




<span className={

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

}>


{website.status}


</span>



</div>



</div>







<div className="
flex
gap-3
items-center
">





<button

onClick={()=>setMode("desktop")}

className={

`
p-3
rounded-xl

${
mode==="desktop"

?

"bg-purple-600"

:

"bg-white/10"

}

`

}

>


<Monitor size={20}/>


</button>







<button

onClick={()=>setMode("mobile")}

className={

`
p-3
rounded-xl

${
mode==="mobile"

?

"bg-purple-600"

:

"bg-white/10"

}

`

}

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
px-5
py-3
rounded-xl
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
px-5
py-3
rounded-xl
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
px-5
py-3
rounded-xl
"


>


<ArrowLeft size={18}/>

Back


</button>




</div>



</div>









{/* WEBSITE PREVIEW */}



<div

className={

`

mx-auto
transition-all
duration-500

${
mode==="mobile"

?

"max-w-sm"

:

"max-w-full"

}

`

}

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