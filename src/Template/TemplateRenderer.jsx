import React from "react";

import BakeryWebsite from "./Bakery/BakeryWebsite";
import PrintingBusiness from "./PrintingBusiness/PrintingBusiness";
import RealEstate from "./real-estate/RealEstate";
import RestaurantWebsite from "./Restaurant/RestaurantWebsite";
import GymWebsite from "./Gym/GymWebsite";
import SalonWebsite from "./Salon/SalonWebsite";
import HotelWebsite from "./Hotel/HotelWebsite";
import MobileStoreWebsite from "./MobileStore/MobileStoreWebsite";


const templates = {

bakery: BakeryWebsite,

printing: PrintingBusiness,
"printing business": PrintingBusiness,
"printing-business": PrintingBusiness,


"real estate": RealEstate,
realestate: RealEstate,
"real-estate": RealEstate,


restaurant: RestaurantWebsite,


gym: GymWebsite,
fitness: GymWebsite,
"fitness gym": GymWebsite,


salon: SalonWebsite,
beauty: SalonWebsite,
"beauty salon": SalonWebsite,


hotel: HotelWebsite,
resort: HotelWebsite,


"mobile store": MobileStoreWebsite,
mobilestore: MobileStoreWebsite,
mobile: MobileStoreWebsite,
"mobile-store": MobileStoreWebsite

};





function TemplateRenderer({websiteData, preview=false}){


if(!websiteData){

return(

<div className="
min-h-screen
flex
items-center
justify-center
bg-black
text-white
">

No Website Data Found

</div>

)

}



const type =
websiteData?.businessType
?.toLowerCase()
?.trim();



const Template = templates[type];



if(!Template){

return(

<div className="
min-h-[500px]
flex
items-center
justify-center
bg-black
text-white
">

Template Coming Soon

</div>

)

}





return(

<div

className="
w-full
overflow-x-hidden
bg-black
"

>


<Template

data={websiteData}

preview={preview}

/>


</div>


)


}



export default TemplateRenderer;