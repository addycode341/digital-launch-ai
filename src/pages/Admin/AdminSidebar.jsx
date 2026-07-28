import React from "react";

import {
  LayoutDashboard,
  Users,
  Globe,
  CreditCard,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
  FileText,
  Shield,
  Database
} from "lucide-react";


import {
  NavLink,
  useNavigate
} from "react-router-dom";





function AdminSidebar(){


const navigate = useNavigate();




const menu = [


{
name:"Dashboard",
path:"/admin",
icon:<LayoutDashboard size={20}/>
},



{
name:"Clients",
path:"/admin/clients",
icon:<Users size={20}/>
},




{
name:"Websites",
path:"/admin/websites",
icon:<Globe size={20}/>
},




{
name:"Payments",
path:"/admin/payments",
icon:<CreditCard size={20}/>
},




{
name:"Leads",
path:"/admin/leads",
icon:<MessageSquare size={20}/>
},




{
name:"Analytics",
path:"/admin/analytics",
icon:<BarChart3 size={20}/>
},




{
name:"Reports",
path:"#",
icon:<FileText size={20}/>
},




{
name:"Security",
path:"#",
icon:<Shield size={20}/>
},




{
name:"Database",
path:"#",
icon:<Database size={20}/>
},




{
name:"Settings",
path:"/admin/settings",
icon:<Settings size={20}/>
}



];






const logout = ()=>{


localStorage.removeItem(
"adminLogin"
);


navigate(
"/admin/login"
);


};








return(


<aside

className="
fixed
left-0
top-0

w-72
h-screen

bg-[#050816]

border-r
border-white/10

text-white

flex
flex-col

z-50

"

>







{/* LOGO */}



<div

className="
p-6

border-b
border-white/10

"

>


<h1

className="
text-2xl
font-bold

bg-gradient-to-r
from-purple-400
to-blue-400

bg-clip-text
text-transparent

"

>

DigitalLaunch.AI

</h1>



<p

className="
text-sm
text-gray-400
mt-1

"

>

Admin Control Center

</p>



</div>









{/* MENU */}



<nav

className="
flex-1

overflow-y-auto

p-5

space-y-3

"

>


{


menu.map((item)=>(


<NavLink


key={item.name}


to={item.path}



className={({isActive})=>`


flex
items-center
gap-4

px-4
py-3

rounded-xl

transition-all
duration-300


${


isActive


?

"bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"


:


"text-gray-400 hover:text-white hover:bg-white/10"


}



`}



>


{item.icon}



<span

className="
font-medium
"

>

{item.name}

</span>



</NavLink>


))


}



</nav>









{/* ADMIN PROFILE */}



<div

className="
p-5

border-t
border-white/10

"

>



<div

className="
flex
items-center
gap-3
mb-5

"

>



<div

className="
w-11
h-11

rounded-full

bg-gradient-to-r
from-purple-600
to-blue-600

flex
items-center
justify-center

font-bold

"

>

A

</div>





<div>

<h3

className="
font-semibold
"

>

Aditya

</h3>



<p

className="
text-xs
text-gray-400
"

>

Super Admin

</p>


</div>



</div>









<button


onClick={logout}


className="

w-full

flex
items-center
justify-center
gap-2

py-3

rounded-xl


bg-red-500/10

text-red-400


hover:bg-red-500/20


transition

"

>


<LogOut size={18}/>


Logout


</button>





</div>






</aside>



)


}



export default AdminSidebar;