import React,{
useEffect,
useState
} from "react";


import {
collection,
getDocs,
deleteDoc,
doc
} from "firebase/firestore";


import {
db
} from "../../firebase";


import {
Users,
Globe,
Eye,
Mail,
IndianRupee,
Search,
Plus,
Trash2
} from "lucide-react";


import {
useNavigate
} from "react-router-dom";


import {
motion
} from "framer-motion";





const Clients=()=>{


const navigate = useNavigate();



const [clients,setClients]=useState([]);

const [loading,setLoading]=useState(true);

const [search,setSearch]=useState("");







useEffect(()=>{

loadClients();

},[]);








const loadClients=async()=>{


try{


const usersSnap =
await getDocs(

collection(
db,
"users"
)

);



let list=[];





for(const user of usersSnap.docs){



const data=user.data();



const websitesSnap =
await getDocs(

collection(
db,
"users",
user.id,
"websites"
)

);



let websites =
websitesSnap.size;


let published=0;



websitesSnap.forEach(site=>{


if(site.data().status==="published"){

published++;

}


});





list.push({


id:user.id,


name:
data.name || "Unknown",


email:
data.email || "-",


plan:
data.plan || "Starter",


websites,


published,


revenue:
published * 799,


status:
data.status || "Active"



});



}



setClients(list);



}

catch(error){

console.log(
"Clients Error",
error
);

}

finally{

setLoading(false);

}



};









const deleteClient=async(id)=>{


const confirmDelete =
window.confirm(
"Delete this client?"
);



if(!confirmDelete)
return;



try{


await deleteDoc(

doc(
db,
"users",
id
)

);



loadClients();


}

catch(error){

console.log(error);

}



};









const filteredClients =
clients.filter(client=>

client.name
.toLowerCase()
.includes(
search.toLowerCase()
)

||
client.email
.toLowerCase()
.includes(
search.toLowerCase()
)


);









return(


<div className="
text-white
space-y-8
">





<div className="
flex
justify-between
items-center
flex-wrap
gap-4
">


<div>


<h1 className="
text-4xl
font-bold
">

Clients 👥

</h1>


<p className="
text-gray-400
mt-2
">

Manage DigitalLaunch AI customers

</p>


</div>






<button


onClick={()=>navigate(
"/admin/add-client"
)}


className="
flex
items-center
gap-2

bg-gradient-to-r

from-purple-600

to-blue-600

px-5
py-3

rounded-xl

font-semibold

"


>


<Plus size={18}/>

Add Client


</button>



</div>









<div className="
relative
">


<Search

className="
absolute
left-4
top-3.5
text-gray-400
"

/>



<input


placeholder="
Search client...
"


value={search}


onChange={
e=>setSearch(
e.target.value
)
}


className="
w-full

bg-white/5

border

border-white/10

rounded-xl

py-3

pl-12

pr-5

outline-none

"



/>



</div>













{
loading ?


<div className="
text-gray-400
">

Loading Clients...

</div>




:


filteredClients.length===0 ?


<div className="
bg-white/5
rounded-3xl
p-10
text-center
text-gray-400
">

No Clients Found

</div>




:

<>



{/* DESKTOP TABLE */}


<div className="
hidden
lg:block

bg-white/[0.05]

border

border-white/10

rounded-3xl

overflow-hidden

">


<table className="
w-full
">


<thead className="
bg-black/30
text-gray-400
">


<tr>


<th className="p-5 text-left">
Client
</th>


<th className="p-5">
Plan
</th>


<th className="p-5">
Websites
</th>


<th className="p-5">
Revenue
</th>


<th className="p-5">
Action
</th>


</tr>


</thead>



<tbody>


{
filteredClients.map(client=>(



<tr

key={client.id}

className="
border-t
border-white/10
hover:bg-white/5
transition
"

>


<td className="p-5">


<div>


<h3 className="
font-semibold
">

{client.name}

</h3>


<p className="
text-sm
text-gray-400
flex
gap-2
items-center
">

<Mail size={14}/>

{client.email}

</p>


</div>


</td>





<td>


<span className="
px-3
py-1
rounded-full

bg-purple-500/20

text-purple-300

text-sm
">

{client.plan}

</span>


</td>





<td>

<div className="
flex
items-center
gap-2
justify-center
">

<Globe size={15}/>

{client.websites}

</div>


</td>





<td className="
text-green-400
font-bold
">


₹{client.revenue}


</td>





<td>


<div className="
flex
gap-2
">


<button


onClick={()=>navigate(
`/admin/client/${client.id}`
)}


className="
bg-blue-600
px-4
py-2
rounded-xl
"


>

View

</button>




<button


onClick={()=>deleteClient(client.id)}


className="
bg-red-600
p-2
rounded-xl
"


>

<Trash2 size={18}/>


</button>



</div>


</td>



</tr>



))
}



</tbody>


</table>



</div>









{/* MOBILE CARDS */}



<div className="
lg:hidden
space-y-5
">


{
filteredClients.map(client=>(


<motion.div


key={client.id}


initial={{
opacity:0,
y:20
}}


animate={{
opacity:1,
y:0
}}


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


<div>


<h2 className="
text-xl
font-bold
">

{client.name}

</h2>


<p className="
text-gray-400
text-sm
">

{client.email}

</p>


</div>



<Users/>

</div>





<div className="
grid
grid-cols-2
gap-4
mt-5
">


<div>

<p className="
text-gray-400
">

Websites

</p>


<h3 className="
text-xl
font-bold
">

{client.websites}

</h3>

</div>



<div>

<p className="
text-gray-400
">

Revenue

</p>


<h3 className="
text-green-400
font-bold
">

₹{client.revenue}

</h3>

</div>


</div>






<div className="
flex
gap-3
mt-5
">


<button


onClick={()=>navigate(
`/admin/client/${client.id}`
)}


className="
flex-1
bg-blue-600
py-3
rounded-xl
"


>

View

</button>




<button


onClick={()=>deleteClient(client.id)}


className="
bg-red-600
px-4
rounded-xl
"


>

<Trash2/>

</button>


</div>





</motion.div>


))
}


</div>



</>



}




</div>


)


}


export default Clients;