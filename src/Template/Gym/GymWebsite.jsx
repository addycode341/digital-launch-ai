import React from "react";


function GymWebsite({data}){


return(

<div

className="
min-h-screen
bg-black
text-white
flex
items-center
justify-center
"

>

<h1

className="
text-5xl
font-bold
"

>

{data?.businessName || "Premium Gym"}

</h1>


</div>

)

}


export default GymWebsite;