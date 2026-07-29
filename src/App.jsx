import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


// PUBLIC

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PublicWebsite from "./pages/PublicWebsite";
import Payment from "./pages/Payment";



// USER DASHBOARD

import Dashboard from "./pages/Dashboard";
import Builder from "./pages/Builder";
import Preview from "./pages/Preview";
import Analytics from "./pages/Analytics";
import SEOReport from "./pages/SEOReport";
import UserLeads from "./pages/Leads";
import Settings from "./pages/Settings";
import MyWebsites from "./pages/MyWebsites";



// USER PROTECTION

import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import FeatureRoute from "./components/FeatureRoute";



// ADMIN

import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Clients from "./pages/Admin/Clients";
import Websites from "./pages/Admin/Websites";
import AdminAnalytics from "./pages/Admin/Analytics";
import AdminPreview from "./pages/Admin/AdminPreview";
import ClientDetail from "./pages/Admin/ClientDetail";
import Payments from "./pages/Admin/Payments";
import Leads from "./pages/Admin/Leads";
import ThankYou from "./pages/ThankYou";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import AdminLayout from "./pages/Admin/AdminLayout";



// DEMO TEMPLATES

import BakeryWebsite from "./Template/Bakery/BakeryWebsite";
import PrintingBusiness from "./Template/PrintingBusiness/PrintingBusiness";
import Gym from "./Template/Gym/Gym";
import RealEstate from "./Template/real-estate/RealEstate";
import RestaurantWebsite from "./Template/Restaurant/RestaurantWebsite";
import Salon from "./Template/Salon/SalonWebsite";
import HotelWebsite from "./Template/Hotel/HotelWebsite";
import MobileStoreWebsite from "./Template/MobileStore/MobileStoreWebsite";
function App(){

return(

<BrowserRouter>

<Routes>


{/* PUBLIC */}

<Route path="/" element={<Home/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/signup" element={<Signup/>}/>

<Route path="/payment" element={<Payment/>}/>

<Route 
path="/website/:slug"
element={<PublicWebsite/>}
/>



{/* DEMO */}

<Route
path="/bakery-demo"
element={<BakeryWebsite/>}
/>


<Route
path="/printing-business"
element={<PrintingBusiness/>}
/>


<Route
path="/Gym-demo"
element={<Gym/>}
/>


<Route
path="/real-estate-demo"
element={<RealEstate/>}
/>

<Route
path="/restaurant-demo"
element={<RestaurantWebsite/>}
/>


<Route
path="/salon-demo"
element={<Salon/>}
/>

<Route
path="/hotel-demo"
element={<HotelWebsite/>}
/>

<Route
path="/mobile-demo"
element={<MobileStoreWebsite/>}
/>

{/* USER DASHBOARD */}


<Route

element={

<ProtectedRoute>

<DashboardLayout/>

</ProtectedRoute>

}

>


<Route
path="/dashboard"
element={<Dashboard/>}
/>



<Route
path="/builder"
element={<Builder/>}
/>



<Route
path="/builder/:id"
element={<Builder/>}
/>



<Route
path="/preview"
element={<Preview/>}
/>



<Route

path="/analytics"

element={

<FeatureRoute feature="analytics">

<Analytics/>

</FeatureRoute>

}

/>



<Route

path="/seo-report"

element={

<FeatureRoute feature="seo">

<SEOReport/>

</FeatureRoute>

}

/>



<Route

path="/leads"

element={

<FeatureRoute feature="leads">

<UserLeads/>

</FeatureRoute>

}

/>



<Route
path="/settings"
element={<Settings/>}
/>



<Route
path="/my-websites"
element={<MyWebsites/>}
/>


</Route>






{/* ADMIN LOGIN */}

<Route

path="/admin/login"

element={<AdminLogin/>}

/>





{/* ADMIN PANEL */}


<Route

element={

<AdminProtectedRoute>

<AdminLayout/>

</AdminProtectedRoute>

}

>


<Route
path="/admin"
element={<AdminDashboard/>}
/>


<Route
path="/admin/clients"
element={<Clients/>}
/>


<Route
path="/admin/client/:id"
element={<ClientDetail/>}
/>


<Route
path="/admin/websites"
element={<Websites/>}
/>


<Route
path="/admin/payments"
element={<Payments/>}
/>


<Route
path="/admin/leads"
element={<Leads/>}
/>


<Route
path="/admin/analytics"
element={<AdminAnalytics/>}
/>


<Route
path="/admin/preview/:id"
element={<AdminPreview/>}
/>
<Route 
path="/thank-you" 
element={<ThankYou />} 
/>

</Route>


</Routes>

</BrowserRouter>

)

}


export default App; 