import React,{
useEffect,
useState
} from "react";


import {
useParams
} from "react-router-dom";


import {
doc,
getDoc,
collection,
getDocs,
addDoc,
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
IndianRupee
} from "lucide-react";




const ClientDetail=()=>{


const {id}=useParams();



const [client,setClient]=useState(null);

const [websites,setWebsites]=useState([]);

const [loading,setLoading]=useState(true);


const [showForm,setShowForm]=useState(false);



const [website,setWebsite]=useState({

title:"",

template:"",

status:"published",

plan:"Starter"

});





useEffect(()=>{

loadClient();

},[]);






const loadClient=async()=>{


try{


const userRef=doc(
db,
"users",
id
);


const userSnap=await getDoc(userRef);



if(userSnap.exists()){


setClient({

id,

...userSnap.data()

});


}







const websiteSnap=await getDocs(

collection(
db,
"users",
id,
"websites"
)

);



let list=[];


websiteSnap.forEach((item)=>{


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







const assignWebsite=async()=>{


if(!website.title){

alert("Enter website name");

return;

}



try{


await addDoc(


collection(
db,
"users",
id,
"websites"
),


{


title:website.title,


template:website.template,


status:website.status,


plan:website.plan,


visitors:0,


leads:0,


createdAt:serverTimestamp()



}



);



alert(
"Website Assigned 🚀"
);



setWebsite({

title:"",

template:"",

status:"published",

plan:"Starter"

});


setShowForm(false);


loadClient();



}


catch(error){

console.log(error);

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

Loading Client...

</div>

)

}







if(!client){


return(

<div className="
text-white
p-10
">

Client Not Found

</div>

)

}







const published =
websites.filter(
item=>item.status==="published"
).length;




const revenue =
websites.length * 799;







return(


<div className="
min-h-screen
bg-[#050816]
text-white
p-8
space-y-10
">







{/* HEADER */}



<div>

<h1 className="
text-4xl
font-bold
">

Client Profile

</h1>


<p className="
text-gray-400
mt-2
">

Manage customer website and subscription

</p>


</div>









{/* CLIENT PROFILE */}



<div className="
bg-white/[0.06]
border
border-white/10
rounded-3xl
p-8
">



<div className="
flex
items-center
gap-5
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

<User size={32}/>

</div>




<div>


<h2 className="
text-3xl
font-bold
">

{client.name || "Unknown"}

</h2>


<div className="
flex
items-center
gap-2
text-gray-400
mt-2
">

<Mail size={16}/>

{client.email}

</div>


</div>


</div>







<div className="
grid
md:grid-cols-4
gap-5
mt-8
">



<div className="
bg-black/30
rounded-2xl
p-5
">

<p className="
text-gray-400
">

Plan

</p>


<h3 className="
text-2xl
font-bold
mt-2
">

{client.plan || "Starter"}

</h3>


</div>





<div className="
bg-black/30
rounded-2xl
p-5
">

<p className="
text-gray-400
">

Websites

</p>


<h3 className="
text-2xl
font-bold
mt-2
">

{websites.length}

</h3>


</div>





<div className="
bg-black/30
rounded-2xl
p-5
">


<p className="
text-gray-400
">

Published

</p>


<h3 className="
text-2xl
font-bold
text-green-400
mt-2
">

{published}

</h3>


</div>






<div className="
bg-black/30
rounded-2xl
p-5
">


<p className="
text-gray-400
">

Revenue

</p>


<h3 className="
text-2xl
font-bold
text-yellow-400
mt-2
">

₹{revenue}

</h3>


</div>





</div>



</div>









{/* WEBSITE HEADER */}



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
flex
gap-2
items-center
bg-gradient-to-r
from-purple-600
to-blue-600
px-5
py-3
rounded-xl
">

<Plus size={20}/>

Assign Website

</button>


</div>








{/* FORM */}



{

showForm &&


<div className="
bg-white/[0.06]
border
border-white/10
rounded-3xl
p-8
space-y-5
">



<input

placeholder="Website Name"

value={website.title}

onChange={
e=>
setWebsite({
...website,
title:e.target.value
})
}

className="
w-full
bg-black/40
border
border-white/10
rounded-xl
p-3
"

/>







<select

value={website.template}

onChange={
e=>
setWebsite({
...website,
template:e.target.value
})
}


className="
w-full
bg-black/40
border
border-white/10
rounded-xl
p-3
"

>


<option value="">

Select Template

</option>

<option>
Bakery
</option>

<option>
Gym
</option>

<option>
Printing
</option>

<option>
Real Estate
</option>


</select>






<select

value={website.plan}

onChange={
e=>
setWebsite({
...website,
plan:e.target.value
})
}


className="
w-full
bg-black/40
border
border-white/10
rounded-xl
p-3
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

onClick={assignWebsite}

className="
bg-green-600
px-6
py-3
rounded-xl
"

>

Save Website

</button>



</div>


}









{/* WEBSITE CARDS */}



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
bg-white/[0.06]
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


<CheckCircle
className="
text-green-400
"
/>


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

Template:
{site.template}

</p>



<div className="
grid
grid-cols-2
gap-4
mt-5
">



<div className="
bg-black/30
rounded-xl
p-3
">

<Eye size={18}/>

<p>

{site.visitors || 0}

Visitors

</p>

</div>





<div className="
bg-black/30
rounded-xl
p-3
">

<BarChart3 size={18}/>

<p>

{site.leads || 0}

Leads

</p>

</div>




</div>






<div className="
flex
gap-3
mt-6
">


<button className="
flex-1
bg-blue-600
py-3
rounded-xl
flex
justify-center
gap-2
">

<Eye size={18}/>

Preview

</button>



<button className="
flex-1
bg-purple-600
py-3
rounded-xl
flex
justify-center
gap-2
">

<BarChart3 size={18}/>

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