import React from "react";


// Templates

import BakeryWebsite from "./Bakery/BakeryWebsite";
import PrintingBusiness from "./PrintingBusiness/PrintingBusiness";
import RealEstate from "./real-estate/RealEstate";

// Future
// import GymWebsite from "./Gym/GymWebsite";



function TemplateRenderer({ websiteData }) {



  if(!websiteData){

    return (

      <div className="text-center text-gray-400">

        No Website Data Found

      </div>

    );

  }




  const type = websiteData.businessType
  ?.toLowerCase();





  switch(type){



    case "bakery":

      return (

        <BakeryWebsite 
        data={websiteData}
        />

      );





    case "printing":

      return (

        <PrintingBusiness
        data={websiteData}
        />

      );







    case "real estate":

    case "realestate":

    case "real-estate":


      return (

        <RealEstate

        data={websiteData}

        />

      );








    // Future Template


    // case "gym":

    // return <GymWebsite data={websiteData}/>







    default:


      return (

        <div

        className="
        text-center
        py-20
        text-white
        "

        >

          Template Not Available


        </div>

      );



  }



}



export default TemplateRenderer;