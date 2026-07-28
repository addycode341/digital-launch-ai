import {
useEffect,
useState
} from "react";

import {
useParams
} from "react-router-dom";


import {
db
} from "../firebase";


import {
doc,
getDoc
} from "firebase/firestore";



import Hero from "../components/website/Hero";
import About from "../components/website/About";
import Gallery from "../components/website/Gallery";
import Features from "../components/website/Features";
import Services from "../components/website/Services";
import Pricing from "../components/website/Pricing";
import Testimonials from "../components/website/Testimonials";
import FAQ from "../components/website/FAQ";
import Contact from "../components/website/Contact";
import LeadForm from "../components/website/LeadForm";
import Footer from "../components/website/Footer";


import {
trackVisitor
} from "../services/analyticsService";


import {
saveDailyAnalytics
} from "../services/dailyAnalyticsService";






function PublicWebsite(){



const {
slug
}=useParams();



const [website,setWebsite]=useState(null);


const [loading,setLoading]=useState(true);









useEffect(()=>{



const fetchWebsite = async()=>{


try{



console.log(
"PUBLIC SLUG:",
slug
);





const ref = doc(

db,

"publicWebsites",

slug

);





const snap = await getDoc(ref);





if(snap.exists()){



const data=snap.data();



console.log(
"PUBLIC WEBSITE FOUND",
data
);






const finalWebsite={



...data.websiteData,


websiteId:
data.websiteId,


ownerId:
data.ownerId



};






setWebsite(finalWebsite);






// =============================
// VISITOR TRACKING FIX
// =============================



const visited =

sessionStorage.getItem(

`visited_${slug}`

);





if(!visited){



trackVisitor(

data.ownerId,

data.websiteId

);




saveDailyAnalytics(

data.websiteId,

"visitor"

);




sessionStorage.setItem(

`visited_${slug}`,

"true"

);



}








console.log(
"FINAL WEBSITE:",
finalWebsite
);



}

else{


console.log(
"WEBSITE NOT FOUND"
);


}




}

catch(error){


console.log(
"PUBLIC WEBSITE ERROR",
error
);



}


finally{


setLoading(false);


}


};





fetchWebsite();



},[slug]);











// =============================
// SEO TITLE
// =============================


useEffect(()=>{


if(website){



document.title =


website.businessName ||


website.title ||


"DigitalLaunch AI";



}



},[website]);












if(loading){



return(


<div

className="
min-h-screen
bg-slate-950
text-white
flex
items-center
justify-center
text-3xl
"

>


Loading Website...



</div>


)



}









if(!website){



return(


<div

className="
min-h-screen
bg-slate-950
text-white
flex
items-center
justify-center
text-3xl
"

>


Website Not Found ❌



</div>


)


}









return(



<div

className="
min-h-screen
bg-white
text-black
"

>





<Hero

website={website}

/>







<About

website={website}

/>







<Gallery

website={website}

/>







<Features

website={website}

/>







<Services

website={website}

/>







<Pricing

website={website}

/>







<Testimonials

website={website}

/>







<FAQ

website={website}

/>







<Contact

website={website}

/>







<LeadForm


ownerId={website.ownerId}


websiteId={website.websiteId}


businessName={
website.businessName
}


/>







<Footer

website={website}

/>







</div>



)



}





export default PublicWebsite;