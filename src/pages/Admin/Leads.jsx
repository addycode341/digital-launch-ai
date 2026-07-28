import React,{
useEffect,
useState
} from "react";


import {
collection,
getDocs
} from "firebase/firestore";


import {
db
} from "../../firebase";


import {
User,
Phone,
MessageCircle,
Mail
} from "lucide-react";




const Leads=()=>{


const [leads,setLeads]=useState([]);

const [loading,setLoading]=useState(true);





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



const websiteSnap =
await getDocs(

collection(
db,
"users",
user.id,
"websites"
)

);



for(const site of websiteSnap.docs){



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









return(


<div className="
text-white
space-y-8
">


<h1 className="
text-4xl
font-bold
">

Leads 📩

</h1>


<p className="
text-gray-400
">

Customer enquiries from websites

</p>







<div className="
bg-white/[0.05]
border
border-white/10
rounded-3xl
p-8
">


{

loading ?


<p>
Loading Leads...
</p>



:


leads.length===0 ?


<p className="
text-gray-400
">

No Leads Found

</p>



:


<div className="
space-y-5
">


{

leads.map(lead=>(


<div

key={lead.id}

className="
bg-black/30
rounded-2xl
p-6
flex
justify-between
"

>


<div>


<h2 className="
text-xl
font-bold
flex
gap-2
items-center
">

<User size={20}/>

{lead.name || "Unknown"}

</h2>



<p className="
text-gray-400
flex
gap-2
items-center
mt-2
">

<Mail size={16}/>

{lead.email || "-"}

</p>




<p className="
text-gray-400
flex
gap-2
items-center
">

<Phone size={16}/>

{lead.phone || "-"}

</p>




<p className="
mt-3
text-purple-400
">

Website:
{lead.website}

</p>



</div>





<div>

<MessageCircle
className="text-green-400"
/>

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