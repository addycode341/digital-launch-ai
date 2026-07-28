import React, {
  useEffect,
  useState
} from "react";


import {
  useNavigate
} from "react-router-dom";


import {
  collection,
  getDocs
} from "firebase/firestore";


import {
  db
} from "../../firebase";


import {
  Users,
  Globe,
  Eye,
  Mail,
  IndianRupee
} from "lucide-react";





const Clients =()=>{


const navigate = useNavigate();


const [clients,setClients] = useState([]);

const [loading,setLoading] = useState(true);







useEffect(()=>{


loadClients();


},[]);







const loadClients = async()=>{


try{


const usersSnap = await getDocs(

collection(
db,
"users"
)

);



let clientData=[];



for(const user of usersSnap.docs){


const userInfo = user.data();



const websiteSnap = await getDocs(

collection(
db,
"users",
user.id,
"websites"
)

);




let websites = websiteSnap.size;


let published = 0;



websiteSnap.forEach(site=>{


if(site.data().status==="published"){

published++;

}


});






clientData.push({


id:user.id,


name:
userInfo.name || "Unknown",


email:
userInfo.email || "No Email",


plan:
userInfo.plan || "Starter",


websites,


revenue:
published * 799,


visitors:
userInfo.visitors || 0,


leads:
userInfo.leads || 0,


status:"Active"



});



}




setClients(clientData);



}

catch(error){


console.log(
"Client Error",
error
);


}

finally{


setLoading(false);


}



};










return(


<div

className="
text-white
space-y-8
"

>





{/* HEADER */}



<div>


<h1

className="
text-4xl
font-bold
"

>

Clients 👥

</h1>



<p

className="
text-gray-400
mt-2
"

>

Manage DigitalLaunch AI customers

</p>


</div>









{/* TABLE */}



<div

className="
bg-white/[0.05]
border
border-white/10
rounded-3xl
overflow-hidden
"

>



<table

className="
w-full
"

>



<thead

className="
bg-black/40
text-gray-400
"

>


<tr>


<th className="p-5 text-left">
Client
</th>


<th className="p-5 text-left">
Plan
</th>


<th className="p-5 text-left">
Websites
</th>


<th className="p-5 text-left">
Visitors
</th>


<th className="p-5 text-left">
Leads
</th>


<th className="p-5 text-left">
Revenue
</th>


<th className="p-5 text-left">
Status
</th>


<th className="p-5 text-left">
Action
</th>



</tr>


</thead>







<tbody>



{

loading ?



<tr>

<td

colSpan="8"

className="
p-10
text-center
"

>

Loading Clients...

</td>

</tr>





:



clients.length===0 ?



<tr>

<td

colSpan="8"

className="
p-10
text-center
text-gray-400
"

>

No Clients Found 🚀

</td>

</tr>







:



clients.map(client=>(




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


<div

className="
flex
items-center
gap-3
"

>


<div

className="
w-10
h-10
rounded-xl
bg-purple-600
flex
items-center
justify-center
"

>

<Users size={18}/>

</div>




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
gap-1
items-center
">

<Mail size={13}/>

{client.email}

</p>


</div>


</div>


</td>








<td className="p-5">


<span

className="
px-3
py-1
rounded-full
bg-purple-500/20
text-purple-300
text-sm
"

>

{client.plan}

</span>


</td>









<td className="p-5">


<div className="
flex
gap-2
items-center
">

<Globe size={16}/>

{client.websites}


</div>


</td>









<td className="p-5">


<div className="
flex
gap-2
items-center
">

<Eye size={16}/>

{client.visitors}


</div>


</td>









<td className="p-5">


{client.leads}


</td>









<td className="p-5 text-green-400">


<div className="
flex
items-center
gap-1
">

<IndianRupee size={15}/>

{client.revenue}

</div>


</td>









<td className="p-5">


<span

className="
bg-green-500/20
text-green-400
px-3
py-1
rounded-full
text-sm
"

>

{client.status}

</span>


</td>








<td className="p-5">


<button


onClick={()=>navigate(
`/admin/client/${client.id}`
)}


className="
px-4
py-2
rounded-xl
bg-blue-600
hover:bg-blue-700
"

>

View

</button>


</td>






</tr>



))


}



</tbody>




</table>



</div>








</div>


)


}


export default Clients;