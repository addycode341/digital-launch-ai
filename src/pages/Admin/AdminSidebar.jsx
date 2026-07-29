import React from "react";

import {
NavLink,
useNavigate
} from "react-router-dom";


import {

LayoutDashboard,
Users,
Globe,
CreditCard,
BarChart3,
MessageSquare,
Settings,
LogOut,
X

} from "lucide-react";





function AdminSidebar({open,setOpen}){


const navigate=useNavigate();



const logout=()=>{

localStorage.removeItem(
"adminLoggedIn"
);


navigate("/admin/login");

};





const links=[

{
name:"Dashboard",
path:"/admin",
icon:<LayoutDashboard/>
},

{
name:"Clients",
path:"/admin/clients",
icon:<Users/>
},

{
name:"Websites",
path:"/admin/websites",
icon:<Globe/>
},


{
name:"Payments",
path:"/admin/payments",
icon:<CreditCard/>
},


{
name:"Analytics",
path:"/admin/analytics",
icon:<BarChart3/>
},


{
name:"Leads",
path:"/admin/leads",
icon:<MessageSquare/>
},


{
name:"Settings",
path:"/admin/settings",
icon:<Settings/>
}


];




return(


<>


{/* OVERLAY MOBILE */}

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

h-screen

w-72

bg-[#080d1d]

border-r

border-white/10

p-6

z-50

transition-transform

duration-300


${

open

?

"translate-x-0"

:

"-translate-x-full lg:translate-x-0"

}


`}


>



<div className="
flex
justify-between
items-center
mb-10
">


<h1 className="
text-2xl
font-bold
">

DigitalLaunch

<span className="
text-purple-500
">

.AI

</span>


</h1>



<button

className="
lg:hidden
"

onClick={()=>setOpen(false)}

>

<X/>

</button>


</div>







<nav className="
space-y-3
">


{

links.map(item=>(


<NavLink


key={item.path}


to={item.path}


onClick={()=>setOpen(false)}


className={({isActive})=>

`

flex
items-center
gap-3
px-4
py-3
rounded-xl
transition

${

isActive

?

"bg-purple-600 text-white"

:

"text-gray-400 hover:bg-white/10 hover:text-white"

}

`

}


>


{item.icon}

<span>

{item.name}

</span>


</NavLink>



))


}



</nav>








<button


onClick={logout}


className="
mt-10
w-full
flex
items-center
gap-3
px-4
py-3
rounded-xl
bg-red-500/20
text-red-400
"


>


<LogOut/>

Logout


</button>





</aside>



</>


)

}


export default AdminSidebar;