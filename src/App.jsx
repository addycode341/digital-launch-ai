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
import Analytics from "./pages/Aanalytics";
import SEOReport from "./pages/SEOReport";
import UserLeads from "./pages/leads";
import Settings from "./pages/settings";
import MyWebsites from "./pages/MyWebsites";




// USER PROTECTION

import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import FeatureRoute from "./components/FeatureRoute";





// ADMIN

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Clients from "./pages/admin/Clients";
import Websites from "./pages/admin/Websites";
import AdminAnalytics from "./pages/admin/Analytics";
import AdminPreview from "./pages/admin/AdminPreview";
import ClientDetail from "./pages/admin/ClientDetail";
import Payments from "./pages/admin/Payments";
import Leads from "./pages/admin/Leads";

import AdminProtectedRoute from "./components/AdminProtectedRoute";
import AdminLayout from "./pages/admin/AdminLayout";






// DEMO TEMPLATES

import BakeryWebsite from "./Template/Bakery/BakeryWebsite";
import PrintingBusiness from "./Template/PrintingBusiness/PrintingBusiness";
import Gym from "./Template/Gym/Gym";
import RealEstate from "./Template/real-estate/RealEstate";








function App(){


return(


<BrowserRouter>


<Routes>





{/* ================= PUBLIC ================= */}



<Route
path="/"
element={<Home/>}
/>



<Route
path="/login"
element={<Login/>}
/>



<Route
path="/signup"
element={<Signup/>}
/>



<Route
path="/payment"
element={<Payment/>}
/>



<Route
path="/website/:slug"
element={<PublicWebsite/>}
/>









{/* ================= DEMO ================= */}



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









{/* ================= USER DASHBOARD ================= */}




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







{/* Builder available after signup */}



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









{/* Premium Features */}




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












{/* ================= ADMIN LOGIN ================= */}



<Route

path="/admin/login"

element={<AdminLogin/>}

/>











{/* ================= ADMIN PANEL ================= */}





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




</Route>







</Routes>


</BrowserRouter>


)


}



export default App;