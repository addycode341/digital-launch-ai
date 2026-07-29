import React,{
useEffect,
useState
} from "react";


import {
collection,
getDocs,
updateDoc,
doc
} from "firebase/firestore";


import {
db
} from "../../firebase";


import {
User,
Phone,
MessageCircle,
Mail,
Search,
CheckCircle,
Clock,
TrendingUp
} from "lucide-react";






const Leads=()=>{


const [leads,setLeads]=useState([]);

const [loading,setLoading]=useState(true);

const [search,setSearch]=useState("");






useEffect(()=>{

loadLeads();

},[]);









const loadLeads=async()=>{


try{


const usersSnap =
await getDocs(
collection(db,"users")
);



let data=[];





for(const user of usersSnap.docs){



const websitesSnap =
await getDocs(

collection(
db,
"users",
user.id,
"websites"
)

);





for(const site of websitesSnap.docs){



const leadsSnap =
await getDocs(

collection(
db,
"users",
user.id,
"websites",
site.id,
"leads"
)

);





leadsSnap.forEach(lead=>{


data.push({

id:lead.id,

userId:user.id,

websiteId:site.id,

website:
site.data().title,

...lead.data()


});


});



}


}



setLeads(data);



}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


};









const updateStatus=async(lead,status)=>{


try{


await updateDoc(

doc(
db,
"users",
lead.userId,
"websites",
lead.websiteId,
"leads",
lead.id
),

{

status

}

);



setLeads(prev=>

prev.map(item=>

item.id===lead.id

?

{
...item,
status
}

:

item

)

);



}

catch(error){

console.log(error);

}



};









const filteredLeads =
leads.filter(lead=>

(lead.name || "")
.toLowerCase()
.includes(
search.toLowerCase()
)

);









const statusIcon=(status)=>{


if(status==="Converted")

return <TrendingUp size={18}/>;


if(status==="Contacted")

return <Clock size={18}/>;


return <User size={18}/>;


};









return(


<div className="
text-white
space-y-8
">






{/* HEADER */}



<div>


<h1 className="
text-4xl
font-bold
">

Leads CRM 📩

</h1>


<p className="
text-gray-400
mt-2
">

Manage customer enquiries and conversions

</p>


</div>









{/* SEARCH */}



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
Search lead...
"

value={search}

onChange={
e=>setSearch(e.target.value)
}


className="
w-full
bg-black/30
border
border-white/10
rounded-2xl
py-3
pl-12
outline-none
"

/>


</div>












<div className="
bg-white/[0.05]
border
border-white/10
rounded-3xl
p-6
">



{

loading ?


<p>

Loading Leads...

</p>



:

filteredLeads.length===0 ?


<p className="
text-gray-400
text-center
py-10
">

No Leads Found

</p>



:



<div className="
space-y-5
">


{


filteredLeads.map(lead=>(



<div


key={lead.id}


className="
bg-black/30
rounded-3xl
p-6

flex
flex-col
lg:flex-row

justify-between
gap-5

border
border-white/10

"

>



<div>



<h2 className="
text-xl
font-bold
flex
items-center
gap-2
">


<User size={20}/>


{lead.name || "Unknown"}


</h2>





<p className="
text-gray-400
flex
gap-2
items-center
mt-3
">


<Mail size={16}/>


{lead.email || "-"}


</p>






<p className="
text-gray-400
flex
gap-2
items-center
mt-2
">


<Phone size={16}/>


{lead.phone || "-"}


</p>







<p className="
text-purple-400
mt-3
">


Website:

<span className="text-white">

{" "}

{lead.website}

</span>


</p>




</div>









<div className="
flex
flex-col
gap-3
items-start
lg:items-end
">





{/* STATUS */}


<div className="
flex
gap-2
items-center
">


{statusIcon(
lead.status || "New"
)}



<select


value={
lead.status || "New"
}


onChange={
e=>
updateStatus(
lead,
e.target.value
)
}


className="
bg-black
border
border-white/10
rounded-xl
px-3
py-2
"


>


<option>
New
</option>


<option>
Contacted
</option>


<option>
Converted
</option>



</select>



</div>











<div className="
flex
gap-3
">





<a


href={`https://wa.me/${lead.phone}`}


target="_blank"


className="
bg-green-600
p-3
rounded-xl
"


>


<MessageCircle size={18}/>


</a>








<a


href={`mailto:${lead.email}`}


className="
bg-blue-600
p-3
rounded-xl
"


>


<Mail size={18}/>


</a>




</div>






</div>








</div>



))



}



</div>



}



</div>









</div>


)


}


export default Leads;