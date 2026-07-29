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
Users,
Globe,
Eye,
IndianRupee,
TrendingUp,
Activity
} from "lucide-react";


import {
motion
} from "framer-motion";


import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
CartesianGrid
} from "recharts";





const AdminDashboard=()=>{


const [stats,setStats]=useState({

clients:0,
websites:0,
published:0,
revenue:0,
visitors:0

});


const [chart,setChart]=useState([]);


const [loading,setLoading]=useState(true);







useEffect(()=>{


loadDashboard();


},[]);









const loadDashboard=async()=>{


try{



const usersSnap =
await getDocs(

collection(
db,
"users"
)

);



let clients=0;

let websites=0;

let published=0;

let revenue=0;

let visitors=0;


let graph=[];





for(const user of usersSnap.docs){


clients++;





const websiteSnap =
await getDocs(

collection(
db,
"users",
user.id,
"websites"

)

);





websiteSnap.forEach(site=>{


const data=site.data();


websites++;


if(data.status==="published"){

published++;

revenue+=799;

}



visitors +=
data.visitors || 0;




graph.push({

name:
data.title || "Site",

visitors:
data.visitors || 0


});



});



}






setStats({

clients,

websites,

published,

revenue,

visitors


});



setChart(graph);



}

catch(error){

console.log(error);

}


finally{

setLoading(false);

}


};









const cards=[


{

title:"Total Clients",

value:stats.clients,

icon:<Users size={28}/>,

color:"purple"

},



{

title:"Websites",

value:stats.websites,

icon:<Globe size={28}/>,

color:"blue"

},



{

title:"Visitors",

value:stats.visitors,

icon:<Eye size={28}/>,

color:"green"

},



{

title:"Revenue",

value:`₹${stats.revenue}`,

icon:<IndianRupee size={28}/>,

color:"yellow"

}



];









if(loading){


return(

<div className="
text-white
text-xl
">

Loading Dashboard...

</div>

)

}









return(


<div

className="
text-white
space-y-10
"

>






{/* HEADER */}



<div>


<h1 className="
text-4xl
font-bold
">

Dashboard 🚀

</h1>



<p className="
text-gray-400
mt-2
">

DigitalLaunch AI business overview

</p>


</div>









{/* CARDS */}



<div

className="
grid
md:grid-cols-2
xl:grid-cols-4
gap-6
"

>


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
bg-white/[0.06]

border
border-white/10

rounded-3xl

p-6

hover:border-purple-500/40

transition

"

>


<div className="
text-purple-400
mb-5
">

{card.icon}

</div>




<p className="
text-gray-400
">

{card.title}

</p>



<h2 className="
text-4xl
font-bold
mt-2
">

{card.value}

</h2>



<div className="
flex
items-center
gap-2

text-green-400

text-sm

mt-4

">


<TrendingUp size={16}/>

Growing


</div>



</motion.div>


))


}



</div>













{/* CHART */}



<div

className="
bg-white/[0.06]

border
border-white/10

rounded-3xl

p-8

"


>


<div className="
flex
items-center
gap-3
mb-8
">


<Activity
className="text-purple-400"
/>


<h2 className="
text-2xl
font-bold
">

Website Growth

</h2>


</div>







<ResponsiveContainer

width="100%"

height={350}

>


<LineChart data={chart}>


<CartesianGrid
strokeDasharray="3 3"
/>


<XAxis
dataKey="name"
/>


<YAxis/>



<Tooltip/>





<Line

type="monotone"

dataKey="visitors"

strokeWidth={3}

/>




</LineChart>


</ResponsiveContainer>





</div>









{/* QUICK STATS */}



<div

className="
grid
md:grid-cols-3
gap-6
"

>



<div className="
bg-green-500/10
border
border-green-500/20
rounded-3xl
p-6
">


<h3 className="
text-gray-400
">

Published Websites

</h3>


<p className="
text-3xl
font-bold
mt-2
text-green-400
">

{stats.published}

</p>


</div>





<div className="
bg-blue-500/10
border
border-blue-500/20
rounded-3xl
p-6
">


<h3 className="
text-gray-400
">

Active Users

</h3>


<p className="
text-3xl
font-bold
mt-2
text-blue-400
">

{stats.clients}

</p>


</div>





<div className="
bg-purple-500/10
border
border-purple-500/20
rounded-3xl
p-6
">


<h3 className="
text-gray-400
">

Monthly Revenue

</h3>


<p className="
text-3xl
font-bold
mt-2
text-purple-400
">

₹{stats.revenue}

</p>


</div>




</div>








</div>


)

}



export default AdminDashboard;