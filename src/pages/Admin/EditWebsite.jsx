import React,{
useEffect,
useState
} from "react";


import {
useParams,
useNavigate
} from "react-router-dom";


import {
doc,
getDoc,
updateDoc,
collection,
getDocs
} from "firebase/firestore";


import {
db
} from "../../firebase";


import {
Save,
ArrowLeft,
Plus,
Trash2
} from "lucide-react";





const EditWebsite=()=>{


const {id}=useParams();

const navigate=useNavigate();



const [ownerId,setOwnerId]=useState("");

const [loading,setLoading]=useState(true);


const [saving,setSaving]=useState(false);



const [data,setData]=useState({


title:"",


hero:{


heading:"",

description:"",

button:""

},



about:{


heading:"",

text:""

},



services:[],



pricing:[],



contact:{


phone:"",

address:"",

whatsapp:""

}


});









useEffect(()=>{


findWebsite();


},[]);








const findWebsite=async()=>{


try{


const usersSnap=await getDocs(

collection(
db,
"users"
)

);



for(const user of usersSnap.docs){



const ref=doc(

db,

"users",

user.id,

"websites",

id

);



const snap=await getDoc(ref);



if(snap.exists()){


const website=snap.data();



setOwnerId(user.id);



setData({


title:
website.title || "",


hero:
website.websiteData?.hero || {},


about:
website.websiteData?.about || {},


services:
website.websiteData?.services || [],


pricing:
website.websiteData?.pricing || [],


contact:
website.websiteData?.contact || {}


});



break;


}



}


}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}



};









const updateField=(section,key,value)=>{


setData({

...data,


[section]:{

...data[section],

[key]:value

}


});


};









const addService=()=>{


setData({

...data,


services:[

...data.services,

{

title:"",

description:""

}

]


});


};








const removeService=(index)=>{


const list=[...data.services];


list.splice(index,1);


setData({

...data,

services:list

});


};









const saveWebsite=async()=>{


try{


setSaving(true);



const ref=doc(

db,

"users",

ownerId,

"websites",

id

);



await updateDoc(ref,{


title:data.title,


websiteData:data


});



alert(
"Website Updated Successfully 🚀"
);



}

catch(error){

console.log(error);

}

finally{

setSaving(false);

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
">

Loading Editor...

</div>

)

}









return(


<div className="
min-h-screen
bg-[#050816]
text-white
p-8
space-y-8
">





{/* HEADER */}



<div className="
flex
justify-between
items-center
">


<div>

<h1 className="
text-4xl
font-bold
">

Website Editor

</h1>


<p className="
text-gray-400
mt-2
">

Edit customer website

</p>


</div>






<button

onClick={()=>navigate(-1)}

className="
flex
gap-2
items-center
bg-white/10
px-5
py-3
rounded-xl
">

<ArrowLeft size={18}/>

Back

</button>



</div>









{/* HERO */}



<div className="
bg-white/[0.06]
border
border-white/10
rounded-3xl
p-8
space-y-5
">


<h2 className="
text-2xl
font-bold
">

Hero Section

</h2>



<input

value={data.hero.heading || ""}

onChange={e=>

updateField(
"hero",
"heading",
e.target.value
)

}

placeholder="Hero Heading"

className="
w-full
bg-black/40
p-3
rounded-xl
"

/>





<textarea

value={data.hero.description || ""}

onChange={e=>

updateField(
"hero",
"description",
e.target.value
)

}

placeholder="Description"

className="
w-full
bg-black/40
p-3
rounded-xl
"

/>





<input

value={data.hero.button || ""}

onChange={e=>

updateField(
"hero",
"button",
e.target.value
)

}

placeholder="Button Text"

className="
w-full
bg-black/40
p-3
rounded-xl
"

/>


</div>









{/* ABOUT */}



<div className="
bg-white/[0.06]
border
border-white/10
rounded-3xl
p-8
space-y-5
">


<h2 className="
text-2xl
font-bold
">

About Section

</h2>



<input

value={data.about.heading || ""}

onChange={e=>

updateField(
"about",
"heading",
e.target.value
)

}

placeholder="About Heading"

className="
w-full
bg-black/40
p-3
rounded-xl
"

/>





<textarea

value={data.about.text || ""}

onChange={e=>

updateField(
"about",
"text",
e.target.value
)

}

placeholder="About Text"

className="
w-full
bg-black/40
p-3
rounded-xl
"

/>



</div>









{/* SERVICES */}



<div className="
bg-white/[0.06]
border
border-white/10
rounded-3xl
p-8
">


<div className="
flex
justify-between
mb-5
">


<h2 className="
text-2xl
font-bold
">

Services

</h2>



<button

onClick={addService}

className="
bg-purple-600
px-4
py-2
rounded-xl
flex
gap-2
">

<Plus size={18}/>

Add

</button>



</div>





{

data.services.map((service,index)=>(


<div

key={index}

className="
bg-black/30
rounded-xl
p-5
space-y-3
mb-4
">


<input

value={service.title}

onChange={e=>{

let arr=[...data.services];

arr[index].title=e.target.value;

setData({

...data,

services:arr

});


}}

placeholder="Service Name"

className="
w-full
bg-black/40
p-3
rounded-xl
"

/>





<input

value={service.description}

onChange={e=>{

let arr=[...data.services];

arr[index].description=e.target.value;

setData({

...data,

services:arr

});


}}

placeholder="Description"

className="
w-full
bg-black/40
p-3
rounded-xl
"

/>






<button

onClick={()=>removeService(index)}

className="
text-red-400
flex
gap-2
">

<Trash2 size={18}/>

Remove

</button>



</div>



))


}



</div>









{/* CONTACT */}



<div className="
bg-white/[0.06]
border
border-white/10
rounded-3xl
p-8
space-y-4
">


<h2 className="
text-2xl
font-bold
">

Contact

</h2>



<input

value={data.contact.phone || ""}

onChange={e=>

updateField(
"contact",
"phone",
e.target.value
)

}

placeholder="Phone"

className="
w-full
bg-black/40
p-3
rounded-xl
"

/>




<input

value={data.contact.address || ""}

onChange={e=>

updateField(
"contact",
"address",
e.target.value
)

}

placeholder="Address"

className="
w-full
bg-black/40
p-3
rounded-xl
"

/>


</div>








{/* SAVE */}



<button

onClick={saveWebsite}

disabled={saving}

className="
w-full
bg-gradient-to-r
from-purple-600
to-blue-600
py-4
rounded-2xl
font-bold
text-lg
flex
justify-center
items-center
gap-3
">


<Save size={20}/>


{

saving
?

"Saving..."

:

"Save Changes"

}


</button>







</div>


)

}



export default EditWebsite;