import React,{useState} from "react";

import {
Outlet
} from "react-router-dom";

import {
Menu,
X
} from "lucide-react";

import AdminSidebar from "./AdminSidebar";


function AdminLayout(){

const [open,setOpen]=useState(false);


return(

<div className="
min-h-screen
bg-[#050816]
text-white
">


<AdminSidebar

open={open}

setOpen={setOpen}

/>



{/* MOBILE HEADER */}

<div className="
lg:hidden
sticky
top-0
z-40
bg-[#050816]
border-b
border-white/10
p-4
flex
items-center
gap-4
">


<button

onClick={()=>setOpen(!open)}

className="
bg-white/10
p-2
rounded-xl
"

>

{

open ?

<X size={22}/>

:

<Menu size={22}/>

}


</button>



<h1 className="
font-bold
text-xl
">

DigitalLaunch AI

</h1>



</div>





<main

className="
lg:ml-72
p-5
lg:p-10
"

>


<Outlet/>


</main>



</div>


)

}


export default AdminLayout;