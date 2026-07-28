import React,{useEffect,useState} from "react";

import {
collection,
getDocs
} from "firebase/firestore";

import {db} from "../../firebase";


import {
Eye,
Users,
TrendingUp,
Activity
} from "lucide-react";


import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
ResponsiveContainer,
BarChart,
Bar
} from "recharts";


import {motion} from "framer-motion";



const Analytics=()=>{


const [stats,setStats]=useState({

visitors:0,
leads:0,
conversions:0,
bounceRate:0

});


const [chartData,setChartData]=useState([]);


const [loading,setLoading]=useState(true);





useEffect(()=>{

loadAnalytics();

},[]);





const loadAnalytics=async()=>{


try{


const usersSnap=await getDocs(

collection(db,"users")

);



let visitors=0;

let leads=0;

let conversions=0;

let bounce=0;

let count=0;



let graph=[];




for(const user of usersSnap.docs){


const websitesSnap=await getDocs(

collection(
db,
"users",
user.id,
"websites"
)

);



for(const site of websitesSnap.docs){



const analyticsSnap=await getDocs(

collection(
db,
"users",
user.id,
"websites",
site.id,
"analytics"
)

);





analyticsSnap.forEach((doc)=>{


const data=doc.data();



visitors += data.visits || 0;

leads += data.leads || 0;

conversions += data.conversions || 0;

bounce += data.bounceRate || 0;

count++;



graph.push({

name:
data.date || "Day",

visitors:
data.visits || 0,

leads:
data.leads || 0

});



});



}


}




setStats({

visitors,

leads,

conversions,

bounceRate:

count
?
Math.round(bounce/count)
:
0

});



setChartData(graph);



}

catch(err){

console.log(err);

}

finally{

setLoading(false);

}


};







const cards=[

{
title:"Visitors",
value:stats.visitors,
icon:<Eye/>
},


{
title:"Leads",
value:stats.leads,
icon:<Users/>
},


{
title:"Conversions",
value:stats.conversions,
icon:<TrendingUp/>
},


{
title:"Bounce Rate",
value:`${stats.bounceRate}%`,
icon:<Activity/>
}


];





return(

<div className="
min-h-screen
bg-[#050816]
text-white
p-8
">


<h1 className="
text-4xl
font-bold
">

Analytics

</h1>


<p className="
text-gray-400
mt-2
mb-10
">

Website performance overview

</p>





{
loading ?

<div className="text-gray-400">

Loading...

</div>


:

<>



<div className="
grid
md:grid-cols-4
gap-6
">


{
cards.map((card,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:20
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
"


>


<div className="
text-purple-400
mb-5
">

{card.icon}

</div>



<p className="text-gray-400">

{card.title}

</p>


<h2 className="
text-3xl
font-bold
mt-2
">

{card.value}

</h2>


</motion.div>



))


}


</div>







<div className="
grid
lg:grid-cols-2
gap-8
mt-10
">



<div className="
bg-white/[0.06]
border
border-white/10
rounded-3xl
p-6
">


<h2 className="
text-xl
font-bold
mb-6
">

Visitor Growth

</h2>



<ResponsiveContainer width="100%" height={300}>


<LineChart data={chartData}>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="name"/>

<YAxis/>


<Tooltip/>


<Line
type="monotone"
dataKey="visitors"
/>


</LineChart>


</ResponsiveContainer>


</div>







<div className="
bg-white/[0.06]
border
border-white/10
rounded-3xl
p-6
">


<h2 className="
text-xl
font-bold
mb-6
">

Lead Performance

</h2>



<ResponsiveContainer width="100%" height={300}>


<BarChart data={chartData}>


<XAxis dataKey="name"/>


<YAxis/>


<Tooltip/>


<Bar
dataKey="leads"
/>


</BarChart>


</ResponsiveContainer>


</div>






</div>


</>

}


</div>


)


}


export default Analytics;