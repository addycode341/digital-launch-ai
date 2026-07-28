import React, {
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
  Users,
  Globe,
  IndianRupee,
  TrendingUp,
  Activity,
  CheckCircle,
  Eye,
  CreditCard
} from "lucide-react";


import {
  motion
} from "framer-motion";





const AdminDashboard = () => {



const [loading,setLoading] = useState(true);



const [stats,setStats] = useState({

clients:0,
websites:0,
published:0,
visitors:0,
leads:0,
revenue:0,
payments:0

});



const [recentClients,setRecentClients] = useState([]);

const [recentWebsites,setRecentWebsites] = useState([]);

const [recentPayments,setRecentPayments] = useState([]);







useEffect(()=>{

loadDashboard();

},[]);









const loadDashboard = async()=>{


try{



let clients = 0;

let websites = 0;

let published = 0;

let visitors = 0;

let leads = 0;





let clientList=[];

let websiteList=[];







// USERS

const usersSnap = await getDocs(

collection(
db,
"users"
)

);



clients = usersSnap.size;







for(const user of usersSnap.docs){



const userData = user.data();



clientList.push({

id:user.id,

name:userData.name || "Unknown",

email:userData.email || "-"

});








// WEBSITES


const websitesSnap = await getDocs(

collection(

db,

"users",

user.id,

"websites"

)

);



websites += websitesSnap.size;








for(const site of websitesSnap.docs){



const siteData = site.data();





websiteList.push({

id:site.id,

title:siteData.title || "Untitled",

status:siteData.status || "draft"

});






if(siteData.status==="published"){

published++;

}








// LEADS


const leadsSnap = await getDocs(

collection(

db,

"users",

user.id,

"websites",

site.id,

"leads"

)

);



leads += leadsSnap.size;










// ANALYTICS


const analyticsSnap = await getDocs(

collection(

db,

"users",

user.id,

"websites",

site.id,

"analytics"

)

);




analyticsSnap.forEach((item)=>{


visitors += Number(

item.data().visits || 0

);


});





}



}











// PAYMENTS


const paymentsSnap = await getDocs(

collection(
db,
"payments"
)

);



let revenue = 0;

let paymentList=[];







paymentsSnap.forEach((payment)=>{



const data = payment.data();




if(data.status==="success"){





let amount = Number(

String(data.amount || 0)

.replace("₹","")

.replace(",","")

);





revenue += amount || 0;







paymentList.push({

id:payment.id,

name:data.name || "Customer",

plan:data.plan || "Starter",

amount:amount,

status:data.status


});



}




});









setStats({

clients,

websites,

published,

visitors,

leads,

revenue,

payments:paymentList.length

});





setRecentClients(

clientList.slice(0,5)

);



setRecentWebsites(

websiteList.slice(0,5)

);



setRecentPayments(

paymentList.slice(0,5)

);






}

catch(error){


console.log(
"Dashboard Error",
error
);


}

finally{


setLoading(false);


}



};













const cards=[



{
title:"Total Clients",
value:stats.clients,
icon:<Users size={25}/>
},


{
title:"Websites",
value:stats.websites,
icon:<Globe size={25}/>
},



{
title:"Published",
value:stats.published,
icon:<CheckCircle size={25}/>
},



{
title:"Visitors",
value:stats.visitors,
icon:<Eye size={25}/>
},



{
title:"Leads",
value:stats.leads,
icon:<TrendingUp size={25}/>
},



{
title:"Payments",
value:stats.payments,
icon:<CreditCard size={25}/>
},



{
title:"Revenue",
value:`₹${stats.revenue}`,
icon:<IndianRupee size={25}/>
}



];









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

Loading Dashboard 🚀

</div>


)


}










return(



<div className="
text-white
space-y-10
">






<div>


<h1 className="
text-4xl
font-bold
">

Admin Dashboard 🚀

</h1>


<p className="
text-gray-400
mt-2
">

DigitalLaunch AI Control Center

</p>


</div>









<div className="
grid
md:grid-cols-2
xl:grid-cols-4
gap-6
">



{

cards.map((card,index)=>(



<motion.div


key={index}


initial={{
opacity:0,
y:30
}}


animate={{
opacity:1,
y:0
}}



transition={{
delay:index*0.1
}}



className="
bg-white/5
border
border-white/10

rounded-3xl

p-6

backdrop-blur-xl

"

>


<div className="
flex
justify-between
items-center
">


<div>


<p className="
text-gray-400
">

{card.title}

</p>



<h2 className="
text-3xl
font-bold
mt-3
">

{card.value}

</h2>



</div>




<div className="
w-14
h-14
rounded-2xl

bg-purple-600/20

flex
items-center
justify-center

text-purple-400
">


{card.icon}


</div>


</div>



</motion.div>


))


}



</div>









<div className="
grid
lg:grid-cols-3
gap-8
">








<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
">


<h2 className="
text-xl
font-bold
mb-5
">

Recent Clients

</h2>




{

recentClients.map(client=>(


<div

key={client.id}

className="
bg-black/20
rounded-xl
p-4
mb-4
">


<h3 className="
font-semibold
">

{client.name}

</h3>


<p className="
text-sm
text-gray-400
">

{client.email}

</p>



</div>


))


}



</div>









<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
">


<h2 className="
text-xl
font-bold
mb-5
">

Recent Websites

</h2>



{

recentWebsites.map(site=>(


<div

key={site.id}

className="
bg-black/20
rounded-xl
p-4
mb-4
flex
justify-between
">


<span>

{site.title}

</span>



<span className="
text-green-400
">

{site.status}

</span>



</div>


))


}



</div>









<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
">


<h2 className="
text-xl
font-bold
mb-5
flex
gap-2
items-center
">

<CreditCard/>

Payments

</h2>





{

recentPayments.length===0 ?


<p className="
text-gray-400
">

No Payments Yet

</p>



:


recentPayments.map(payment=>(


<div

key={payment.id}

className="
bg-black/20
rounded-xl
p-4
mb-4
">


<h3>

{payment.name}

</h3>


<p className="
text-gray-400
">

{payment.plan}

</p>


<p className="
text-green-400
font-bold
">

₹{payment.amount}

</p>



</div>


))


}



</div>







</div>









<div className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
">


<div className="
flex
items-center
gap-3
mb-5
">


<Activity
className="
text-green-400
"
/>



<h2 className="
text-2xl
font-bold
">

Platform Health

</h2>


</div>




<div className="
space-y-3
text-gray-300
">


<p>🟢 Firebase Online</p>

<p>🟢 Authentication Online</p>

<p>🟢 Database Online</p>

<p>🟢 Payments Online</p>



</div>


</div>






</div>


)


}




export default AdminDashboard;