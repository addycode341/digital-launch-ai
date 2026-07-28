import {
useState,
useEffect
} from "react";


import {
useNavigate,
useParams
} from "react-router-dom";


import {
doc,
getDoc
} from "firebase/firestore";


import {
db,
auth
} from "../firebase";


import TemplateSelector from "../components/TemplateSelector";
import ImageUploader from "../components/ImageUploader";


import {
Sparkles,
Rocket
} from "lucide-react";


import {
saveWebsite,
updateWebsite
} from "../services/websiteService";





function Builder(){


const navigate = useNavigate();


const {id}=useParams();



const [step,setStep]=useState(1);


const [loading,setLoading]=useState(false);



const [selectedTemplate,setSelectedTemplate]=useState("");



const [uploadedImages,setUploadedImages]=useState([]);





const [formData,setFormData]=useState({


businessName:"",

category:"",

location:"",

description:"",

services:"",

phone:"",

whatsapp:""


});







// ================= LOAD EDIT WEBSITE =================



useEffect(()=>{


if(id){

loadWebsite();

}


},[id]);







const loadWebsite = async()=>{


try{


const user = auth.currentUser;


if(!user){

return;

}




const websiteRef = doc(

db,

"users",

user.uid,

"websites",

id

);




const snap = await getDoc(websiteRef);





if(snap.exists()){


const data = snap.data();


const websiteData = data.websiteData || {};





setFormData({


businessName:

websiteData.businessName || data.title || "",



category:

websiteData.category || websiteData.businessType || "",



location:

websiteData.location || "",



description:

websiteData.description || "",




services:

Array.isArray(websiteData.services)

?

websiteData.services.map(

item=>

item.title ||

item.name ||

item

).join(", ")

:

websiteData.services || "",




phone:

websiteData.phone || "",



whatsapp:

websiteData.whatsapp || ""


});






setSelectedTemplate(

websiteData.template || ""

);





setUploadedImages(

websiteData.uploadedImages || []

);





setStep(3);



}



else{


alert("Website not found");


}



}

catch(error){


console.log(

"Load Website Error",

error

);


}



};





const handleChange=(e)=>{


setFormData({

...formData,


[e.target.name]:e.target.value


});


};
// ================= CREATE / UPDATE WEBSITE =================


const generateWebsite = async()=>{


try{


setLoading(true);



const website={


...formData,


businessType:
formData.category,


template:selectedTemplate,


uploadedImages



};





let websiteId;




if(id){



await updateWebsite(

id,

website

);



websiteId=id;



alert(
"Website Updated Successfully 🚀"
);



}

else{



websiteId = await saveWebsite(

website

);



alert(
"Website Created Successfully 🚀"
);



}





localStorage.setItem(

"websiteId",

websiteId

);



localStorage.setItem(

"websiteData",

JSON.stringify(website)

);





navigate("/preview");




}

catch(error){


console.log(

"Save Error",

error

);


alert(

"Something went wrong"

);


}

finally{


setLoading(false);


}


};









return(


<div

className="
min-h-screen
bg-slate-950
text-white
p-6
flex
justify-center
"

>


<div

className="
max-w-4xl
w-full
bg-white/5
border
border-white/10
rounded-3xl
p-10
"

>






<div className="text-center">


<div

className="
w-16
h-16
mx-auto
rounded-2xl
bg-gradient-to-r
from-purple-600
to-blue-600
flex
items-center
justify-center
"

>

<Sparkles/>

</div>




<h1

className="
text-4xl
font-bold
mt-5
"

>


{

id

?

"Edit Your Website"

:

"Create Your Website"

}


</h1>



<p className="
text-gray-400
mt-3
">

Build your business website

</p>



</div>









{/* STEP 1 CATEGORY */}



{

step===1 &&



<div className="mt-10">


<h2 className="
text-2xl
font-bold
mb-6
">

Choose Business Category

</h2>





<div className="
grid
md:grid-cols-4
gap-4
">


{


[

"Bakery",
"Gym",
"Restaurant",
"Clinic",
"Real Estate",
"Printing",
"Salon",
"Mobile Store"

].map(item=>(



<button


key={item}


onClick={()=>{


setFormData({

...formData,

category:item

});


setStep(2);


}}


className="
p-5
rounded-2xl
bg-white/10
hover:bg-purple-600
transition
"

>


{item}


</button>


))


}



</div>


</div>


}









{/* STEP 2 TEMPLATE */}



{

step===2 &&



<div className="mt-10">


<h2 className="
text-2xl
font-bold
mb-6
">

Choose Template 🎨

</h2>




<TemplateSelector


category={formData.category}


onSelect={(template)=>{


setSelectedTemplate(template);


setStep(3);



}}


/>



</div>


}









{/* STEP 3 DETAILS */}



{

step===3 &&



<div

className="
mt-10
space-y-5
"

>


<input


name="businessName"


value={formData.businessName}


placeholder="Business Name"



onChange={handleChange}



className="
w-full
p-4
rounded-xl
bg-black/30
"


/>







<input


name="location"


value={formData.location}



placeholder="Location"



onChange={handleChange}



className="
w-full
p-4
rounded-xl
bg-black/30
"


/>







<textarea


name="description"


value={formData.description}



placeholder="About Business"



onChange={handleChange}



className="
w-full
p-4
rounded-xl
bg-black/30
h-32
"


/>







<textarea


name="services"


value={formData.services}



placeholder="Services (comma separated)"



onChange={handleChange}



className="
w-full
p-4
rounded-xl
bg-black/30
h-32
"


/>







<input


name="phone"


value={formData.phone}



placeholder="Phone Number"



onChange={handleChange}



className="
w-full
p-4
rounded-xl
bg-black/30
"


/>







<button


onClick={()=>setStep(4)}



className="
w-full
p-4
rounded-xl
bg-purple-600
"

>


Continue →

</button>




</div>


}
// ================= STEP 4 IMAGE UPLOAD =================


{

step===4 &&


<div className="
mt-10
">


<ImageUploader


onComplete={(images)=>{


setUploadedImages(images);


setStep(5);


}}


/>


</div>


}









// ================= STEP 5 LAUNCH =================



{

step===5 &&



<div

className="
text-center
mt-10
"

>



<Rocket

size={60}

className="
mx-auto
text-purple-400
"

/>






<h2

className="
text-3xl
font-bold
mt-5
"

>


Ready To Launch 🚀


</h2>






<p

className="
text-gray-400
mt-3
"

>


Your website is ready

</p>








<button


disabled={loading}


onClick={generateWebsite}



className="
mt-8
w-full
py-5
rounded-xl
bg-gradient-to-r
from-purple-600
to-blue-600
font-bold
hover:scale-105
transition
"



>



{

loading

?

"Saving Website..."

:


id

?

"Update Website 🚀"

:

"Create Website 🚀"



}



</button>







</div>



}




</div>


</div>


)


}



export default Builder;