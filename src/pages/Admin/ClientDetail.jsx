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
collection,
getDocs,
addDoc,
updateDoc,
serverTimestamp
} from "firebase/firestore";


import {
db
} from "../../firebase";


import {
User,
Mail,
Globe,
Plus,
CheckCircle,
Eye,
BarChart3,
Save
} from "lucide-react";





function ClientDetail(){


const {id}=useParams();

const navigate=useNavigate();



const [client,setClient]=useState(null);

const [websites,setWebsites]=useState([]);

const [loading,setLoading]=useState(true);

const [showForm,setShowForm]=useState(false);




const [plan,setPlan]=useState("");



const [website,setWebsite]=useState({

title:"",
template:"Gym",
status:"draft",
plan:"Starter"

});







useEffect(()=>{

loadClient();

},[]);







const loadClient=async()=>{


try{


const userSnap=await getDoc(

doc(
db,
"users",
id
)

);



if(userSnap.exists()){


const data=userSnap.data();


setClient(data);

setPlan(data.plan || "Starter");


}







const webSnap=await getDocs(

collection(
db,
"users",
id,
"websites"
)

);



let list=[];



webSnap.forEach(item=>{


list.push({

id:item.id,

...item.data()

});


});


setWebsites(list);



}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


};









const updatePlan=async()=>{


await updateDoc(

doc(
db,
"users",
id
),

{

plan

}

);


alert(
"Plan Updated 🚀"
);


};









const assignWebsite=async()=>{


if(!website.title){

alert(
"Enter website name"
);

return;

}



await addDoc(

collection(
db,
"users",
id,
"websites"
),

{

...website,

visitors:0,

leads:0,

createdAt:serverTimestamp()

}


);



alert(
"Website Added"
);


setShowForm(false);


loadClient();


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

Loading...

</div>

)

}






if(!client){

return(

<div className="text-white">

Client Not Found

</div>

)

}









return(


<div className="
text-white
space-y-10
">







<h1 className="
text-4xl
font-bold
">

Client Details 👤

</h1>









<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
">



<div className="
flex
gap-5
items-center
">


<div className="
w-16
h-16
rounded-2xl
bg-purple-600
flex
items-center
justify-center
">

<User size={30}/>

</div>




<div>

<h2 className="
text-3xl
font-bold
">

{client.name}

</h2>


<p className="
text-gray-400
flex
gap-2
items-center
">

<Mail size={15}/>

{client.email}

</p>


</div>


</div>









<div className="
mt-8
flex
gap-4
items-center
">


<select

value={plan}

onChange={
e=>setPlan(e.target.value)
}

className="
bg-black/40
border
border-white/10
rounded-xl
px-4
py-3
"

>

<option>
Starter
</option>

<option>
Business
</option>

<option>
Premium
</option>

</select>





<button

onClick={updatePlan}

className="
bg-green-600
px-5
py-3
rounded-xl
flex
gap-2
items-center
"

>

<Save size={18}/>

Update Plan

</button>



</div>




</div>









<div className="
flex
justify-between
items-center
">


<h2 className="
text-3xl
font-bold
">

Websites 🌐

</h2>



<button

onClick={()=>setShowForm(!showForm)}

className="
bg-purple-600
px-5
py-3
rounded-xl
flex
gap-2
"

>

<Plus/>

Add Website

</button>


</div>









{

showForm &&


<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
space-y-4
">


<input

placeholder="Website Name"

className="
w-full
bg-black/30
p-3
rounded-xl
"

onChange={
e=>setWebsite({
...website,
title:e.target.value
})
}

/>



<select

className="
w-full
bg-black/30
p-3
rounded-xl
"

onChange={
e=>setWebsite({
...website,
template:e.target.value
})
}

>

<option>
Gym
</option>

<option>
Bakery
</option>

<option>
Printing
</option>

<option>
Real Estate
</option>


</select>




<button

onClick={assignWebsite}

className="
bg-green-600
px-5
py-3
rounded-xl
"

>

Save Website

</button>


</div>


}









<div className="
grid
lg:grid-cols-2
gap-6
">



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
"


>


<div className="
flex
justify-between
">


<Globe/>


{

site.status==="published"

?

<CheckCircle className="text-green-400"/>

:

<span className="text-yellow-400">

Draft

</span>

}


</div>




<h3 className="
text-2xl
font-bold
mt-5
">

{site.title}

</h3>


<p className="
text-gray-400
">

{site.template}

</p>






<div className="
flex
gap-3
mt-6
">


<button

onClick={()=>navigate(
`/admin/preview/${id}/${site.id}`
)}

className="
flex-1
bg-blue-600
py-3
rounded-xl
flex
justify-center
gap-2
"

>

<Eye/>

Preview

</button>





<button

onClick={()=>navigate(
`/admin/analytics/${id}/${site.id}`
)}

className="
flex-1
bg-purple-600
py-3
rounded-xl
flex
justify-center
gap-2
"

>

<BarChart3/>

Analytics

</button>



</div>




</div>


))


}



</div>








</div>


)


}


export default ClientDetail;