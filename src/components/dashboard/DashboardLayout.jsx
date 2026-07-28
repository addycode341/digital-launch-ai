import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";


function DashboardLayout(){


return(

<div

className="
min-h-screen
bg-[#050816]
text-white
"

>


{/* SIDEBAR */}

<Sidebar />





{/* MAIN CONTENT */}

<main

className="
lg:ml-80

min-h-screen

p-5
sm:p-8
lg:p-10

overflow-x-hidden

bg-gradient-to-br
from-[#050816]
via-[#080d1d]
to-[#0b1020]

"

>


<Outlet />


</main>



</div>


)

}


export default DashboardLayout;