import React from "react";
import { Outlet } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";



function AdminLayout(){


return(


<div

className="
min-h-screen
bg-gradient-to-br
from-[#050816]
via-[#0b1020]
to-[#050816]

text-white

flex

"

>





{/* SIDEBAR */}


<AdminSidebar/>








{/* MAIN CONTENT */}


<main

className="

flex-1

ml-72

min-h-screen

p-6
lg:p-10

overflow-x-hidden


"

>


<Outlet/>


</main>







</div>


)


}



export default AdminLayout;