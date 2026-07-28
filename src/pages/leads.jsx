import React, { useEffect, useState } from "react";

import {
  Search,
  Phone,
  Mail,
  MessageCircle,
  Users,
  UserCheck,
  UserPlus
} from "lucide-react";

import {
  collection,
  getDocs
} from "firebase/firestore";

import {
  auth,
  db
} from "../firebase";



function Leads(){


const [leads,setLeads] = useState([]);

const [search,setSearch] = useState("");

const [loading,setLoading] = useState(true);





useEffect(()=>{

fetchLeads();

},[]);






const fetchLeads = async()=>{


try{


const user = auth.currentUser;


if(!user){

setLoading(false);

return;

}




let leadArray=[];



const websitesSnapshot = await getDocs(

collection(
db,
"users",
user.uid,
"websites"
)

);






for(const websiteDoc of websitesSnapshot.docs){


const websiteData = websiteDoc.data();



const leadsSnapshot = await getDocs(

collection(
db,
"users",
user.uid,
"websites",
websiteDoc.id,
"leads"
)

);




leadsSnapshot.forEach((leadDoc)=>{


leadArray.push({

id:leadDoc.id,

...leadDoc.data(),

website:
websiteData.title || "Website"


});


});



}





setLeads(leadArray);



}

catch(error){

console.log(
"Leads Error",
error
);

}

finally{

setLoading(false);

}


};









const filteredLeads = leads.filter((lead)=>{


const name = lead.name || "";

const email = lead.email || "";

const phone = lead.phone || "";


return (

name.toLowerCase()
.includes(search.toLowerCase())

||

email.toLowerCase()
.includes(search.toLowerCase())

||

phone.includes(search)

);


});








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

Loading Leads...

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



<div>


<p

className="
text-purple-400
font-semibold
"

>

CRM Dashboard

</p>



<h1

className="
text-5xl
font-bold
mt-2

bg-gradient-to-r
from-purple-400
to-blue-400

bg-clip-text
text-transparent

"

>

Customer Leads 📩

</h1>



<p

className="
text-gray-400
mt-3
"

>

Manage your business enquiries and customers

</p>


</div>









{/* SEARCH */}



<div

className="
mt-10

bg-white/5

border
border-white/10

rounded-2xl

p-4

flex
items-center
gap-3

"

>


<Search

className="
text-gray-400
"

/>



<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search customer..."

className="
w-full
bg-transparent
outline-none
text-white
"

/>



</div>










{/* STATS */}



<div

className="
grid
md:grid-cols-3

gap-6

mt-8

"

>



<StatCard

title="Total Leads"

value={leads.length}

icon={<Users/>}

/>




<StatCard

title="New Leads"

value={
leads.filter(
lead=>
lead.status==="new"
).length
}

icon={<UserPlus/>}

/>





<StatCard

title="Converted"

value={
leads.filter(
lead=>
lead.status==="converted"
).length
}

icon={<UserCheck/>}

/>



</div>









{/* LEADS LIST */}



<div

className="
grid
lg:grid-cols-3

gap-6

mt-10

"

>


{


filteredLeads.length===0 ?


<div

className="
col-span-full

bg-white/5

border
border-white/10

rounded-3xl

p-10

text-gray-400

"

>

No leads found 🚀

</div>



:


filteredLeads.map((lead)=>(



<div

key={lead.id}

className="
bg-white/[0.05]

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
flex
items-center
gap-4

"

>


<div

className="
w-14
h-14

rounded-full

bg-gradient-to-br

from-purple-500
to-blue-500

flex
items-center
justify-center

font-bold
text-xl

"

>

{

lead.name
?
lead.name.charAt(0)
:
"C"

}

</div>





<div>


<h2

className="
text-xl
font-bold
"

>

{

lead.name || "Unknown"

}

</h2>



<p

className="
text-gray-400
text-sm

"

>

{lead.website}

</p>



</div>


</div>








<div

className="
mt-6
space-y-3
text-gray-300

"

>


<p>

<Phone

size={16}

className="
inline
mr-2
"

/>

{lead.phone || "-"}

</p>



<p>

<Mail

size={16}

className="
inline
mr-2
"

/>

{lead.email || "-"}

</p>



</div>








<span

className="
inline-block

mt-5

px-4

py-2

rounded-full

bg-yellow-500/20

text-yellow-400

text-sm

"

>

{

lead.status || "new"

}

</span>








<button

className="
mt-6

w-full

py-3

rounded-xl

bg-green-600

hover:bg-green-700

flex

items-center

justify-center

gap-2

"

>


<MessageCircle size={18}/>


WhatsApp


</button>






</div>



))


}



</div>







</div>


)

}









function StatCard({

title,
value,
icon

}){


return(

<div

className="
bg-white/5

border
border-white/10

rounded-3xl

p-6

"

>


<div

className="
text-purple-400
"

>

{icon}

</div>


<p

className="
text-gray-400
mt-4

"

>

{title}

</p>



<h2

className="
text-4xl
font-bold
mt-2

"

>

{value}

</h2>



</div>


)

}





export default Leads;