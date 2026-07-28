import React, {
useState
} from "react";


import {
NavLink,
useNavigate
} from "react-router-dom";


import {
LayoutDashboard,
Globe,
BarChart3,
Users,
Search,
Settings,
LogOut,
Crown,
Menu,
X
} from "lucide-react";


import {
signOut
} from "firebase/auth";


import {
auth
} from "../../firebase";


import {
PLAN_FEATURES
} from "../../utils/planFeatures";





function Sidebar(){



const navigate = useNavigate();


const [open,setOpen] = useState(false);

const [loading,setLoading] = useState(false);





const plan =
localStorage.getItem("userPlan") || "Starter";



const features =
PLAN_FEATURES[plan];






const logout = async()=>{


try{


setLoading(true);


await signOut(auth);


localStorage.removeItem("userPlan");


navigate("/login");


}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


};









const menu=[



{
name:"Dashboard",
icon:<LayoutDashboard size={20}/>,
path:"/dashboard"
},




{
name:"My Websites",
icon:<Globe size={20}/>,
path:"/my-websites"
},






features.analytics &&

{
name:"Analytics",
icon:<BarChart3 size={20}/>,
path:"/analytics"
},





features.seo &&

{
name:"SEO Report",
icon:<Search size={20}/>,
path:"/seo-report"
},





features.leads &&

{
name:"Leads",
icon:<Users size={20}/>,
path:"/leads"
},




{
name:"Settings",
icon:<Settings size={20}/>,
path:"/settings"
}



].filter(Boolean);









return(


<>


{/* MOBILE BUTTON */}


<button

onClick={()=>setOpen(true)}

className="
lg:hidden
fixed
top-5
left-5
z-50

p-3
rounded-xl

bg-white/10
backdrop-blur-xl

border
border-white/10

text-white
"

>

<Menu size={24}/>

</button>









{/* OVERLAY */}



{

open &&

<div

onClick={()=>setOpen(false)}

className="
fixed
inset-0
bg-black/60
z-40
lg:hidden
"

/>

}









<aside


className={`

fixed

top-0
left-0

z-50

w-80

h-screen


bg-gradient-to-b
from-[#090d1f]
via-[#070a17]
to-[#050816]


border-r
border-white/10


px-6
py-7


flex
flex-col


transition-transform
duration-300



${
open
?
"translate-x-0"
:
"-translate-x-full"
}



lg:translate-x-0

`}


>








<button

onClick={()=>setOpen(false)}

className="
lg:hidden
absolute
right-5
top-5
text-gray-400
"

>

<X size={22}/>

</button>









{/* LOGO */}


<div className="
mb-10
">


<div className="
flex
items-center
gap-3
">


<div className="
w-12
h-12
rounded-2xl

bg-gradient-to-br
from-blue-500
to-purple-600

flex
items-center
justify-center

text-xl
">

🚀

</div>



<div>


<h1 className="
text-xl
font-bold

bg-gradient-to-r
from-blue-400
to-purple-500

bg-clip-text
text-transparent
">

DigitalLaunch.AI

</h1>



<p className="
text-xs
text-gray-500
">

AI Growth Platform

</p>


</div>


</div>


</div>









<p className="
text-xs
uppercase
tracking-widest
text-gray-500
mb-4
">

Workspace

</p>









<nav className="
space-y-2
">


{

menu.map(item=>(


<NavLink


key={item.name}


to={item.path}


onClick={()=>setOpen(false)}



className={({isActive})=>`

flex
items-center
gap-4

px-4
py-3.5

rounded-2xl


transition-all


${
isActive

?

"bg-gradient-to-r from-purple-600 to-blue-600 text-white"

:

"text-gray-400 hover:text-white hover:bg-white/5"

}

`}


>


{item.icon}


<span className="
font-medium
text-sm
">

{item.name}

</span>



</NavLink>


))


}



</nav>









{/* UPGRADE */}



<div className="
mt-8

rounded-3xl

p-5

bg-gradient-to-br
from-purple-600/20
to-blue-600/20

border
border-white/10
">


<div className="
flex
items-center
gap-2
">


<Crown

size={20}

className="
text-yellow-400
"

/>



<h3 className="
font-bold
">

{plan} Plan

</h3>


</div>



<p className="
text-sm
text-gray-400
mt-3
">

Upgrade to unlock more AI growth tools.

</p>




<button

onClick={()=>navigate("/#pricing")}

className="
mt-4

w-full

py-3

rounded-xl

bg-gradient-to-r
from-purple-600
to-blue-600

font-semibold
"

>

Upgrade 🚀

</button>



</div>









{/* PROFILE */}



<div className="
mt-auto

pt-6

border-t
border-white/10
">


<div className="
flex
items-center
gap-3
mb-5
">


<div className="
w-12
h-12
rounded-full

bg-gradient-to-br
from-purple-500
to-blue-500

flex
items-center
justify-center

font-bold
">

A

</div>



<div>

<h3 className="
font-semibold
">

Aditya

</h3>



<p className="
text-xs
text-gray-400
">

{plan} Plan

</p>


</div>


</div>








<button

onClick={logout}

disabled={loading}

className="
w-full

flex
items-center
justify-center
gap-3

py-3

rounded-xl


bg-red-500/10

text-red-400

"

>


<LogOut size={18}/>


{
loading
?
"Logging out..."
:
"Logout"
}



</button>





</div>






</aside>


</>


)

}



export default Sidebar;