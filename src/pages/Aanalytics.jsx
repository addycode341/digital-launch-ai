import {
useEffect,
useState
} from "react";


import {
collection,
doc,
getDocs,
getDoc
} from "firebase/firestore";


import {
auth,
db
} from "../firebase";


import {
AreaChart,
Area,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer
} from "recharts";


import {
Users,
Target,
TrendingUp,
Globe,
Sparkles
} from "lucide-react";





function Analytics(){



const [visitors,setVisitors]=useState(0);

const [leads,setLeads]=useState(0);

const [graphData,setGraphData]=useState([]);

const [loading,setLoading]=useState(true);






useEffect(()=>{

loadAnalytics();

},[]);






const loadAnalytics=async()=>{


try{


const user=auth.currentUser;


if(!user)
return;



const uid=user.uid;



const websiteSnap=await getDocs(

collection(
db,
"users",
uid,
"websites"
)

);



if(websiteSnap.empty)
return;



const websiteId=
websiteSnap.docs[0].id;





const statsSnap=await getDoc(

doc(
db,
"users",
uid,
"websites",
websiteId,
"analytics",
"stats"
)

);





if(statsSnap.exists()){


const data=statsSnap.data();



setVisitors(
data.visits || 0
);



if(data.daily){


setGraphData(

data.daily.map(item=>({

date:item.date,

visits:Number(
item.visits || 0
)

}))

);


}


}







const leadsSnap=await getDocs(

collection(
db,
"users",
uid,
"websites",
websiteId,
"leads"
)

);



setLeads(
leadsSnap.size
);



}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


};









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
"

>

Loading Analytics...

</div>

)

}







const conversion =
visitors>0
?
Math.round(
(leads/visitors)*100
)
:
0;







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


<p className="
text-purple-400
font-semibold
">

AI Growth Analytics

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

Analytics Dashboard 📊

</h1>



<p className="
text-gray-400
mt-3
text-lg
">

Track your website growth and customer performance

</p>


</div>









{/* STATS */}



<div

className="
grid
md:grid-cols-3

gap-6

mt-10

"

>


<StatCard

title="Visitors"

value={visitors}

icon={<Users/>}

/>




<StatCard

title="Leads"

value={leads}

icon={<Target/>}

/>




<StatCard

title="Conversion"

value={`${conversion}%`}

icon={<TrendingUp/>}

/>



</div>









{/* GRAPH */}



<div

className="
mt-10

bg-white/[0.05]

border

border-white/10

rounded-3xl

p-8

backdrop-blur-xl

"

>


<h2 className="
text-2xl
font-bold
mb-8
">

Visitor Growth 🚀

</h2>





{

graphData.length===0

?

<p className="
text-gray-400
">

No visitor data available

</p>


:


<ResponsiveContainer

width="100%"

height={350}

>


<AreaChart

data={graphData}

>


<CartesianGrid

strokeDasharray="3 3"

/>


<XAxis

dataKey="date"

stroke="#9ca3af"

/>



<YAxis

stroke="#9ca3af"

/>



<Tooltip />




<Area

type="monotone"

dataKey="visits"

stroke="#8b5cf6"

fill="#8b5cf6"

fillOpacity={0.25}

strokeWidth={3}

/>



</AreaChart>


</ResponsiveContainer>


}



</div>









{/* AI INSIGHTS */}



<div

className="
mt-10

bg-gradient-to-br

from-purple-600/20

to-blue-600/20

border

border-white/10

rounded-3xl

p-8

"

>


<div

className="
flex
items-center
gap-3
"

>


<Sparkles

className="
text-yellow-400
"

/>


<h2 className="
text-3xl
font-bold
">

AI Growth Insights

</h2>


</div>






<div

className="
grid
md:grid-cols-3

gap-5

mt-8

"

>


<Insight

title="Traffic"

text="Your visitors are increasing"

/>



<Insight

title="SEO"

text="Improve keywords ranking"

/>



<Insight

title="Customers"

text="Convert more leads"

/>



</div>


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
bg-white/[0.05]

border

border-white/10

rounded-3xl

p-7

"

>


<div

className="
w-12
h-12

rounded-xl

bg-purple-500/20

flex
items-center
justify-center

text-purple-400

"

>

{icon}

</div>



<p className="
text-gray-400
mt-5
">

{title}

</p>


<h2 className="
text-4xl
font-bold
mt-2
">

{value}

</h2>



</div>


)

}








function Insight({

title,
text

}){


return(

<div

className="
bg-black/20

rounded-2xl

p-5

"

>

<h3 className="
font-bold
text-xl
">

{title}

</h3>


<p className="
text-gray-400
mt-2
">

{text}

</p>


</div>

)

}






export default Analytics;