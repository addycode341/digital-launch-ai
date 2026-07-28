import React,{
useEffect,
useState
} from "react";


import {
auth,
db
} from "../firebase";


import {
doc,
getDoc
} from "firebase/firestore";


import {
useNavigate
} from "react-router-dom";


import {
Globe,
Sparkles,
BarChart3,
Search,
Users,
Crown,
CheckCircle,
Lock
} from "lucide-react";


import {
plansFeatures
} from "../utils/planFeatures";





function Dashboard(){



const navigate = useNavigate();



const [userPlan,setUserPlan]=useState("Starter");

const [loading,setLoading]=useState(true);







useEffect(()=>{


loadPlan();


},[]);








const loadPlan=async()=>{


try{


const user = auth.currentUser;


if(!user){

setLoading(false);

return;

}





const userDoc = await getDoc(

doc(
db,
"users",
user.uid
)

);




if(userDoc.exists()){


const data=userDoc.data();


setUserPlan(

data.plan || "Starter"

);



}



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

<div className="
min-h-screen
flex
items-center
justify-center
text-white
">

Loading Dashboard 🚀

</div>

)


}









const currentFeatures = plansFeatures[userPlan];






const features=[


{
name:"Website Builder",
icon:<Globe/>,
key:"builder"
},


{
name:"Analytics",
icon:<BarChart3/>,
key:"analytics"
},


{
name:"SEO Report",
icon:<Search/>,
key:"seo"
},


{
name:"Leads",
icon:<Users/>,
key:"leads"
},


{
name:"AI Growth Tools",
icon:<Sparkles/>,
key:"aiGrowth"
}



];









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

Welcome Back 👋

</h1>



<p className="
text-gray-400
mt-2
">

Manage your DigitalLaunch AI growth

</p>



</div>









{/* CURRENT PLAN */}



<div className="
bg-gradient-to-br
from-purple-600/20
to-blue-600/20

border
border-white/10

rounded-3xl

p-8
">



<div className="
flex
justify-between
items-center
">


<div>


<p className="
text-gray-400
">

Current Plan

</p>


<h2 className="
text-4xl
font-bold
mt-2
">

{userPlan}

</h2>



</div>




<Crown

size={45}

className="
text-yellow-400
"

/>



</div>



</div>









<h2 className="
text-3xl
font-bold
">

Your Features 🚀

</h2>








<div className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-6
">



{

features.map((item,index)=>{


const unlocked =

currentFeatures?.[item.key];





return(


<div

key={index}

className="
bg-white/[0.05]

border
border-white/10

rounded-3xl

p-6
"

>


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

{item.icon}

</div>




<h3 className="
text-xl
font-bold
mt-5
">

{item.name}

</h3>







{

unlocked ?



<div className="
flex
gap-2
items-center
text-green-400
mt-4
">

<CheckCircle size={18}/>

Unlocked

</div>



:


<div>


<div className="
flex
gap-2
items-center
text-gray-500
mt-4
">

<Lock size={18}/>

Locked

</div>




<button

onClick={()=>navigate("/#pricing")}

className="
mt-4
px-5
py-2

rounded-xl

bg-gradient-to-r
from-purple-600
to-blue-600

"

>

Upgrade 🚀

</button>


</div>



}



</div>


)



})


}



</div>









{/* PLAN DETAILS */}



<div className="
bg-white/[0.05]

border
border-white/10

rounded-3xl

p-8
">


<h2 className="
text-2xl
font-bold
">

{userPlan} Plan Includes

</h2>



<div className="
grid
md:grid-cols-2
gap-5
mt-6
">


{

Object.keys(currentFeatures || {}).map((item)=>(


currentFeatures[item] &&


<div

key={item}

className="
flex
items-center
gap-3
text-gray-300
"

>


<CheckCircle

size={18}

className="
text-green-400
"

/>


{item}


</div>



))


}



</div>



</div>








</div>


)


}



export default Dashboard;